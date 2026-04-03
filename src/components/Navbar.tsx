"use client";

import { useState, useEffect, useCallback } from "react";
import { navConfig, personalConfig } from "@/config/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sectionIds = navConfig.map((link) => link.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      closeMobile();
    },
    [closeMobile]
  );

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container navbar-inner">
        <a
          href="#hero"
          className="navbar-logo"
          onClick={(e) => handleLinkClick(e, "#hero")}
        >
          <span className="gradient-text">
            {personalConfig.name.split(" ")[0]}
          </span>
          <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>
            .
          </span>
        </a>

        <div className="navbar-links">
          {navConfig.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`navbar-toggle ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="navbar-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`navbar-overlay ${mobileOpen ? "open" : ""}`}
        onClick={closeMobile}
      />

      {/* Mobile drawer */}
      <div className={`navbar-mobile ${mobileOpen ? "open" : ""}`}>
        {navConfig.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`navbar-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
