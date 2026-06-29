import React from "react";
import { motion } from "framer-motion";

// Deterministic Pseudo-Random Generator
function createRandom(seed) {
  let s = seed;
  return function () {
    s = Math.sin(s) * 10000;
    return s - Math.floor(s);
  };
}

// Bounds check to keep branches within the dynamic gutter width
function getForkAngles(x, y, parentExitAngle, rand, side, viewBoxWidth) {
  const sign = rand() > 0.5 ? 1 : -1;
  const split1 = sign * (15 + rand() * 10) * Math.PI / 180;
  const split2 = -sign * (22 + rand() * 13) * Math.PI / 180;

  let angle1 = parentExitAngle + split1;
  let angle2 = parentExitAngle + split2;

  if (side === "left") {
    if (x < 45) {
      angle1 = -Math.PI / 3 + (rand() - 0.5) * 0.3;
      angle2 = Math.PI / 3 + (rand() - 0.5) * 0.3;
    } else if (x > viewBoxWidth - 30) {
      angle1 = 2 * Math.PI / 3 + (rand() - 0.5) * 0.3;
      angle2 = 4 * Math.PI / 3 + (rand() - 0.5) * 0.3;
    }
  } else {
    if (x > viewBoxWidth - 45) {
      angle1 = 2 * Math.PI / 3 + (rand() - 0.5) * 0.3;
      angle2 = 4 * Math.PI / 3 + (rand() - 0.5) * 0.3;
    } else if (x < 30) {
      angle1 = -Math.PI / 3 + (rand() - 0.5) * 0.3;
      angle2 = Math.PI / 3 + (rand() - 0.5) * 0.3;
    }
  }

  return [angle1, angle2];
}

// Build a branch node recursively for a 4-level bush structure
function buildBranchNode(x0, y0, startAngle, level, rand, side, parentStagger, branchIndex, viewBoxWidth) {
  const lengthFactors = [0, 0.38, 0.24, 0.15, 0.09];
  const strokeWidths = [0, 1.5, 1.0, 0.7, 0.4];

  // Highly irregular length scaling with the width of the container
  const scaleWidth = Math.max(160, viewBoxWidth);
  const length = scaleWidth * lengthFactors[level] * (0.5 + rand() * 1.0);
  const strokeWidth = strokeWidths[level];

  // Chained Bezier segments to introduce direction changes
  const L1 = length * 0.45;
  const L2 = length * 0.55;

  const d1 = (rand() - 0.5) * 0.45; // ±13°
  const midAngle = startAngle + d1;

  const x_mid = x0 + L1 * Math.cos(midAngle);
  const y_mid = y0 + L1 * Math.sin(midAngle);

  // Divergence of 15° to 25°
  const divSign = rand() > 0.5 ? 1 : -1;
  const divergence = divSign * (15 + rand() * 10) * Math.PI / 180;
  const startAngle2 = midAngle + divergence;

  const d2 = (rand() - 0.5) * 0.45;
  const endAngle = startAngle2 + d2;

  const x_end = x_mid + L2 * Math.cos(endAngle);
  const y_end = y_mid + L2 * Math.sin(endAngle);

  // Chained control points
  const cp1x = x0 + (L1 / 3) * Math.cos(startAngle);
  const cp1y = y0 + (L1 / 3) * Math.sin(startAngle);
  const cp2x = x_mid - (L1 / 3) * Math.cos(midAngle);
  const cp2y = y_mid - (L1 / 3) * Math.sin(midAngle);

  const cp3x = x_mid + (L2 / 3) * Math.cos(startAngle2);
  const cp3y = y_mid + (L2 / 3) * Math.sin(startAngle2);
  const cp4x = x_end - (L2 / 3) * Math.cos(endAngle);
  const cp4y = y_end - (L2 / 3) * Math.sin(endAngle);

  const d = `M ${x0.toFixed(1)},${y0.toFixed(1)} C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${x_mid.toFixed(1)},${y_mid.toFixed(1)} C ${cp3x.toFixed(1)},${cp3y.toFixed(1)} ${cp4x.toFixed(1)},${cp4y.toFixed(1)} ${x_end.toFixed(1)},${y_end.toFixed(1)}`;

  // Stagger delays per level - slow natural growth
  const delaySteps = [0, 0, 3.5, 3.0, 2.5];
  const currentStagger = parentStagger + (delaySteps[level - 1] || 0);

  const node = {
    id: `${side}-node-lvl${level}-${branchIndex}-${x0.toFixed(0)}-${y0.toFixed(0)}`,
    level,
    strokeWidth,
    d,
    x0,
    y0,
    x_mid,
    y_mid,
    x_end,
    y_end,
    midAngle,
    exitAngle: endAngle,
    stagger: currentStagger,
    children: []
  };

  if (level < 4) {
    const forkCount = 2;
    const forkAngles = getForkAngles(x_end, y_end, endAngle, rand, side, viewBoxWidth);

    for (let i = 0; i < forkCount; i++) {
      const childAngle = forkAngles[i];
      const childIndex = branchIndex * 2 + i;
      node.children.push(
        buildBranchNode(x_end, y_end, childAngle, level + 1, rand, side, currentStagger, childIndex, viewBoxWidth)
      );
    }
  }

  return node;
}

