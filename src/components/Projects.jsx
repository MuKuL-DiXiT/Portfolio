import { React, useState } from "react";
import { FaReact, FaCss3, FaJs, FaHtml5} from "react-icons/fa";
import "@fontsource/sour-gummy";
export default function ({ darkMode }) {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    return (
        <div className={`flex mb-10 flex-col items-center font-sourGummy`} >
            <div className="flex flex-col text-red-600 items-center text-5xl font-marker mb-2">
                ~Projects~
            </div>
            <div className={`flex flex-col gap-16 items-center text-center sm:w-full md:w-3/4 lg:w-2/3 mt-10 p-2  rounded-lg ${darkMode ? ' text-orange-200 shadow-orange-900 hover:shadow-orange-300' : ' text-black shadow-gray-700 hover:shadow-black'}  shadow-lg  transition duration-300 hover:shadow-2xl hover:scale-105 gap-2 px-4`}>
                <h1 className="text-5xl">1. Mausam</h1>
                    <p className="text-left">Mausam is a simple weather app that helps users check the weather of any city. It has a clean design and is easy to use. Users can search for a city and get real-time weather details like temperature, humidity, wind speed, and weather conditions. The app also features a weather history chart to track past trends.
                    </p>
                    <button onClick={() => setShow(!show)} className={`text-2xl font-semibold ${darkMode? ' shadow-white shadow-lg hover:shadow-white': ' shadow-black hover:shadow-black shadow-lg text-black '} p-2 rounded hover:shadow-2xl`}>Features and Technology Used</button>

                   {show &&  <ul className="flex flex-col gap-8">
                        <li>Search for a city and get real-time weather details including temperature, humidity, wind speed, and weather conditions.</li>
                        <li>Weather chart for last few days to visualize weather changes</li>
                        <li> Easy to use interface</li>
                        <div className={`${darkMode? ' shadow-orange-100 shadow-lg hover:shadow-orange-100': ' shadow-black hover:shadow-black shadow-lg text-black '} hover:shadow-2xl rounded`}>
                        <ul className=" pl-5 flex justify-center  gap-5  ">
                            <li><FaReact className="text-5xl text-sky-400" /></li>
                            <li><img src="/tailwind.svg" alt="" className="w-16" /></li>
                            <li><FaHtml5 className="text-5xl text-red-700" /></li>
                        </ul>
                        </div>
                    </ul>}

                    <div className="flex flex-col gap-5 items-center w-full">
                        <iframe src="https://mukul-dixit.github.io/Mausam/" className="rounded w-full"></iframe>
                        <a href="https://mukul-dixit.github.io/Mausam/">Go Live</a>
                    </div>
            </div>
            <div className={`flex flex-col gap-16 items-center text-center sm:w-full md:w-3/4 lg:w-2/3 mt-10 p-2  rounded-lg ${darkMode ? ' text-orange-200 shadow-orange-900 hover:shadow-orange-300' : ' text-black shadow-gray-700 hover:shadow-black'}  shadow-lg  transition duration-300 hover:shadow-2xl hover:scale-105 gap-2 px-4`}>
                <h1 className="text-5xl">2. Cosmic RPS</h1>
                    <p className="text-left">Cosmic RPS is a fun game where you pick rock, paper, or scissors, and the computer does the same. The winner is decided based on simple rules: rock beats scissors, scissors beat paper, and paper beats rock! 🎮🔥
                    </p>
                    <button onClick={() => setShow1(!show1)} className={`text-2xl font-semibold ${darkMode? ' shadow-white shadow-lg hover:shadow-white': ' shadow-black hover:shadow-black shadow-lg text-black '} p-2 rounded hover:shadow-2xl`}>Technology Used</button>
                   {show1 &&  <ul className="flex flex-col gap-8">
                        <div className={`${darkMode? ' shadow-orange-100 shadow-lg hover:shadow-orange-100': ' shadow-black hover:shadow-black shadow-lg text-black '} hover:shadow-2xl rounded`}>
                        <ul className=" pl-5 flex justify-center  gap-5 ">
                            <li><FaCss3 className="text-5xl text-sky-400" /></li>
                            <li><FaJs className="text-5xl text-yellow-500 rounded-2xl" /></li>
                            <li><FaHtml5 className="text-5xl text-red-700" /></li>
                        </ul>
                        </div>
                    </ul>}

                    <div className="flex flex-col gap-5 items-center w-full">
                        <iframe src="https://mukul-dixit.github.io/RPS/" className="rounded w-full"></iframe>
                        <a href="https://mukul-dixit.github.io/RPS/">Go Live</a>
                    </div>
            </div>
            <div className={`flex flex-col gap-16 items-center text-center sm:w-full md:w-3/4 lg:w-2/3 mt-10 p-2  rounded-lg ${darkMode ? ' text-orange-200 shadow-orange-900 hover:shadow-orange-300' : ' text-black shadow-gray-700 hover:shadow-black'}  shadow-lg  transition duration-300 hover:shadow-2xl hover:scale-105 gap-2 px-4`}>
                <h1 className="text-5xl">3. Rubiks club</h1>
                    <p className="text-left">Its a frontend demostration of a sample website of Rubiks Club . It has a simple and clean design. The website has a home page, about page and a teams page.
                    </p>
                    <button onClick={() => setShow2(!show2)} className={`text-2xl font-semibold ${darkMode? ' shadow-white shadow-lg hover:shadow-white': ' shadow-black hover:shadow-black shadow-lg text-black '} p-2 rounded hover:shadow-2xl`}>Technology Used</button>
                   {show2 &&  <ul className="flex flex-col gap-8">
                        <div className={`${darkMode? ' shadow-orange-100 shadow-lg hover:shadow-orange-100': ' shadow-black hover:shadow-black shadow-lg text-black '} hover:shadow-2xl rounded`}>
                        <ul className=" pl-5 flex justify-center  gap-5 ">
                            <li><FaCss3 className="text-5xl text-sky-400" /></li>
                            <li><FaJs className="text-5xl text-yellow-500 rounded-2xl" /></li>
                            <li><FaHtml5 className="text-5xl text-red-700" /></li>
                        </ul>
                        </div>
                    </ul>}

                    <div className="flex flex-col gap-5 items-center w-full">
                        <iframe src="https://mukul-rubiks.netlify.app/" className="rounded w-full"></iframe>
                        <a href="https://mukul-rubiks.netlify.app/">Go Live</a>
                    </div>
            </div>
        </div>
    )
}