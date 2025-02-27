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
import virtuozzo from '../assets/virtuozzo.svg';
import proxmox from '../assets/proxmox.svg';
import SkillCard from "./SkillCard";

const Skills = () => {
	return (
		<>
			<div className="skillsDiv">
				{/* Developement Skills */}
				<div className="development">
					<div className="w-1/2">
						<h3 className="">Development Skills</h3>
						<hr className="border-gray-500"></hr>
					</div>
					<div className="gap-4">
						<div className="skillImg">
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={python} alt="python" />
								</div>
								<p className="skillCardText">Python</p>
							</div>
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={javascript} alt="JavaScript" />
								</div>
								<p className="skillCardText">JavaScript</p>
							</div>
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={php} alt="PHP" />
								</div>
								<p className="skillCardText">PHP</p>
							</div>
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={nodeJs} alt="NodeJs" />
								</div>
								<p className="skillCardText">NodeJs</p>
							</div>
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={react} alt="React" />
								</div>
								<p className="skillCardText">React</p>
							</div>
						</div>
						<div className="skillImg">
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={html} alt="HTML" />
								</div>
								<p className="skillCardText">HTML</p>
							</div>
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={css} alt="React" />
								</div>
								<p className="skillCardText">CSS</p>
							</div>
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={tailwind} alt="tailwind CSS" />
								</div>
								<p className="skillCardText">Tailwind</p>
							</div>
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={linux} alt="Linux" />
								</div>
								<p className="skillCardText">Linux</p>
							</div>
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={bootstrap} alt="Linux" />
								</div>
								<p className="skillCardText">Bootstrap</p>
							</div>
						</div>
						<div className="skillRow">
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={virtuozzo} alt="React" />
								</div>
								<p className="skillCardText">Virtuozzo</p>
							</div>
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={proxmox} alt="React" />
								</div>
								<p className="skillCardText">Proxmox</p>
							</div>
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={mongodb} alt="React" />
								</div>
								<p className="skillCardText">MongoDB</p>
							</div>
							<div className="skillCard">
								<div className="flex justify-center">
									<img className="skillCardImg" src={mysql} alt="React" />
								</div>
								<p className="skillCardText">MySQL</p>
							</div>
						</div>
					</div>
				</div>
				<div className='skillCard'>
					<div className="z-10">
						<img className="skillCardImg" src={proxmox} alt='proxmox' />
						<p className="skillCardText">ProxMox</p>
					</div>
				</div>
				<div class="card">
					<h2>CARD</h2>
				</div>
				<SkillCard title="React"/>
			</div>
		</>
	);
};

export default Skills;
