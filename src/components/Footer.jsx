import React from 'react';
import { User } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaReact } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { div } from 'framer-motion/client';

export default function Footer({ darkMode }) {
    return (
        <div className={`mt-5 border-t-2 text-2xl flex flex-col items-center flex-wrap ${darkMode ? 'text-orange-200 border-b-orange-200' : 'text-black border-t-black'}  justify-evenly rounded-full `}>
            <div className='flex gap-5'>
                <a href="https://github.com/MuKuL-DiXiT" target='_blank'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mukul-dixit-8b945227b/" target='_blank'><FaLinkedin /></a>
                <a href="https://leetcode.com/mukul2427/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/LeetCode_logo_white_no_text.svg"
                        alt="LeetCode Profile" className="w-4 bg-black rounded" />
                </a>
                <a href='https://t.me/mukuldixit' target='_blank'><FaTelegram /></a>
                <a href="https://www.instagram.com/mukul____dixit/" target='_blank'><FaInstagram /></a>
            </div>
            <div className='flex gap-2'>
                Created By <span className="text-red-600 font-marker">
        <Typewriter
          options={{
            strings: ["Mukul Dixit"],
            autoStart: true,
            loop: true,
            cursor:''
          }}
        />
      </span> using React <FaReact className='mt-1'/>
            </div>
        </div>
    );
}