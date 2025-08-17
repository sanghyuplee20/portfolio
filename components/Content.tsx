"use client";

import { useState, useEffect } from "react";
import TextRotate from "@/components/fancy/text/text-rotate";
import { LayoutGroup, motion } from "motion/react";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import Card from "./Card";
import summit_image from "../public/images/summit.png";
import cv_image from "../public/images/cv.png";
import pintos_image from "../public/images/pintos.png";
import noori_image from "../public/images/noori.png";

export default function Content() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.5],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#313338';
    } else {
      document.body.style.backgroundColor = '#ffffff';
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#313338';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
      localStorage.setItem('theme', 'light');
    }
  };

  const projects = [
    {
      title: "Summit",
      description:
        "A full-stack web application for automating job applications",
      image: summit_image,
      imageAlt: "Summit Project Image",
      techStack: ["OpenAI", "React", "Supabase", "Redis", "Celery", "Django"],
      repositoryURL: "https://github.com/sanghyuplee20/Summit",
      liveURL: "https://summit-jobs.com/",
      projectStatus: "completed" as "completed" | "in-progress" | "planned",
    },
    {
      title: "NooriAI",
      description:
        "Medical Interpreter for Limited English Proficiency Patients",
      image: noori_image,
      imageAlt: "NooriAI Project Image",
      techStack: ["MarianNMT", "React Native", "Vosk Model"],
      projectStatus: "in-progress" as "completed" | "in-progress" | "planned",
    },
    {
      title: "HOTACO",
      description:
        "A computer vision project to detect campus garbage using YOLOv8",
      image: cv_image,
      imageAlt: "HOTACO Project Image",
      techStack: ["Python", "YOLOv8", "OpenCV"],
      repositoryURL: "https://github.com/sanghyuplee20/cv-final-project",
      liveURL:
        "https://docs.google.com/document/d/1j6Zq2h5N32kleX54erCdtctR5AAF1kQTcCTKdTVjxyA/edit?usp=sharing",
      liveName: "Report Document",
      projectStatus: "completed" as "completed" | "in-progress" | "planned",
    },
    {
      title: "pintOS",
      description: "An educational operating system project",
      image: pintos_image,
      imageAlt: "pintOS Project Image",
      techStack: ["C"],
      liveURL:
        "https://jhuopsys.github.io/spring2025/assign/pintos/pintos.html",
      liveName: "View Description",
      projectStatus: "completed" as "completed" | "in-progress" | "planned",
    },
  ];

  const navigationItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/sanghyuplee20",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/sanghyuplee",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:slee283@jhu.edu",
      icon: Mail,
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white dark:bg-[#313338] transition-colors duration-300">
      {/* Left Panel */}
      <div className="lg:w-2/5 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:overflow-hidden bg-white dark:bg-[#313338]">
        <div className="h-full flex flex-col justify-between p-8 lg:p-12">
          {/* Main Content */}
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight cursor-target text-gray-900 dark:text-white">
                Sang Hyup <span className="text-[#f0a04b]">Lee</span>
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
                      mainClassName="text-white px-3 bg-[#f0a04b] overflow-hidden py-2 justify-center rounded-lg"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </motion.p>
                </LayoutGroup>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left text-lg font-medium transition-all duration-300 relative ${
                      isActive
                        ? "text-[#f0a04b] font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#f0a04b] dark:hover:text-[#f0a04b]"
                    }`}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#f0a04b] rounded-full"></div>
                    )}
                    {item.name}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col gap-6 pt-8 border-t border-gray-200 dark:border-[#404249]">
            <div className="flex items-center justify-between">
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="p-3 rounded-lg bg-gray-100 dark:bg-[#2b2d31] hover:bg-[#f0a04b] hover:text-white transition-all duration-300 group cursor-target text-gray-600 dark:text-gray-300"
                      aria-label={link.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Dark Mode */}
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-lg bg-gray-100 dark:bg-[#2b2d31] hover:bg-gray-200 dark:hover:bg-[#36393f] transition-all duration-300 cursor-target"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Sang Hyup Lee
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="lg:w-3/5 lg:ml-[40%] bg-white dark:bg-[#313338]">
        <div className="p-8 lg:p-12 space-y-16">
          {/* About Section */}
          <section id="about" className="scroll-mt-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-[#f0a04b]">About Me</h2>
                <div className="flex flex-col gap-4 cursor-target">
                  <span className="text-5xl">👨‍💻</span>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I am a passionate{" "}
                    <span className="text-[#f0a04b] font-semibold">problem solver</span> located in
                    United States, with a strong background in software development
                    and machine learning. I love learning new technologies and
                    applying them to real world problems.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    I currently study at{" "}
                    <a
                      className="text-[#f0a04b] hover:text-[#783300] transition-colors duration-300 font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.cs.jhu.edu/"
                    >
                      Johns Hopkins University
                    </a>{" "}
                    pursuing a Bachelor&apos;s of Science in Computer Science.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Outside of tech, you can find me at a local restaurant trying out
                    new dishes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-8">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-bold text-[#f0a04b]">Projects</h2>
              <div className="grid gap-6">
                {projects.map((project) => (
                  <Card key={project.title} {...project} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}