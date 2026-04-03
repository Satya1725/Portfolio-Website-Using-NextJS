import { personalConfig } from "@/config/config";
import SectionHeading from "./SectionHeading";
import FadeInUp from "./animations/FadeInUp";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

const iconMap: Record<string, React.ReactNode> = {
  FiGithub: <FiGithub />,
  FiLinkedin: <FiLinkedin />,
  RiTwitterXLine: <RiTwitterXLine />,
};

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's talk about it."
        />

        <div className="contact-grid">
          <FadeInUp delay={0.1}>
            <div className="contact-info">
              <h3>
                Let&apos;s work{" "}
                <span className="gradient-text">together</span>
              </h3>
              <p>
                I&apos;m always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>
              <div className="contact-items">
                <a
                  href={`mailto:${personalConfig.email}`}
                  className="contact-item"
                  id="contact-email"
                >
                  <div className="contact-item-icon">
                    <FiMail />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">Email</span>
                    <span className="contact-item-value">
                      {personalConfig.email}
                    </span>
                  </div>
                </a>
                <a
                  href={`tel:${personalConfig.phone.replace(/\s/g, "")}`}
                  className="contact-item"
                  id="contact-phone"
                >
                  <div className="contact-item-icon">
                    <FiPhone />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">Phone</span>
                    <span className="contact-item-value">
                      {personalConfig.phone}
                    </span>
                  </div>
                </a>
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <FiMapPin />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">Location</span>
                    <span className="contact-item-value">
                      {personalConfig.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="contact-socials">
              <h3>Find me online</h3>
              <div className="social-links">
                {personalConfig.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.platform}
                    id={`social-${social.platform.toLowerCase()}`}
                  >
                    {iconMap[social.icon] || <FiGithub />}
                  </a>
                ))}
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", lineHeight: 1.8 }}>
                Follow me on social media to stay updated with my latest
                projects, articles, and tech insights.
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
