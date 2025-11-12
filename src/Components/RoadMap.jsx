import React from "react";
import { Container, Card } from "react-bootstrap";
import NavBar from "./NavBar";

const RoadMap = () => {
  const phases = [
    {
      color: "#00ffff",
      text: `Animilian started with a simple belief — art should mean something.
      We wanted to create digital art that goes beyond visuals, something people
      can actually feel and connect with. That’s why our roadmap focuses on purpose,
      utility, and community.`,
    },
    {
      title: "Phase 1 – Laying the Foundation",
      color: "#00ffcc",
      text: `We begin with the launch of the Animilian NFT Collection on Solana —
      every piece crafted with care, each telling its own story. We’ll focus on
      building our community, opening Discord, and rewarding early supporters.
      It’s about introducing our vision and building a base of genuine collectors.`,
    },
    {
      title: "Phase 2 – Expanding Utility & Ecosystem",
      color: "#ff33cc",
      text: `This is where $ANIMO, our native token, comes to life. Holders will stake
      NFTs, earn $ANIMO, and use it for raffles, special drops, and events. We’ll
      start collaborations with other Web3 communities to grow together.`,
    },
    {
      title: "Phase 3 – Growth & Sustainability",
      color: "#00bfff",
      text: `We’ll execute floor sweeps and selective burns to maintain long-term value.
      We’ll expand the Animilian universe through art experiences, games, and events —
      evolving while staying transparent and community-driven.`,
    },
  ];

  return (
    <Container fluid className="p-0">
      <NavBar />

      <div
        className="min-vh-100 d-flex justify-content-center align-items-center text-light"
        style={{
          backgroundImage: "url('/img/roadMap.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: "'Bebas Neue', sans-serif",
        }}
      >
        <Card
          className="bg-dark bg-opacity-75 p-4 rounded-4 shadow-lg m-3"
          style={{ maxWidth: "900px" }}
        >
          <Card.Title
            as="h1"
            className="text-center mb-4 text-uppercase"
            style={{
              color: "#00ffff",
              letterSpacing: "2px",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
            }}
          >
            Building the Animilian Legacy
          </Card.Title>

          {phases.map((phase, index) => (
            <div key={index} className="mb-3">
              {phase.title && (
                <h4
                  style={{
                    color: phase.color,
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  {phase.title}
                </h4>
              )}
              <p
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.1rem)",
                  color: "#f1f1f1",
                  lineHeight: "1.6",
                  textAlign: "justify",
                }}
              >
                {phase.text}
              </p>
            </div>
          ))}
        </Card>
      </div>
    </Container>
  );
};

export default RoadMap;
