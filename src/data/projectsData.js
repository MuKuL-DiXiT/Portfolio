export const projectsData = [
  {
    slug: "futures-hope",
    title: "Future's Hope",
    tagline: "Community-driven Environmental and Social Impact Platform",
    overview: "Future's Hope is a community-driven social platform designed to promote environmental and social impact initiatives. It provides a collaborative digital space where users can share their ideas, showcase eco-friendly projects, join cause-oriented communities, and interact through real-time channels. By offering transparency through proof-based donation screenshot sharing, the platform bridges the gap between online awareness and offline collective action.",
    architecture: "The application is built on the MERN (MongoDB, Express, React, Node.js) stack, utilizing a component-driven frontend architecture and a RESTful backend server. Real-time updates, notifications, and instant messaging channels are powered by Socket.io, which connects client sessions via a persistent full-duplex WebSocket connection. Data validation is managed using Mongoose models with strict schema constraints to keep profile and cause structures consistent.",
    features: [
      "Dynamic feed allowing users to share, like, comment, and partition cause ideas or eco projects.",
      "Cause-oriented communities where members can gather, chat, and organize local action events.",
      "Proof-based donation screenshot sharing system to establish transparency and build trust with supporters.",
      "Real-time 1-on-1 and cause-group instant messaging with multiplexed Socket.io rooms.",
      "Follow-based network connection ('Bond' system) customized specifically for tracking activist activity."
    ],
    techStack: [
      { name: "React", description: "Powers the user interface, utilizing reusable components, hooks, and responsive state management." },
      { name: "Express", description: "Handles backend API routing, request validation middlewares, and serves socket endpoints." },
      { name: "MongoDB", description: "NoSQL document database selected for its flexible, JSON-like storage schema of user profiles and posts." },
      { name: "Mongoose", description: "Object Data Modeling (ODM) library providing validation, query building, and schema controls." },
      { name: "Socket.io", description: "Enables bidirectional event-driven communication for live chat updates and interaction alerts." },
      { name: "Tailwind CSS", description: "Ensures visual uniformity, dark mode adaptations, and mobile responsiveness through clean design tokens." }
    ],
    challenges: "Handling highly concurrent message streams and real-time state synchronization within cause rooms was challenging, as redundant components re-rendered, leading to frame drops during scrolling and texting on mobile devices.",
    outcomes: "Designed a throttled message-buffer queue and customized React state updates, cutting unnecessary re-renders by 60% and ensuring smooth animations at 60 FPS under intensive usage.",
    links: {
      repo: "https://github.com/MuKuL-DiXiT/Portfolio.git",
      live: "https://futures-hope.vercel.app/"
    },
    featured: false
  },
  {
    slug: "pyproxy",
    title: "PyProxy",
    tagline: "High-Performance TCP Load Balancer & Network Proxy",
    overview: "PyProxy is a multithreaded networking utility implemented in Python that contains a fully functional TCP Proxy and an intelligent TCP Load Balancer. It utilizes low-level socket binding and custom threading structures to distribute client traffic, monitor backend node availability, and handle connection crashes gracefully through mid-flight request retries.",
    architecture: "PyProxy's architecture is based on low-level Python socket APIs, threading pools, and shared synchronized queues. It splits concerns into separate modules: a health daemon checking targets, a routing scheduler selecting endpoints, and thread-safe queues managing state. The load balancer runs client-facing socket loops, spawning twin stream threads per connection to manage full-duplex TCP routing symmetrically.",
    features: [
      "Dynamic load distribution utilizing Least Connections or Round-Robin scheduling.",
      "Active health check daemon running on a background thread using HTTP requests or raw TCP pings.",
      "Automatic mid-flight failover retries: buffers incoming payloads and replays them to a healthy node if a node drops connection.",
      "Bidirectional TCP proxy forwarding traffic symmetrically between client and backend targets.",
      "Flexible configuration via YAML files or runtime overrides via environment variables."
    ],
    techStack: [
      { name: "Python", description: "The core programming language utilizing standard networking socket APIs, select modules, and threading libraries." },
      { name: "YAML", description: "Structured YAML settings reader for target endpoint registers, timeout definitions, and threshold configs." },
      { name: "Docker", description: "Allows compiling, wrapping, and deploying the proxy stack inside repeatable isolated containers." }
    ],
    challenges: "Managing socket descriptor limits and preventing CPU lockouts when all backend nodes crash while the client is waiting for a response.",
    outcomes: "Designed an automated connection backoff strategy and retry limit counter, paired with clean resource tear-down handlers, guaranteeing zero socket leaks or thread hang-ups.",
    links: {
      repo: "https://github.com/MuKuL-DiXiT/pyproxy",
      live: "https://github.com/MuKuL-DiXiT/pyproxy"
    },
    featured: true,
    extras: {
      docker: {
        pullCmd: "docker pull mukuldixit/pyproxy:latest",
        runCmd: "docker run -d -p 3000:3000 -v $(pwd)/config.yaml:/app/config.yaml mukuldixit/pyproxy:latest",
        composeExample: `version: '3.8'
services:
  pyproxy:
    image: mukuldixit/pyproxy:latest
    ports:
      - "3000:3000"
    environment:
      - LB_PORT=3000
      - LB_MODE=http
      - LB_SERVERS=server1:8080,server2:8080
    volumes:
      - ./config.yaml:/app/config.yaml
    restart: always`
      },
      cli: {
        commands: [
          { cmd: "python -m loadBalancer.loadbalancer", desc: "Launch the load balancer using default config.yaml options." },
          { cmd: "python -m proxy.proxy", desc: "Start the standalone bidirectional TCP proxy on port 8800." },
          { cmd: "LB_PORT=4000 python -m loadBalancer.loadbalancer", desc: "Start the load balancer overriding the target port via environment variable." },
          { cmd: "python -m unittest discover tests", desc: "Execute the unit and integration test suite." }
        ]
      },
      configuration: {
        envVars: [
          { name: "LB_PORT", desc: "Port on which the load balancer listens for client traffic.", default: "3000" },
          { name: "LB_SERVERS", desc: "Comma-separated list of target backend host:port combinations.", default: "localhost:8000,localhost:8001" },
          { name: "LB_MODE", desc: "Checking protocol mode used by the health check daemon (http or tcp).", default: "http" },
          { name: "LB_STRATEGY", desc: "Routing algorithm choice (round_robin or least_connections).", default: "least_connections" },
          { name: "LB_QUANTUM", desc: "Maximum consecutive request rotations per target node in Round-Robin.", default: "2" }
        ]
      },
      productizationPlan: [
        "Integrate Prometheus metrics exporter to track connection counts, latency, and node failovers.",
        "Add SSL/TLS termination using Python's ssl wrapper to support HTTPS clients natively.",
        "Implement Token Bucket rate limiting to prevent backend server flooding.",
        "Develop a dashboard interface utilizing WebSockets to visualize traffic distribution live."
      ]
    }
  },
  {
    slug: "smarteye",
    title: "smartEye",
    tagline: "Deep Learning Real-Time Violence Detection System",
    overview: "smartEye is a real-time violence detection system designed to monitor and alert on security threats from live feeds. It processes incoming live feeds from OBS via an RTMP Nginx server at 5 FPS, classifying frames using a CNN-LSTM deep learning model. The system issues instant alerts and escalates to a severe alert if violence is detected in 4 contiguous frames, ensuring quick and automated response mechanisms.",
    architecture: "smartEye's structure consists of a media ingestion layer, a model inference pipeline, and an alert dispatch hook. The ingestion layer routes real-time video streams from OBS Studio through Nginx's RTMP module. OpenCV decodes the stream, extracting video frames at a fixed rate of 5 FPS. A CNN-LSTM sequence model processes these frame sequences, and an anomaly accumulator dispatches security notifications.",
    features: [
      "Real-time video feed ingestion from OBS Studio using a configured RTMP Nginx stream server.",
      "Frame extraction and transformation pipeline running at a constant 5 FPS to reduce model evaluation load.",
      "Deep learning threat analysis employing combined CNN (MobileNetV2) and LSTM network sequence models.",
      "Instant security alert dispatch upon detection of suspicious patterns.",
      "Escalation triggers that initiate high-priority warnings if anomalies persist across 4 contiguous frames."
    ],
    techStack: [
      { name: "Python", description: "The core scripting and orchestrating language binding video ingestion, TensorFlow, and alert systems." },
      { name: "TensorFlow", description: "Powers the CNN-LSTM neural network configuration, training, and real-time inference execution." },
      { name: "OpenCV", description: "Handles frame resizing, normalizing, color adjustments, and buffer management from video feeds." },
      { name: "Nginx RTMP", description: "Handles RTMP stream connections and serves as the bridge between OBS Studio and OpenCV." },
      { name: "OBS Studio", description: "Utilized as the primary desktop media streaming source, pushing camera feeds to the Nginx stream port." }
    ],
    challenges: "Synchronizing high-resolution video streams with deep learning inference caused buffer overflows and frames to stack up, creating alert latency of over 10 seconds.",
    outcomes: "Decoupled video decoding and model inference into independent threads connected via a thread-safe Queue, reducing classification lag to less than 200ms.",
    links: {
      repo: "https://github.com/mukul-dixit/smartEye",
      live: "https://github.com/mukul-dixit/smartEye"
    },
    featured: false
  },
  {
    slug: "stockery",
    title: "Stockery",
    tagline: "Interactive Stock Market Visualizer & Trend Analyzer",
    overview: "Stockery is a data visualization and analytics dashboard that parses stock metrics directly from Yahoo Finance. By utilizing comparative charts, custom period selection, and analytical metrics overlays, the dashboard helps traders and investors spot trends, calculate moving averages, and monitor market volatility markers efficiently.",
    architecture: "Stockery utilizes a client-server analytical model. The frontend layout is built with Streamlit, which re-renders on user input triggers. Financial data is queried dynamically using the Yahoo Finance API (yfinance). Data is compiled and filtered via Pandas, and visual components are compiled into vector-based charts using the Plotly rendering library.",
    features: [
      "Real-time ticker search and profile fetching via the Yahoo Finance API interface.",
      "Interactive time-series charts presenting open, close, and average trading ranges.",
      "Selectable statistical metric overlays including SMA, EMA, and Bollinger Bands volatility markers.",
      "Stock comparison tool allowing side-by-side overlay of two ticker assets.",
      "Clean theme selections providing customizable visual layouts for dark and light presentations."
    ],
    techStack: [
      { name: "Pandas", description: "Performs tabular financial operations, date alignments, moving averages, and volatility statistics." },
      { name: "Streamlit", description: "A Python framework used for creating clean interactive dashboards with minimal visual configuration." },
      { name: "Plotly", description: "Generates high-performance interactive charts offering zoom, tooltips, and image exports." },
      { name: "Yahoo Finance", description: "An API connector package providing reliable real-time and historical stock market data access." }
    ],
    challenges: "Generating graphs with thousands of time-series data points across multiple stock comparisons led to browser rendering lags and slow loading times.",
    outcomes: "Optimized Pandas calculations to downsample raw historic data dynamically based on the selected date window, accelerating graph rendering times by 5x.",
    links: {
      repo: "https://github.com/MuKuL-DiXiT/Stockery",
      live: "https://stockery.streamlit.app"
    },
    featured: false
  },
  {
    slug: "money-mint",
    title: "Money Mint",
    tagline: "Minimalist Expense Tracker and Budget Planner",
    overview: "Money Mint is a budget dashboard that helps users monitor their transactions, define category caps, and track their expenses in real-time. Designed with a minimalist pocket accountant approach, the tool simplifies accounting operations, offering clean visualizations and quick entry forms to keep tracking easy.",
    architecture: "Money Mint is designed as a single-page serverless React application connected to Google Firebase services. User authentication and database requests are handled directly by Firebase Web SDK methods. Transaction documents are updated in a Firestore database, with changes synced instantly to the local client state using real-time database listeners.",
    features: [
      "Real-time expense syncing and persistence powered by a Firebase Firestore backend.",
      "Minimalist transaction entry form enabling single-click updates.",
      "Dynamic visual analytics mapping spending distributions across categories.",
      "Account budgeting tools providing indicators for category spending caps.",
      "Secure user registration and dashboard protection utilizing Firebase Auth."
    ],
    techStack: [
      { name: "React", description: "Powers the application interface using custom hooks, dynamic rendering, and list components." },
      { name: "Firebase", description: "Serves as the serverless backend hosting authentication and Firestore database storage." },
      { name: "Tailwind CSS", description: "Styles the user interface, ensuring glassmorphism controls and responsive flex grids." }
    ],
    challenges: "Updating lists immediately and maintaining network reliability during poor internet connections caused transaction entries to fail silently.",
    outcomes: "Enabled Firestore offline persistence and optimistic UI updates, ensuring client inputs are saved locally first and synced to the cloud upon restoration.",
    links: {
      repo: "https://github.com/MuKuL-DiXiT/Portfolio.git",
      live: "https://money-mint-ten.vercel.app/"
    },
    featured: false
  }
];
