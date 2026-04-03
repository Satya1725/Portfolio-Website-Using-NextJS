"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import { personalConfig } from "@/config/config";

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero section" id="hero">
      <div className="container hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">
            <span className="gradient-text">{personalConfig.name}</span>
          </h1>
          <p className="hero-tagline">
            {personalConfig.tagline}
            <span className="typing-cursor" />
          </p>
          <p className="hero-description">{personalConfig.bio}</p>
          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={handleScrollToProjects}
              id="hero-cta-projects"
            >
              <FiArrowDown />
              View My Work
            </a>
            <a
              href={personalConfig.resumeFile}
              className="btn btn-secondary"
              download
              id="hero-cta-resume"
            >
              <FiDownload />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="hero-photo-container">
            <div className="hero-photo-ring">
              <div />
            </div>
            <div className="hero-photo">
              <Image
                // src="/images/hero-photo-1.png"
                src="/images/hero-photo-2.jpg"
                alt={`${personalConfig.name} - Professional Photo`}
                width={340}
                height={340}
                preload
              />
            </div>
            <div className="hero-photo-dot" />
            <div className="hero-photo-dot" />
            <div className="hero-photo-dot" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
