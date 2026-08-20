// subgroup.js
import React, { useState, useRef } from "react";
import "./subgroup.css";

// Logo placeholder – replace with your actual logo import
// const nexergyLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%231a5bc7' rx='12'/%3E%3Ctext x='8' y='26' font-family='monospace' font-size='20' fill='white' font-weight='bold'%3EGK%3C/text%3E%3C/svg%3E";

const servicesData = [
  {
    number: "01",
    title: "Web Development",
    label: "Digital Foundations",
    subtitle: "From websites to complete digital applications, we build technology solutions that help businesses grow.",
    description: "We design and develop scalable, secure and user-friendly web, mobile and software applications tailored to your business needs. From concept to deployment, we build solutions that help businesses streamline operations and accelerate digital growth.",
    tags: ["Corporate Websites", "E-Commerce", "Custom Applications", "UI/UX"],
    color: "#1f6ae0",
    features: [
      "Business & Corporate Websites",
      "E-Commerce Platforms",
      "Custom Web Applications",
      "Responsive Web Design",
      "Frontend Development",
      "Backend Development & APIs",
      "CMS & Content Websites",
      "Third-Party Integrations",
      "Migration & Modernization",
      "Hosting & Deployment",
      "Maintenance & Support"
    ],
    stats: { projects: "15+", clients: "12+", satisfaction: "98%" }
  },
  {
    number: "02",
    title: "Mobile Development",
    label: "Products in Motion",
    subtitle: "Mobile apps made for reliable, intuitive experiences wherever your customers need you.",
    description: "We build secure, scalable and user-friendly mobile applications for startups, businesses and enterprises. From Android and iOS to cross-platform solutions, we deliver high-quality mobile experiences that drive engagement and growth.",
    tags: ["Android", "iOS", "Cross-Platform", "UI/UX"],
    color: "#2b72e0",
    features: [
      "Android App Development",
      "iOS App Development",
      "Cross-Platform Development",
      "Custom Mobile Applications",
      "UI/UX Design",
      "API & Backend Integration",
      "E-Commerce & Payment Apps",
      "Business & Enterprise Apps",
      "App Testing & Optimization",
      "Deployment & Maintenance"
    ],
    stats: { projects: "8+", clients: "6+", satisfaction: "96%" }
  },
  {
    number: "03",
    title: "Digital Marketing",
    label: "Visibility with Purpose",
    subtitle: "Campaigns and content systems that bring the right people closer to your brand.",
    description: "We help businesses build a strong digital presence and reach the right audience through SEO, social media, content marketing, paid campaigns and other digital strategies. Our data-driven approach focuses on increasing visibility, engagement, leads and business growth.",
    tags: ["SEO", "Social Media", "Content", "Analytics"],
    color: "#3773e0",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Content Marketing",
      "Paid Advertising Campaigns",
      "Email Marketing",
      "Analytics & Reporting",
      "Brand Strategy",
      "Lead Generation",
      "Conversion Optimization",
      "Digital Presence Management"
    ],
    stats: { projects: "10+", clients: "8+", satisfaction: "97%" }
  },
  {
    number: "04",
    title: "Nexergy Academy",
    label: "Skills That Stick",
    subtitle: "Hands-on technology training that turns learning into confident, practical ability.",
    description: "Nexergy Academy empowers students and professionals with industry-relevant technology skills through practical, hands-on learning. Our programs cover AI, Generative AI, Python, Java, Data Analytics, Cloud, DevOps and other emerging technologies.",
    tags: ["Training", "Workshops", "Upskilling", "Projects"],
      color: "#4a90e6",
    features: [
      "IT Foundation Program",
      "Full Stack Development",
      "Software Testing",
      "Data & AI",
      "Cloud & DevOps",
      "Python Programming",
      "Java Development",
      "Web & Mobile Development",
      "Real-World Projects",
      "Interview Preparation"
    ],
    stats: { programs: "6+", students: "50+", placement: "85%" }
  },
  {
    number: "05",
    title: "AI & Innovation",
    label: "Intelligence in Practice",
    subtitle: "Practical AI, machine learning, and intelligent solutions for modern business challenges.",
    description: "We help businesses leverage artificial intelligence and emerging technologies to gain competitive advantage. From AI-integrated applications to Generative AI solutions, we transform complex problems into intelligent, automated systems.",
    tags: ["AI", "Machine Learning", "Automation", "Innovation"],
    color: "#4a90e6",
    features: [
      "AI-Integrated Applications",
      "Machine Learning Solutions",
      "Generative AI Development",
      "AI-Powered Analytics",
      "Intelligent Automation",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Modeling",
      "AI Strategy & Consulting",
      "Custom AI Solutions"
    ],
    stats: { projects: "5+", clients: "4+", innovation: "100%" }
  }
];

