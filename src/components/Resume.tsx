import { experienceConfig, personalConfig } from "@/config/config";
import SectionHeading from "./SectionHeading";
import FadeInUp from "./animations/FadeInUp";
import { FiDownload } from "react-icons/fi";

export default function Resume() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and career highlights"
        />

        <div className="resume-content">
          <div className="timeline">
            {experienceConfig.map((exp, index) => (
              <FadeInUp key={exp.company} delay={index * 0.15}>
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <div>
                        <div className="timeline-role">{exp.role}</div>
                        <div className="timeline-company">{exp.company}</div>
                      </div>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <ul className="timeline-highlights">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.4}>
            <div className="resume-download">
              <a
                href={personalConfig.resumeFile}
                className="btn btn-primary"
                download
                id="resume-download-btn"
              >
                <FiDownload />
                Download Full Resume
              </a>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
