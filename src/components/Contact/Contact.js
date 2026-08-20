import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  const contactChannels = [
    {
      id: "phone",
      badge: "Direct Phone & WhatsApp",
      title: "Direct Admissions & Support",
      description: "Speak directly with our academic counselors and IT mentors.",
      highlight: "+91 97045 85960",
      primaryAction: {
        label: "Call Us Now",
        href: "tel:+919704585960"
      },
      secondaryAction: {
        label: "Chat on WhatsApp",
        href: "https://wa.me/919704585960?text=Hi%20GK%20Nexergy%20team,%20I%20would%20like%20to%20know%20more%20about%20your%20programs."
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    },
    {
      id: "email",
      badge: "Official Correspondence",
      title: "Email & Partnerships",
      description: "For corporate training, college tie-ups, and enterprise software solutions.",
      highlight: "contact@gknexergy.com",
      primaryAction: {
        label: "Send Email",
        href: "mailto:contact@gknexergy.com"
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      )
    },
    {
      id: "returnees",
      badge: "Special Initiative",
      title: "Women Returnees & Upskilling",
      description: "Dedicated mentorship track for career restarts, rural & semi-urban talent.",
      highlight: "1-on-1 Career Restart Guidance",
      primaryAction: {
        label: "Connect with Mentors",
        href: "https://wa.me/919704585960?text=Hi,%20I%20am%20interested%20in%20the%20GK%20Nexergy%20Career%20Returnee%20/%20Upskilling%20Program."
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      id: "programs",
      badge: "Tech Tracks",
      title: "Software & Technology Solutions",
      description: "Software Dev, Cloud, Data Engineering, AI, & Automation Testing consulting.",
      highlight: "Backed by 25+ Years IT Leadership",
      primaryAction: {
        label: "Request Program Syllabus",
        href: "https://wa.me/919704585960?text=Hi%20GK%20Nexergy,%20please%20share%20the%20curriculum%20for%20your%20tech%20tracks."
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    }
  ];

  const focusDomains = [
    "Software Development",
    "Cloud Computing",
    "Data Engineering",
    "Automation Testing",
    "Artificial Intelligence (AI)",
    "Digital Transformation"
  ];

  return (
    <div className="gk-contact-wrapper py-5">
      <Container>
        {/* Brand Header */}
        <div className="gk-contact-hero text-center mb-5">
          <div className="gk-experience-badge mb-3">
            <span className="gk-live-indicator"></span>
            <span>25+ Years of Industry & IT Delivery Expertise</span>
          </div>

          <h1 className="gk-hero-title">Connect with <span className="gk-gradient-brand">GK Nexergy</span></h1>
          <p className="gk-hero-subtitle">
            Bridging the gap between academic education and industry expectations. Reach out directly to discuss training, real-world project mentorship, or enterprise solutions.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <Row className="g-4 justify-content-center mb-5">
          {contactChannels.map((card) => (
            <Col key={card.id} md={6} lg={6} xl={5}>
              <div className="gk-channel-card">
                <div className="gk-card-header">
                  <div className="gk-icon-box">{card.icon}</div>
                  <span className="gk-pill-tag">{card.badge}</span>
                </div>

                <div className="gk-card-body">
                  <h3 className="gk-card-title">{card.title}</h3>
                  <p className="gk-card-desc">{card.description}</p>
                  <div className="gk-card-highlight">{card.highlight}</div>
                </div>

                <div className="gk-card-actions">
                  <a
                    href={card.primaryAction.href}
                    target={card.primaryAction.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="gk-btn-primary"
                  >
                    <span>{card.primaryAction.label}</span>
                    <svg className="gk-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>

                  {card.secondaryAction && (
                    <a
                      href={card.secondaryAction.href}
                      target="_blank"
                      rel="noreferrer"
                      className="gk-btn-secondary"
                    >
                      {card.secondaryAction.label}
                    </a>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Technology Domains & Vision Banner */}
        <div className="gk-vision-banner">
          <div className="gk-vision-content">
            <span className="gk-tagline">FUTURE-READY WORKFORCE</span>
            <h3>Explore High-Demand Training Tracks</h3>
            <p>
              Tailored for students, graduates, working professionals, and women re-entering the workforce across India.
            </p>
            <div className="gk-domains-cloud">
              {focusDomains.map((domain) => (
                <span key={domain} className="gk-domain-chip">
                  ✓ {domain}
                </span>
              ))}
            </div>
          </div>
          <div className="gk-vision-callout">
            <h4>Quick Helpline</h4>
            <a href="tel:+919704585960" className="gk-direct-call-btn">
              📞 +91 97045 85960
            </a>
            <small>Mon – Sat | 9:00 AM – 7:00 PM IST</small>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;