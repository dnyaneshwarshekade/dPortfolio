import React from "react";

const SkillCard = ({ title }) => {
	return (
		<div className="relative w-48 h-64 flex items-center justify-center overflow-hidden rounded-2xl bg-[#07182E]">
			{/* Rotating Gradient Border */}
			<div className="absolute w-[120px] h-[150%] bg-gradient-to-b from-[#00b7ff] to-[#ff30ff] animate-rotate"></div>

			{/* Inner Content */}
			<div className="relative z-10 text-white text-2xl font-bold">{title}</div>

			{/* Dark Background Overlay */}
			<div className="absolute inset-[3px] bg-[#07182E] rounded-xl"></div>
		</div>
	);
};

export default SkillCard;
