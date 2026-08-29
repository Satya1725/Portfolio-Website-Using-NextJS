"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "@/config/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="project-card"
      id={`project-card-${project.id}`}
    >
      <div className="project-card-image">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={340}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="project-card-overlay">
          {/* <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
            aria-label={`View ${project.title} live demo`}
          >
            <FiExternalLink />
          </a> */}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
            aria-label={`View ${project.title} source code`}
          >
            <FiGithub />
          </a>
        </div>
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tech">
          {project.techStack.map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
