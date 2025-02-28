import React from "react";

const timelineData = [
    { title: "Lorem", icon: "💬", desc: "Lorem ipsum dolor sit amet." },
    { title: "Ipsum", icon: "⚙️", desc: "Aenean commodo ligula eget dolor." },
    { title: "Dolor", icon: "🔧", desc: "Consectetur adipiscing elit." },
    { title: "Aenean", icon: "📊", desc: "Aenean massa." },
    { title: "Ligulam", icon: "👥", desc: "Lorem ipsum dolor sit amet." },
    { title: "Sit", icon: "🛒", desc: "Aenean commodo ligula eget dolor." },
    { title: "Cum", icon: "📈", desc: "Lorem ipsum dolor sit amet." },
    { title: "Eget", icon: "❓", desc: "Aenean massa." },
    { title: "Socis", icon: "🏠", desc: "Lorem ipsum dolor sit amet." },
];

const Timeline = () => {
    return (
        <div className="relative w-full h-[600px] flex justify-center">
            {/* SVG for Curved Path */}
            <svg className="absolute top-0 left-1/2 -translate-x-1/2" width="400" height="600" viewBox="0 0 400 600">
                <path
                    d="M0,100 C100,200 300,0 400,100 C500,200 600,400 400,500 C200,600 100,400 0,500"
                    stroke="#2c3e50"
                    strokeWidth="8"
                    fill="transparent"
                />
            </svg>

            {/* Timeline Items */}
            <div className="absolute w-full h-full flex flex-col justify-between">
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute flex items-center p-4 bg-white shadow-lg rounded-lg w-40 text-center text-sm`
                            + (index % 2 === 0 ? " left-[10%]" : " right-[10%]")}
                        style={{ top: `${index * 70}px` }}
                    >
                        <span className="text-lg mr-2">{item.icon}</span>
                        <div>
                            <h4 className="font-bold">{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
