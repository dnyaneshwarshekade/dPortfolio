import React, { useState, useEffect } from "react";
import SVGComponent from "./SVGComponent";
import Bus from "./Bus";
import Career from "./Career";
import InfoModal from "./InfoModal";
import JourneyData from "../data/JourneyData.json"; // Import the JSON data
import { FaGraduationCap, FaBriefcase, FaCode, FaSchool, FaUniversity, FaLaptopCode } from "react-icons/fa"; // React Icons

const Journey = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [journeyTitle, setJourneyTitle] = useState("");
    const [journeyMessage, setJourneyMessage] = useState("");
    const [busPosition, setBusPosition] = useState({ top: "21%", left: "4%" });

    const modalOpen = (title, message) => {
        setIsModalOpen(true);
        setJourneyTitle(title);
        setJourneyMessage(message.join("\n")); // Convert array to string for display
    };

    const modalClose = () => {
        setIsModalOpen(false);
        setJourneyTitle("");
        setJourneyMessage("");
    };

    // Bus animation logic
    useEffect(() => {
        const interval = setInterval(() => {
            setBusPosition((prev) => {
                let newLeft = parseFloat(prev.left) + 1;
                let newTop = parseFloat(prev.top) + 0.5;
                if (newLeft > 55) newLeft = 4; // Reset position
                if (newTop > 77) newTop = 21;
                return { top: `${newTop}%`, left: `${newLeft}%` };
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="w-screen h-full bg-sky-50/90 px-4 md:px-10 flex justify-between items-center dark:bg-[#060d1e]">
                <div className="pt-14 w-full relative">
                    {/* Main SVG Path */}
                    <SVGComponent className="relative w-full" />
                    {/* Animated Bus */}
                    <div
                        className="absolute w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
                        style={{ top: busPosition.top, left: busPosition.left }}
                    >
                        <Bus />
                    </div>
                    {/* Education Section */}
                    <div className="absolute top-[32%] left-[8%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div
                            className="journeyCard p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer flex items-center space-x-2"
                            onClick={() => modalOpen(JourneyData.education[0].title, JourneyData.education[0].message)}
                        >
                            <FaSchool className="text-blue-500 text-xl" />
                            <span>{JourneyData.education[0].title}</span>
                        </div>
                    </div>
                    <div className="absolute top-[48%] left-[20%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div
                            className="journeyCard p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer flex items-center space-x-2"
                            onClick={() => modalOpen(JourneyData.education[1].title, JourneyData.education[1].message)}
                        >
                            <FaGraduationCap className="text-green-500 text-xl" />
                            <span>{JourneyData.education[1].title}</span>
                        </div>
                    </div>
                    <div className="absolute top-[65%] left-[15%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div
                            className="journeyCard p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer flex items-center space-x-2"
                            onClick={() => modalOpen(JourneyData.education[2].title, JourneyData.education[2].message)}
                        >
                            <FaUniversity className="text-purple-500 text-xl" />
                            <span>{JourneyData.education[2].title}</span>
                        </div>
                    </div>
                    <div className="absolute top-[77%] left-[55%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div
                            className="journeyCard p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer flex items-center space-x-2"
                            onClick={() => modalOpen(JourneyData.education[3].title, JourneyData.education[3].message)}
                        >
                            <FaGraduationCap className="text-indigo-500 text-xl" />
                            <span>{JourneyData.education[3].title}</span>
                        </div>
                    </div>
                    {/* Experience Section */}
                    <div className="absolute top-[57%] left-[55%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div
                            className="journeyCard p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer flex items-center space-x-2"
                            onClick={() => modalOpen(JourneyData.experience[0].title, JourneyData.experience[0].message)}
                        >
                            <FaBriefcase className="text-yellow-500 text-xl" />
                            <span>{JourneyData.experience[0].title}</span>
                        </div>
                    </div>
                    <div className="absolute top-[37%] left-[41%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div
                            className="journeyCard p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer flex items-center space-x-2"
                            onClick={() => modalOpen(JourneyData.experience[1].title, JourneyData.experience[1].message)}
                        >
                            <FaCode className="text-red-500 text-xl" />
                            <span>{JourneyData.experience[1].title}</span>
                        </div>
                    </div>
                    <div className="absolute top-[30%] right-[5%] text-black dark:text-white transform -translate-x-1/2 -translate-y-1/2">
                        <div
                            className="journeyCard p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer flex items-center space-x-2"
                            onClick={() => modalOpen(JourneyData.experience[2].title, JourneyData.experience[2].message)}
                        >
                            <FaLaptopCode className="text-pink-500 text-xl" />
                            <span>{JourneyData.experience[2].title}</span>
                        </div>
                    </div>
                    {/* Career Icon */}
                    <div className="absolute top-[65%] left-[35%] w-[100px] h-[100px] transform -translate-x-1/2 -translate-y-1/2">
                        <Career />
                    </div>
                </div>
            </div>
            {/* InfoModal */}
            {isModalOpen && (
                <InfoModal
                    close={modalClose}
                    title={journeyTitle}
                    message={journeyMessage}
                />
            )}
        </>
    );
};

export default Journey;