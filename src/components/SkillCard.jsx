import React from "react";
import virtuozzo from '../assets/virtuozzo.svg';
import python from '../assets/python.svg';

const SkillCard = ({ title , icon }) => {
	return (
		<div className="skillCard">
			<div className="flex justify-center">
				<img className={`skillCardImg ${title == "KVM" ? "w-full" : "w-1/2" }`} src={icon} alt="python" />
			</div>
			<p className="skillCardText">{title}</p>
		</div>
	);
};

export default SkillCard;
