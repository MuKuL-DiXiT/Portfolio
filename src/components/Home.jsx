import { React, useEffect, useState } from 'react';
import { User } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { clipPath } from 'framer-motion/client';

export default function Home({ darkMode }) {
    const [points, setPoints] = useState(geod());

    useEffect(() => {
        const interval = setInterval(() => {
            setPoints(geod());
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    function geod() {
        const points = [];
        const totalPoints = 30;
        for (let i = 0; i < totalPoints; i++) {
            const angle = (i / totalPoints) * Math.PI * 2;
            const radius = 48 + Math.random() * 4;
            const x = radius * Math.sin(angle) + 50;
            const y = radius * Math.cos(angle) + 50;
            points.push(`${x}% ${y}%`);
        }
        return points.join(",");
    }
    return (
        <div className={`transition-colors duration-1000 lg:mt-32 md:m-32   m-5 sm:mx-6 md:mx-16 lg:mx-12 xl:mx-32 flex flex-wrap gap-10 item-center justify-evenly   ${darkMode ? 'text-orange-200' : 'text-black'}`}>
            
            <div className={` flex mt-8 md:mt-20 sm:flex-row md:flex-col lg:flex-col gap-7 items-center`}>
                <a href="https://github.com/MuKuL-DiXiT" target='_blank'><FaGithub /></a>
                <a href='https://t.me/mukuldixit' target='_blank'><FaTelegram /></a>
                <a href="https://www.instagram.com/mukul____dixit/" target='_blank'><FaInstagram /></a>
            </div>
            <div className="relative lg:mt-10 max-w-64 max-h-64">
                <motion.img
                    src={darkMode ? "/fev.jpg":"/back.jpg"  }
                    alt="Border Image"
                    className="absolute inset-0 w-full h-full"
                    style={{
                        clipPath: `polygon(${points})`,
                        filter: "blur(3px)",
                        transform: "scale(1.07)"
                    }}
                    animate={{ clipPath: `polygon(${points})` }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.img src= "/Mukul.jpg" alt="" className="max-w-64 h-full shadow-[0_0_10px_3px_rgba(255,255,255,0.8)]"
                    style={{ clipPath: `polygon(${points})` }}
                    animate={{ clipPath: `polygon(${points})` }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
            <div className="flex flex-col gap-5 max-w-xl break-words text-center sm:text-center md:text-center lg:text-left sm:ml-8">
                <div className='text-7xl text-red-600'>
                    <Typewriter
                        options={{
                            strings: ["Mukul Dixit"],
                            autoStart: true,
                            loop: true,
                            cursor: '',
                        }}
                    />
                </div>
                <div >
                    ----Web Developer | DSA Enthusiast <br />
                    A passionate developer and creative thinker, I thrive on turning ideas into seamless web experiences. Driven by curiosity and a believer in learning by doing, I focus on precision, innovation, and crafting intuitive digital solutions.
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/mukul-dixit-8b945227b/" target='_blank' className={`transition-all duration-1000 flex flex-wrap text-center justify-evenly p-2 mt-16 rounded-lg text-red-600 ${darkMode ? 'bg-orange-200  shadow-orange-900 hover:shadow-orange-300' : 'bg-black  shadow-gray-700 hover:shadow-black'}  shadow-lg  transition duration-300 hover:shadow-2xl hover:scale-105 px-4`}>Hi, we could connect on Linked In<h1 className='pt-1 text-sky-600'><FaLinkedin /></h1> </a>
                </div>
            </div>
            
        </div>
    );
}
