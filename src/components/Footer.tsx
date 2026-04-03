import { personalConfig } from "@/config/config";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

const iconMap: Record<string, React.ReactNode> = {
  FiGithub: <FiGithub />,
  FiLinkedin: <FiLinkedin />,
  RiTwitterXLine: <RiTwitterXLine />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © {currentYear} {personalConfig.name}. Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
        </p>
        <div className="footer-socials">
          {personalConfig.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label={social.platform}
            >
              {iconMap[social.icon] || <FiGithub />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
