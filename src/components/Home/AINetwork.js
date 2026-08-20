import { useNavigate } from "react-router-dom";
import "./AINetwork.css";
import img1 from "./Gknodes.png";

export default function AINetwork() {
  const navigate = useNavigate();

  const getServiceSlug = (service) => {
    return service
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const openService = (service) => {
    const serviceSlug = getServiceSlug(service);
    navigate(`/subgroup/${serviceSlug}`);
  };

  const nodes = [
    {
      title: "Digital Solutions",
      icon: "🌐",
      description: "Web, Mobile & Software Application Development",
      route: "web-development",
      featured: true,
      angle: 30,
    },
    {
      title: "Digital Growth",
      icon: "📈",
      description: "Helping businesses build visibility, engage customers and generate growth",
      route: "digital-marketing",
      featured: true,
      angle: 150,
    },
    {
      title: "Nexergy Academy",
      icon: "🤖",
      description: "Building industry-ready technology professionals through practical, hands-on learning.",
      route: "python-for-ai",
      featured: true,
      angle: 270,
    },
  ];

  const handleNodeClick = (node) => {
    if (node.route) {
      openService(node.route);
    }
  };

  const handleNodeKeyDown = (event, node) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleNodeClick(node);
    }
  };

  return (
    <div className="network-container">
      {/* LEFT */}
      <div className="left-panel">
        <div className="left-content">
          <h1 className="what-we-do">
            <span className="line-1">What we</span>
            <span className="line-3">do?</span>
          </h1>

          <p className="left-description">
            GK Nexergy primarily supports students, graduates, working
            professionals, and women returning to their careers by helping them
            develop the technical and professional skills needed in today's
            digital world.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="right-panel">
        <div className="grid-overlay"></div>

        {/* Center logo – now properly sized & lower z-index */}
        <div className="center-node">
          <img
            src={img1}
            alt="GKNEXERGY"
            className="center-logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* Orbit – only main nodes, no connectors */}
        <div className="orbit-system">
          {nodes.map((node, index) => (
            <div
              key={index}
              className="orbit-item featured-orbit"
              style={{ "--angle": `${node.angle}deg` }}
            >
              <div
                className="node featured-node"
                onClick={() => handleNodeClick(node)}
                onKeyDown={(e) => handleNodeKeyDown(e, node)}
                role="button"
                tabIndex={0}
              >
                <div className="node-content">
                  {node.icon && <div className="icon">{node.icon}</div>}
                  <span>{node.title}</span>
                </div>

                <div className="popup">{node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}