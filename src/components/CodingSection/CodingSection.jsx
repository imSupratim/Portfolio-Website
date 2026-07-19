import React from "react";
import CodingStatCard from "../../CodingStatCard";
import { codingStats } from "../../constant";

const CodingSection = () => {
  return (
    <div
      id="coding"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
