import React from "react";

const CodingStatCard = ({
  title = "My LeetCode Profile",
  description = "Explore my coding journey and problem-solving profile.",
  image = "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
  link = "#",
}) => {
  return (
    <div className="group w-[280px]
    sm:w-[300px]
    md:w-[320px]
    h-[420px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      {/* Image */}
      <div className="flex justify-center items-center bg-slate-900 h-44">
        <img
          src={image}
          alt={title}
          className="h-24 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-white">{title}</h2>

        <p className="text-gray-400 text-sm mt-3">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300"
        >
          Visit Profile →
        </a>
      </div>
    </div>
  );
};

export default CodingStatCard;
