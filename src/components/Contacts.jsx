import { div, text } from 'framer-motion/client';
import { React, useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaTelegram } from 'react-icons/fa';
import { FaL } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

export default function Contacts({ darkMode }) {
    const [rotation, setRotation] = useState({})
    function handleMouse(e, card) {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = -(clientX - left - width / 2) / 4;
        const y = (clientY - top - height / 2) / 4;
        setRotation((prev) => ({...prev, [card]:{x: x, y:y}}))
    }
    function resetRotation(card) {
        setRotation((prev) => ({ ...prev, [card]: { x: 0, y: 0 } }));
    }
    const contact = [
        { card: 1, href: "mailto:mukuldixit086@icloud.com", icon: <FaEnvelope className='text-red-500'/>, name: "E - mail", text: "~Write to me~" },
        { card: 2, href: "https://www.linkedin.com/in/mukul-dixit-8b945227b/", icon: <FaLinkedin className='text-sky-600 '/>, name: "Linked In", text: "~Connect me~" },
        { card: 3, href: "https://www.instagram.com/mukul____dixit/", icon: <FaInstagram className='bg-gradient-to-br from-red-500 to-white rounded-md'/>, name: "Instagram", text: "~Follow me~" }
    ]
    return (
        <div className='min-h-screen lg:w-2/3 md:w-full sm:w-full flex justify-evenly flex-wrap lg:ml-[16.666%] '>
            <div className='flex flex-col gap-10 w-1/2'>
                <div className={`mt-10  text-center text-red-600`}>
                    Talk to me
                </div>
                {contact.map(({card, href, icon, name, text}) => (
                    <div
                    onMouseMove={(e) => handleMouse(e,card)}
                    onMouseLeave={(e) => resetRotation(card)}
                    style={{
                        transform: `rotateX(${rotation[card]?.x || 0}deg) rotateY(${rotation[card]?.y || 0}deg)`,
                        perspective: '1000px',
                        transition: "transform 0.25s ease-out"
                    }}><a href={href} target='_blank' >
                        <div className={`items-center flex w-full flex-wrap flex-col gap-3 justify-evenly py-4  rounded-lg hover:text-red-600 ${darkMode ? 'bg-orange-200 text-black' : 'bg-black text-yellow-100'} px-4`}>
                            <div>{icon}</div>
                            <div>{name}</div>
                            <div>{text}</div>
                        </div>
                    </a>
                </div>
                ))}
            </div>
            <div className='flex flex-col gap-7 mt-3'>
                <div className={`mt-10 text-center text-red-600`}>
                    Your Suggestions
                </div>
                <form className={`${darkMode ? 'text-orange-200' : 'text-black'} flex flex-col gap-10`}>
                    <fieldset className={`border-2 ${darkMode ? 'border-orange-200' : ' border-gray-500'} rounded-lg p-3 px-12 `}>
                        <legend>Name</legend>
                        <input type="text" placeholder='Inset your name' className='focus:outline-none bg-transparent' required />
                    </fieldset >
                    <fieldset className={`border-2 ${darkMode ? 'border-orange-200' : ' border-gray-500'} rounded-lg p-3 px-12 `}>
                        <legend>Email</legend>
                        <input type="text" placeholder='Insert your email' className='focus:outline-none bg-transparent' required />
                    </fieldset>
                    <fieldset className={`border-2 ${darkMode ? 'border-orange-200' : 'border-gray-500'} rounded-lg p-3 px-12 `}>
                        <legend>Feedback</legend>
                        <textarea type="text" placeholder='Your suggestions' className='focus:outline-none   bg-transparent' required></textarea>
                    </fieldset>
                    <button type='Submit' className={`flex flex-wrap justify-center p-2  rounded-lg text-red-600 ${darkMode ? 'bg-orange-200 shadow-orange-900 hover:shadow-orange-300' : 'bg-black shadow-gray-700 hover:shadow-black'}  shadow-lg  transition duration-300 hover:shadow-2xl hover:scale-105 gap-2 px-4`}>Submit <h1 className='mt-1'><FaTelegram /></h1></button>
                </form>
            </div>
        </div>
    );
}