export default function Subgroup() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const traceRef = useRef(null);
  const detailRef = useRef(null);

  const selected = servicesData[activeIndex] || servicesData[0];

  const handleSetActive = (index) => {
    if (index === activeIndex || isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => {
      if (traceRef.current) {
        traceRef.current.style.animation = "none";
        requestAnimationFrame(() => {
          if (traceRef.current) {
            traceRef.current.style.animation = "traceDraw 0.7s cubic-bezier(0.23, 1, 0.32, 1) both";
          }
        });
      }
      setIsAnimating(false);
    }, 100);
  };

  const handleBack = () => {
    window.history.back();
  };

  const railStyle = {
    "--active-index": activeIndex,
    "--row-count": servicesData.length
  };

  return (
    <main className="start-here-page">
      <section className="service-atlas" aria-labelledby="atlas-title">
        <div className="atlas-heading">
          
             <h1 id="atlas-title">
            Our <span className="gradient-highlight">Solutions</span>
          </h1>
          <p className="atlas-description">
            Technology, Digital Growth & Future Skills — all under one roof.
          </p>
        </div>

        <button className="back-button" onClick={handleBack}>
          <svg className="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to All Solutions
        </button>

        <div className="single-service-layout">
          {/* LEFT PANEL - Service List + Stats */}
          <div className="service-left-panel">
            <div className="service-rail" style={railStyle}>
              <span className="rail-track" aria-hidden="true" />
              <span className="rail-dot" aria-hidden="true" />

              <div className="service-list-stack" role="tablist" aria-label="Our solutions">
                {servicesData.map((service, idx) => (
                  <button
                    key={service.title}
                    role="tab"
                    aria-selected={idx === activeIndex}
                    className={`service-stack-item ${idx === activeIndex ? "is-active" : ""}`}
                    onClick={() => handleSetActive(idx)}
                    style={{ "--service-color": service.color }}
                  >
                    <span className="stack-number">{service.number}</span>
                    <div className="stack-content">
                      <span className="stack-label">{service.label}</span>
                      <h3 className="stack-title">{service.title}</h3>
                    </div>
                    <span className="stack-arrow">→</span>
                    <div className="stack-indicator" style={{ backgroundColor: service.color }} />
                  </button>
                ))}
              </div>
            </div>

            {/* STATS - Displayed on the LEFT side below the service list */}
            <div className="service-stats-left">
              <div className="stats-grid-left">
                {Object.entries(selected.stats).slice(0, 3).map(([key, value]) => {
                  const label = key.replace(/([A-Z])/g, " $1").trim().toUpperCase();
                  return (
                    <div key={key} className="stat-card-left" style={{ borderColor: `${selected.color}30` }}>
                      <span className="stat-value-left" style={{ color: selected.color }}>{value}</span>
                      <span className="stat-label-left">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - Detail with Circular Ring at Top Right */}
          <div className="service-detail-panel">
            <article
              className="active-service"
              style={{ "--service-color": selected.color, borderColor: `${selected.color}60` }}
              key={selected.title}
              ref={detailRef}
            >
              <span
                className="detail-trace"
                ref={traceRef}
                style={{ background: `linear-gradient(90deg, ${selected.color}, #7fb0f5, #b8d6ff)` }}
                aria-hidden="true"
              />

              {/* CIRCULAR RING - Positioned at TOP RIGHT */}
              <div className="service-visual-top-right" aria-hidden="true">
                <div className="visual-ring-top ring-one-top" style={{ borderColor: selected.color }} />
                <div className="visual-ring-top ring-two-top" style={{ borderColor: selected.color }} />
                <div className="visual-ring-top ring-three-top" style={{ borderColor: selected.color }} />
                <span className="visual-mark-top" style={{ color: selected.color, borderColor: selected.color }}>
                  {selected.number}
                </span>
                <span className="visual-point-top point-one-top" style={{ background: selected.color }} />
                <span className="visual-point-top point-two-top" style={{ background: selected.color }} />
              </div>

              <div className="detail-content-wrap">
                <p className="active-label">{selected.label}</p>
                <h2 className="service-detail-title">{selected.title}</h2>
                <p className="active-description">{selected.description}</p>

                <div className="service-features">
                  <h4 className="features-title">What We Do</h4>
                  <div className="features-grid">
                    {selected.features.slice(0, 8).map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-bullet" style={{ color: selected.color }}>✦</span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="active-footer">
                  <a href="/Contact" className="explore-link" style={{ color: selected.color }}>
                    Explore this solution <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}