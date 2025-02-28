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
import canva from '../assets/canva.svg';
import photoshop from '../assets/photoshop.svg';
import coreldraw from '../assets/coreldraw.svg';
import premierpro from '../assets/premierpro.svg';
import tortoisesvn from '../assets/tortoisesvn.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import winscp from '../assets/winscp.png';
import beyondcompare from '../assets/beyondcompare.png';
import putty from '../assets/putty.svg';
import powerbi from '../assets/powerbi.svg';
import tableau from '../assets/tableau.svg';
import hadoop from '../assets/hadoop.svg';
import SkillCard from "./SkillCard";

const skillIcons = [python, javascript, php, nodeJs, react, html, css, tailwind, bootstrap, linux, mongodb, mysql, kvm, virtuozzo, proxmox, canva, photoshop, coreldraw, premierpro, tortoisesvn, git, github, winscp, beyondcompare, putty, powerbi, tableau, hadoop];
const skillNames = ['Python', 'JavaScript', 'PHP', 'NodeJs', 'React', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Linux', 'MongoDB', 'MySQL', 'KVM', 'Virtuozzo', 'Proxmox', 'Canva', 'Photoshop', 'CorelDraw', 'Premier Pro', 'TortoiseSVN', 'Git', 'GitHub', 'WinSCP', 'Compare', 'Putty', 'Power BI', 'Tableau', 'Hadoop'];

const Skills = () => {
	return (
		<>
			<div className="skillsDiv">
				{/* Developement Skills */}
				<div className="development">
					<div className="w-1/2">
						<h3 className="">Development Skills</h3>
						<hr className="my-2 border border-gray-500"></hr>
						<p className="developmentText">
							" I am a passionate full-stack developer with expertise in technologies like Python, JavaScript, PHP, Node.js, and React. From building dynamic web applications to managing server infrastructure with Linux, Virtuozzo, and Proxmox, I love crafting scalable and efficient solutions. My skills extend to front-end development with HTML, CSS, Tailwind, and Bootstrap, ensuring modern and responsive designs. On the backend, I work with databases like MongoDB and MySQL, delivering data-driven applications. Always eager to learn and grow, I thrive on solving complex challenges and optimizing performance."
						</p>

					</div>
					<div className="w-1/2 gap-4">
						<div className="skillImg">
							{skillIcons.slice(0, 5).map((icon, index) => (
								<SkillCard title={skillNames[index]} icon={icon} />
							))}
						</div>
						<div className="skillImg">
							{skillIcons.slice(5, 15).map((icon, index) => (
								<SkillCard title={skillNames[index + 5]} icon={icon} />
							))}
						</div>
					</div>
				</div>
				<div className="development pt-28">
					<div className="w-1/2 gap-4">
						<div className="skillRow">
							{skillIcons.slice(15, 19).map((icon, index) => (
								<SkillCard title={skillNames[index + 15]} icon={icon} />
							))}
						</div>
					</div>
					<div className="w-1/2">
						<h3 className="">Web & Graphic Design Skills</h3>
						<hr className="border my-2 border-gray-500"></hr>
						<p className="developmentText">
							" I specialize in creating high-quality visuals using Canva for quick design mockups and social media content. For advanced image editing and retouching, I rely on Photoshop, ensuring precision and detail. CorelDRAW helps me with vector-based designs, making logos, illustrations, and branding elements sharp and scalable. When it comes to video editing, Premiere Pro allows me to produce smooth, professional-grade content. Combining these tools, I design engaging graphics, edit high-quality visuals, and enhance multimedia projects with efficiency and creativity."
						</p>
					</div>
				</div>
				<div className="development pt-28">
					<div className="w-1/2">
						<h3 className="">Development & Version Control</h3>
						<hr className="my-2 border border-gray-500"></hr>
						<p className="developmentText">
							" I leverage Git and GitHub to ensure seamless version control, efficient branching strategies, and smooth collaboration across development teams. For projects requiring centralized version control, I utilize TortoiseSVN, simplifying repository management with an intuitive interface. When it comes to secure server access and remote management, I rely on PuTTY for SSH connections and WinSCP for file transfers, ensuring smooth deployment and maintenance. By integrating these tools, I streamline development workflows, enhance code stability, and maintain secure, well-organized project environments."
						</p>

					</div>
					<div className="w-1/2 gap-4">
						<div className="skillImg">
							{skillIcons.slice(19, 24).map((icon, index) => (
								<SkillCard title={skillNames[index + 19]} icon={icon} />
							))}
						</div>
						<div className="skillrow">
							<div>
							<SkillCard title='Putty' icon={putty} />
							</div>
						</div>
					</div>
				</div>
				<div className="development py-28">
					<div className="w-1/2 gap-4">
						<div className="skillRow">
							{skillIcons.slice(25, 28).map((icon, index) => (
								<SkillCard title={skillNames[index + 25]} icon={icon} />
							))}
						</div>
					</div>
					<div className="w-1/2">
						<h3 className="">Data Analytics & Big Data</h3>
						<hr className="border my-2 border-gray-500"></hr>
						<p className="developmentText">
							" I leverage Power BI to transform raw data into interactive dashboards, enabling data-driven decision-making with real-time insights. With Tableau, I craft visually compelling reports, simplifying complex datasets into intuitive visualizations for deeper analysis. For handling large-scale data, I work with Hadoop, utilizing its distributed computing power to process massive datasets efficiently. By combining these tools, I ensure seamless data integration, visualization, and analysis, helping businesses uncover trends, optimize strategies, and make informed decisions."
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
