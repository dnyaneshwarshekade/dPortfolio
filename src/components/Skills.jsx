import React from "react";
import { motion } from "framer-motion";

const skills = [
	{ name: "React", icon: "/react.svg" },
	{ name: "JavaScript", icon: "/javascript.svg" },
	{ name: "Tailwind", icon: "/tailwind.svg" },
	{ name: "Python", icon: "/python.svg" }
];

const randomPosition = () => ({
	x: Math.random() * 200 - 100,
	y: Math.random() * 200 - 100,
	scale: Math.random() * 0.6 + 0.7
});

const Skills = () => {
	return (
		<section className="h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
			<h2 className="text-4xl font-bold text-center mb-10">🛠️ Skills</h2>
			<div className="relative w-full h-80 flex items-center justify-center">
				{skills.map((skill, index) => (
					<motion.img
						key={index}
						src={skill.icon}
						alt={skill.name}
						className="w-16 h-16 absolute"
						animate={randomPosition()}
						transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
					/>
				))}
			</div>
		</section>
	);
};

export default Skills;
