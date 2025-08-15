"use client";

import TextRotate from "@/components/fancy/text/text-rotate";
import { LayoutGroup, motion } from "motion/react";

export default function HeroLeft() {
  return (
    <section className="min-h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-10 items-start md:items-center">
      <div className="flex flex-col gap-5 cursor-target">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Sang Hyup <span className="text-[#f57c73]">Lee</span>
        </h1>

        <div className="flex items-center flex-wrap gap-3">
          <LayoutGroup>
            <motion.p className="flex whitespace-pre" layout>
              <TextRotate
                as="span"
                texts={[
                  "Software Developer",
                  "Machine Learning Engineer",
                  "Full Stack Developer",
                  "Food Enthusiast",
                ]}
                mainClassName="text-white px-2 sm:px-2 md:px-3 bg-[#f57c73] overflow-hidden py-0.5 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </motion.p>
          </LayoutGroup>
        </div>

        <nav className="flex gap-4">
          <a href="#about" className="text-sm transition-colors">
            {" "}
            About{" "}
          </a>
        </nav>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col w-full max-w-md mx-auto gap-3">
          <span className="text-xl text-[#f57c73] font-semibold">About Me</span>
          <span className="text-6xl">👨‍💻</span>
          <p className="text-sm">
            I am a passionate <span className="text-[#f57c73]">problem solver</span> located in United States, with a strong background in software development and machine learning. I love learning new technologies and applying them to a real world problems.
          </p>
          <p className="text-sm">
            I currently study at <a className="text-[#f57c73] hover:text-[#EE1F11] transition-colors duration-300" target="_blank" href="https://www.cs.jhu.edu/">Johns Hopkins University</a> pursuing a Bachelor&apos;s of Science in Computer Science. 
          </p>
          <p className="text-sm">
            Outside of tech, you can find me at a local restaurant trying out new dishes.
          </p>
        </div>


        {/* Option 2: Quick Stats/Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm opacity-70">
              Currently available for projects
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-sm opacity-70">Based in [Your Location]</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-sm opacity-70">5+ years experience</span>
          </div>
        </div>

        {/* Option 3: Social Links */}
        <div className="flex gap-4 mt-6">
          <a
            href="#"
            className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <span className="text-lg">💼</span>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <span className="text-lg">🐙</span>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <span className="text-lg">🐦</span>
          </a>
        </div>
      </div>
    </section>
  );
}
