import { useEffect } from "react";
import "./AboutUs.css";
import videoSrc from "./GKpromo.mp4"; // Adjust the path if necessary

export default function AboutUs() {
  useEffect(() => {
    // Simple reveal animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* ===== HERO ===== */}
      {/* ===== HERO ===== */}
<section className="about-hero">
  {/* Video Background */}
  <video
    className="hero-video"
    autoPlay
    muted
    loop
    playsInline
   
  >
    <source src={videoSrc} type="video/mp4" />
    {/* You can add webm for better compression */}
    {/* <source src="https://your-video-url.webm" type="video/webm" /> */}
  </video>

  {/* Dark overlay so text remains readable */}
  <div className="hero-overlay"></div>

  <div className="hero-content">
    <h1 className="hero-title">
      About <span>GK Nexergy</span>
    </h1>
    <p className="hero-subtitle">
      Bridging the gap between academic education and industry expectations
    </p>
  </div>
</section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="about-content">
        <div className="container">
          {/* Company Story */}
          <div className="story-section reveal">
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">Building Future-Ready Talent</h2>

            <div className="story-grid">
              <div className="story-text">
                <p>
                  GK Nexergy is a technology training, skill development, and software solutions
                  company founded by professionals with over <strong>25 years of IT industry experience</strong>{" "}
                  and extensive expertise in software development, project delivery, and workforce training.
                </p>
                <p>
                  Through a unique blend of industry expertise, project-based learning, mentorship,
                  and emerging technology training, GK Nexergy bridges the gap between academic education
                  and industry expectations.
                </p>
                <p>
                  Our training programs cover high-demand areas such as{" "}
                  <strong>
                    Software Development, Cloud Computing, Data Engineering, Automation Testing,
                    Artificial Intelligence, and Digital Transformation
                  </strong>
                  , helping learners acquire industry-relevant skills for today’s technology-driven world.
                </p>
                <p>
                  The company focuses on nurturing students, graduates, working professionals, and women
                  re-entering the workforce by equipping them with the technical, professional, and
                  interpersonal skills required to succeed in the evolving digital economy.
                </p>
              </div>

              <div className="story-highlights">
                <div className="highlight-card">
                  <div className="highlight-number">25+</div>
                  <div className="highlight-label">Years of Industry Experience</div>
                </div>
                <div className="highlight-card">
                  <div className="highlight-number">6+</div>
                  <div className="highlight-label">High-Demand Domains</div>
                </div>
                <div className="highlight-card">
                  <div className="highlight-number">100%</div>
                  <div className="highlight-label">Project-Based Learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="vision-section reveal">
            <div className="vision-card">
              <div className="vision-icon">🎯</div>
              <div className="section-label light">Our Vision</div>
              <h2 className="section-title light">
                Empowering Every Learner for the Digital Future
              </h2>
              <p className="vision-text">
                GK Nexergy envisions a future where every aspiring learner, professional, and career
                returnee has access to quality technology education, innovation, practical learning,
                real-world experiences, meaningful employment opportunities, and industry collaboration.
              </p>
              <p className="vision-text">
                Through inclusive growth across rural, semi-urban, and underserved communities, the
                organization aims to contribute to India’s digital economy while supporting the nation’s
                vision of building a skilled, confident, and future-ready workforce.
              </p>
            </div>
          </div>

          {/* Core Focus Areas */}
          <div className="focus-section reveal">
            <div className="section-label">What We Focus On</div>
            <h2 className="section-title">Creating Impact Where It Matters</h2>

            <div className="focus-grid">
              <div className="focus-card">
                <div className="focus-icon">🎓</div>
                <h3>Students & Graduates</h3>
                <p>
                  Transform academic knowledge into industry-ready skills through hands-on projects
                  and mentorship.
                </p>
              </div>

              <div className="focus-card">
                <div className="focus-icon">💼</div>
                <h3>Working Professionals</h3>
                <p>
                  Upskill and reskill in emerging technologies to stay competitive and accelerate
                  career growth.
                </p>
              </div>

              <div className="focus-card">
                <div className="focus-icon">👩‍💻</div>
                <h3>Women Returning to Work</h3>
                <p>
                  Supportive learning paths that rebuild confidence and technical expertise for a
                  successful comeback.
                </p>
              </div>

              <div className="focus-card">
                <div className="focus-icon">🌍</div>
                <h3>Inclusive Growth</h3>
                <p>
                  Reaching rural and semi-urban communities to democratize quality technology education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}