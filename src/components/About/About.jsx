import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-[7vw] lg:px-[15vw] font-sans overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600/20 blur-[120px] -z-10" />
      
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 lg:gap-20">
        
        {/* Left Side: Content */}
        <div className="md:w-3/5 text-center md:text-left">
          <span className="text-purple-400 font-mono tracking-widest uppercase text-sm mb-4 block">
            Welcome 
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-2 leading-[1.1]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Supratim</span>
          </h1>

          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 min-h-[40px]">
            <span className="text-gray-300">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "Fullstack Developer",
                  "MERN Specialist",
                  "Tech Storyteller",
                  "Problem Solver",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </div>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            A B.Tech IT student with a passion for the <span className="text-white font-medium">MERN stack</span>. 
            I bridge the gap between complex backend logic and pixel-perfect frontend experiences, 
            turning caffeine into functional, scalable web applications.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1Ry-v_gGIYG3KlMjrtZ8B78SKVfLaVbg4/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-white transition-all duration-300 bg-purple-600 rounded-full hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(130,69,236,0.6)]"
            >
              <span>DOWNLOAD CV</span>
              <svg 
                className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-gray-600 text-gray-300 font-bold hover:bg-gray-800 transition-all"
            >
              HIRE ME
            </a>
          </div>
        </div>

        {/* Right Side: Image with refined Tilt */}
        <div className="md:w-2/5 flex justify-center">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1500}
            scale={1.02}
            className="relative group"
          >
            {/* Decorative ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-900/50">
              <img
                src={profileImage}
                alt="Supratim Mandal"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </Tilt>
        </div>
        
      </div>
    </section>
  );
};

export default About;