// Global glow colors mapping
const glowColors = {
  home: "rgba(56, 189, 248, 0.95)",      // Sky Blue (Blue Theme)
  skills: "rgba(52, 211, 153, 0.95)",    // Emerald Green (Green Theme)
  projects: "rgba(244, 63, 94, 0.95)",    // Crimson Rose (Red Theme)
  contacts: "rgba(251, 191, 36, 0.95)",    // Amber Gold (Amber/Orange Theme)
};

// Render a single branch node recursively
function RenderBranchNode({ node, darkMode, activeSection }) {
  const dashArray = node.level === 4 ? "4 1.5" : undefined;

  const durationOffset = Math.sin(node.level + node.x0) * 1.5;
  const pathDuration = node.level === 1 ? 12.0 : node.level === 2 ? 8.5 : node.level === 3 ? 6.5 : 5.0;
  const duration = Math.max(3.0, pathDuration + durationOffset);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: node.level === 4 ? 0.65 : node.level >= 2 ? 0.75 : 0.85,
      transition: {
        pathLength: { delay: node.stagger, duration: duration, ease: node.level <= 1 ? "anticipate" : "easeOut" },
        opacity: { delay: node.stagger, duration: 1.0, ease: "linear" }
      }
    }
  };

  // Performance Optimization: Only run active animations on main branches.
  // Fine twigs inherit sway from parent coordinates automatically.
  const shouldAnimateSway = node.level <= 2;
  const baseSwayAmplitude = [0, 0.2, 0.4][node.level] || 0;
  const swayDuration = node.level === 1 ? 22 : 16;
  const swayOffset = Math.sin(node.x0 + node.y0) * 2.0;

  const swayVariants = shouldAnimateSway ? {
    animate: {
      rotate: [-baseSwayAmplitude, baseSwayAmplitude, -baseSwayAmplitude * 0.6, baseSwayAmplitude * 0.8, -baseSwayAmplitude],
      transition: {
        duration: swayDuration + swayOffset,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  } : {};

  return (
    <motion.g
      style={{ transformOrigin: `${node.x0.toFixed(1)}px ${node.y0.toFixed(1)}px` }}
      variants={shouldAnimateSway ? swayVariants : undefined}
      animate={shouldAnimateSway ? "animate" : undefined}
    >
      <motion.path
        d={node.d}
        stroke="url(#branchGrad)"
        strokeWidth={node.strokeWidth}
        strokeLinecap="round"
        strokeDasharray={dashArray}
        fill="none"
        initial="hidden"
        animate="visible"
        variants={pathVariants}
      />
      {node.children && node.children.map((child) => (
        <RenderBranchNode key={child.id} node={child} darkMode={darkMode} activeSection={activeSection} />
      ))}
    </motion.g>
  );
}

export default function SideBorders({ side, darkMode, targetId, activeSection }) {
  const [parentCoords, setParentCoords] = React.useState(null);
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const updateCoords = () => {
      const rect = target.getBoundingClientRect();
      setParentCoords({
        left: rect.left,
        right: rect.right,
        screenWidth: window.innerWidth
      });
    };

    updateCoords();

    const observer = new ResizeObserver(() => {
      updateCoords();
    });
    observer.observe(target);
    if (document.body) {
      observer.observe(document.body);
    }

    // Performance Optimization: Removed 'scroll' event listener.
    // Gutter width is static horizontally during vertical scroll, removing this prevents Forced Reflow scroll lag.
    window.addEventListener("resize", updateCoords);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateCoords);
    };
  }, [targetId]);

  // Dynamic width of the container
  const viewBoxWidth = side === "left"
    ? (parentCoords ? parentCoords.left : 256)
    : (parentCoords ? (parentCoords.screenWidth - parentCoords.right) : 256);

  const viewBoxHeight = 1000;

  // 22 independent branches distributed evenly along the vertical canvas height
  const systems = React.useMemo(() => {
    const allSystems = [];
    const branchCount = 22;

    for (let i = 0; i < branchCount; i++) {
      const seed = (side === "left" ? 23 : 59) * 1000 + i * 53;
      const rand = createRandom(seed);

      const interval = 1000 / branchCount;
      const Y_base = interval * i + rand() * (interval * 0.7);

      const startX = side === "left" ? viewBoxWidth - (rand() * 12) : (rand() * 12);

      const initialAngle = side === "left"
        ? Math.PI + (rand() - 0.5) * 1.8
        : 0 + (rand() - 0.5) * 1.8;

      const stagger = rand() * 10.0;

      allSystems.push(
        buildBranchNode(startX, Y_base, initialAngle, 1, rand, side, stagger, i, viewBoxWidth)
      );
    }
    return allSystems;
  }, [side, viewBoxWidth]);

  if (!darkMode || !parentCoords || parentCoords.screenWidth < 1024) {
    return null;
  }

  const themeColors = { start: "#e5e7eb", end: "#d1d5db" };

  const wrapperStyle = side === "left"
    ? { left: 0, width: `${viewBoxWidth}px`, height: "100vh" }
    : { left: `${parentCoords.right}px`, width: `${viewBoxWidth}px`, height: "100vh" };

  return (
    <div
      ref={wrapperRef}
      className="fixed top-0 bottom-0 pointer-events-none z-30 select-none overflow-hidden"
      style={wrapperStyle}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="none"
        initial="hidden"
        animate="visible"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="branchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={themeColors.start} />
            <stop offset="100%" stopColor={themeColors.end} />
          </linearGradient>

          <filter id="thickBranchFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4.0" xChannelSelector="R" yChannelSelector="G" />
          </filter>

          <filter id="thinBranchFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.13" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            
            {/* O(1) Unified High Performance Glow Pipeline */}
            <feGaussianBlur in="displaced" stdDeviation="2.5" result="blur" />
            <feFlood
              result="glowColor"
              style={{
                floodColor: (darkMode && activeSection) ? (glowColors[activeSection] || "#fff") : "transparent",
                floodOpacity: (darkMode && activeSection) ? 0.95 : 0,
                transition: "flood-color 1500ms ease-in-out, flood-opacity 1000ms ease-in-out",
              }}
            />
            <feComposite in="glowColor" in2="blur" operator="in" result="coloredGlow" />
            
            <feMerge>
              <feMergeNode in="coloredGlow" />
              <feMergeNode in="displaced" />
            </feMerge>
          </filter>
        </defs>

        {/* Performance Optimization: Applied displacement filter once on the parent group instead of on each individual path */}
        <g filter="url(#thinBranchFilter)">
          {systems.map((systemNode) => (
            <RenderBranchNode key={systemNode.id} node={systemNode} darkMode={darkMode} activeSection={activeSection} />
          ))}
        </g>
      </motion.svg>
    </div>
  );
}
