import React from "react";
import CodingStatCard from "../../CodingStatCard";
import { codingStats } from "../../constant";


const CodingSection = () => {
  return (
    <div
      id="coding"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CODING PORTFOLIO</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of coding journey across various platforms
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 mb-17">
        {codingStats.map((item) => (
          <CodingStatCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CodingSection;
