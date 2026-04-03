import { personalConfig, skillsConfig } from "@/config/config";
import SectionHeading from "./SectionHeading";
import FadeInUp from "./animations/FadeInUp";
import StaggerChildren, { StaggerItem } from "./animations/StaggerChildren";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          title="About Me"
          subtitle="Get to know who I am and what drives me"
        />

        <div className="about-grid">
          <FadeInUp delay={0.1}>
            <div className="about-bio">
              <h3>
                Passionate about crafting{" "}
                <span className="gradient-text">digital experiences</span>
              </h3>
              <p>{personalConfig.bio}</p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open-source, or sharing knowledge through blog
                posts and mentoring. I believe in continuous learning and pushing
                the boundaries of what&apos;s possible on the web.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <div className="about-stat-number gradient-text">2+</div>
                  <div className="about-stat-label">Years Experience</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-number gradient-text">5+</div>
                  <div className="about-stat-label">Projects Built</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-number gradient-text">10+</div>
                  <div className="about-stat-label">Technologies</div>
                </div>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <StaggerChildren className="skills-grid" staggerDelay={0.08}>
              {skillsConfig.map((category) => (
                <StaggerItem key={category.category} className="skill-category">
                  <h4>{category.category}</h4>
                  <div className="skill-items">
                    {category.items.map((item) => (
                      <span key={item} className="pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
