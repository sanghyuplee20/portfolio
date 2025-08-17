import React from "react";
import Image, { StaticImageData } from "next/image";
import { Github, ExternalLink } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  imageAlt?: string;
  techStack: string[];
  repositoryURL?: string;
  liveName?: string;
  liveURL?: string;
  projectStatus?: "completed" | "in-progress" | "planned";
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageAlt = title,
  techStack,
  repositoryURL,
  liveName = "Live Demo",
  liveURL,
  projectStatus = "completed",
}) => {
  const statusBadge = () => {
    if (!projectStatus) return null;
    
    const statusColors = {
      completed: "dark:bg-green-900/30 dark:text-green-300 dark:ring-green-500/20",
      "in-progress": "dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-500/20", 
      planned: "dark:bg-gray-700/30 dark:text-gray-300 dark:ring-gray-500/20"
    };
    
    return (
      <div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ring-1 ${statusColors[projectStatus]}`}>
          {projectStatus.replace('-', ' ')}
        </span>
      </div>
    );
  };

  return (
    <div className="group overflow-hidden rounded-lg ring-1 ring-[#f0a04b]/30 shadow-md hover:shadow-lg transition-all duration-300 hover:ring-[#f0a04b]/50 bg-white dark:bg-[#2b2d31] dark:ring-[#404249]/30  dark:hover:ring-[#f0a04b]/50 cursor-target">
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="w-full lg:w-32 h-32 lg:h-auto flex-shrink-0 relative overflow-hidden bg-gradient-to-br from-[#f0a04b]/10 to-[#f0a04b]/20">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between p-4">
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-[#f0a04b] transition-colors duration-200 leading-tight">
                {title}
              </h3>
              {statusBadge()}
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug line-clamp-2">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-0.5 bg-gradient-to-r from-[#f0a04b]/10 to-[#f0a04b]/5 text-[#f0a04b] dark:bg-[#f0a04b]/10 text-xs font-medium rounded-md border border-[#f0a04b]/20 hover:bg-[#f0a04b]/20 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex gap-3 pt-3 mt-3 border-t border-gray-100 ">
            {repositoryURL && (
              <a 
                href={repositoryURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#f0a04b] hover:text-[#783300] transition-colors duration-200 group/link"
              >
                <Github className="w-4 h-4 transition-transform duration-200" />
                View Code
              </a>
            )}
            {liveURL && (
              <a 
                href={liveURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#f0a04b] hover:text-[#783300] transition-colors duration-200 group/link"
              >
                <ExternalLink className="w-4 h-4 transition-transform duration-200" />
                {liveName}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;