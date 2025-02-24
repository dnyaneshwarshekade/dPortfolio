import React from 'react';
import boyCoding from '../assets/boyCoding.png';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
 
function Home() {
    return (
        <>
            <div className='home'>
                <div className='ml-10'>
                    <div>
                        <h1 className='title'>
                            Hey There 👋
                            <h1 className=''>
                                I'm <span>Dipesh</span>
                            </h1>
                        </h1>

                        <h2 className='skillsType'>
                            <Typewriter
                                words={
                                    [
                                        "Web Developer 💻",
                                        "ML Enthusiast",
                                        "Problem Solver 🧩",
                                        "A Tech Enthusiast 🚀",
                                        "Turning Ideas into Reality ⚡"
                                    ]
                                }
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </h2>
                        <p className="shortIntro">
                            Passionate about building web apps & AI-driven solutions.
                        </p>
                        <div className='mt-10'>
                            <Link to="/journey">
                                <button disabled="" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center transition duration-300 transform hover:scale-105 active:scale-95">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="animate-spin h-5 w-5 mr-3 text-white"
                                    >
                                        <circle
                                            stroke-width="4"
                                            stroke="currentColor"
                                            r="10"
                                            cy="12"
                                            cx="12"
                                            className="opacity-25"
                                        ></circle>
                                        <path
                                            d="M4 12a8 8 0 018-8v8H4z"
                                            fill="currentColor"
                                            className="opacity-75"
                                        ></path>
                                    </svg>
                                    My Journey
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='w-500' src={boyCoding} alt="Boy Coding" />
                </div>
            </div>
            {/* <div>
                <h1 className="text-5xl font-kaushan">Hey, I'm Your Name</h1>
                <h2 className="text-3xl font-poppins mt-2">
                    <Typewriter
                        words={["Web Developer", "ML Enthusiast", "Problem Solver"]}
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                    Passionate about building web apps & AI-driven solutions.
                </p>
                <a href="#portfolio">
                    <button className="mt-6 px-6 py-3 bg-cyan-500 text-white rounded-lg shadow-md hover:bg-cyan-600 transition">
                        View My Work
                    </button>
                </a>
            </div> */}
        </>
    );
}

export default Home;
