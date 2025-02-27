import React from "react";
import python from '../assets/python.svg';
import javascript from '../assets/js.svg';
import php from '../assets/php.svg';
import nodeJs from '../assets/nodejs.svg';
import react from '../assets/react.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import tailwind from '../assets/tailwind.svg';
import linux from '../assets/linux.svg';
import bootstrap from '../assets/bootstrap.svg';
import mongodb from '../assets/mongodb.svg';
import mysql from '../assets/mysql.svg';
import kvm from '../assets/kvm.svg';
import virtuozzo from '../assets/virtuozzo.svg';
import proxmox from '../assets/proxmox.svg';
import SkillCard from "./SkillCard";
import Cpu from "./Cpu";
import Test from "./Test";

const skillIcons = [python, javascript, php, nodeJs, react, html, css, tailwind, bootstrap, linux, mongodb, mysql, kvm, virtuozzo, proxmox];
const skillNames = ['Python', 'JavaScript', 'PHP', 'NodeJs', 'React', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Linux', 'MongoDB', 'MySQL', 'KVM', 'Virtuozzo', 'Proxmox'];

const Skills = () => {
	return (
		<>
			<div className="skillsDiv">
				{/* Developement Skills */}
				<div className="development">
					<div className="w-1/2">
						<h3 className="">Development Skills</h3>
						<hr className="border-gray-500"></hr>
						<p className="developmentText">
							I am a passionate full-stack developer with expertise in technologies like Python, JavaScript, PHP, Node.js, and React. From building dynamic web applications to managing server infrastructure with Linux, Virtuozzo, and Proxmox, I love crafting scalable and efficient solutions. My skills extend to front-end development with HTML, CSS, Tailwind, and Bootstrap, ensuring modern and responsive designs. On the backend, I work with databases like MongoDB and MySQL, delivering data-driven applications. Always eager to learn and grow, I thrive on solving complex challenges and optimizing performance.
						</p>
						<div className="flex justify-center">
							<Cpu/>
						</div>
					</div>
					<div className="gap-4">
						<div className="skillImg">
							{skillIcons.slice(0, 5).map((icon, index) => (
								<SkillCard title={skillNames[index]} icon={icon} />
							))}
						</div>
						<div className="skillImg">
							{skillIcons.slice(6, 11).map((icon, index) => (
								<SkillCard title={skillNames[index + 6]} icon={icon} />
							))}
						</div>
						<div className="skillRow">
							{skillIcons.slice(12, 16).map((icon, index) => (
								<SkillCard title={skillNames[index + 12]} icon={icon} />
							))}
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="section-banner mb-5">
					</div>
				</div>
				<div className="pb-40">
					<Test />
				</div>
			</div>
		</>
	);
};

export default Skills;
