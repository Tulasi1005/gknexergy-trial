//homebanner.js
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Homebanner.css";

export default function Homebanner() {
  const navigate = useNavigate();

  // Updated to match the slug format expected in subgroup.js
  const openService = (service) => {
    // Convert service name to the format expected by subgroup.js
    const serviceSlug = service.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    navigate(`/subgroup/${serviceSlug}`);
  };

  const handleServiceKeyDown = (event, service) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openService(service);
    }
  };

  return (
    <section className="skill-universe">
      <div className="grid-overlay"></div>

      <div className="universe-container">
        {/* Center */}

        <div className="nexergy-core">
          <h1>GKNEXERGY</h1>

          <p>Learn • Build • Transform</p>

          <Button
            className="explore-btn"
            onClick={() => navigate("/courses")}
          >
            Explore Courses
          </Button>
        </div>

        {/* Orbiting Courses */}

        <div className="orbit">
          <div className="planet web" role="button" tabIndex={0} onClick={() => openService("web-development")} onKeyDown={(event) => handleServiceKeyDown(event, "web-development")}>
            <h3>🌐</h3>

            <h4>Web Development</h4>

            <p>React • Node • APIs</p>
          </div>

          <div className="planet marketing" role="button" tabIndex={0} onClick={() => openService("digital-marketing")} onKeyDown={(event) => handleServiceKeyDown(event, "digital-marketing")}>
            <h3>📈</h3>

            <h4>Digital Marketing</h4>

            <p>SEO • Ads • Analytics</p>
          </div>

          <div className="planet ai" role="button" tabIndex={0} onClick={() => openService("python-for-ai")} onKeyDown={(event) => handleServiceKeyDown(event, "python-for-ai")}>
            <h3>🤖</h3>

            <h4>Python for AI</h4>

            <p>Python • ML • AI</p>
          </div>
        </div>
      </div>
    </section>
  );
}