import React from "react";
import { Card } from "react-bootstrap";
import NavBar from "./NavBar";

const RevenueShare = () => {
  const shares = [
    {
      text: `Every project talks about community — we actually designed our system around it. Here's how we distribute all earnings from mints and royalties:`,
    },
    {
      percent: "40%",
      color: "#00ffcc",
      title: "Community Rewards",
      text: `Shared directly with holders. If the project wins, the community wins too.`,
    },
    {
      percent: "40%",
      color: "#ff33cc",
      title: "Ecosystem & Market Stability",
      text: `Used for floor sweeps, giveaways, and selective burns to sustain scarcity and long-term value.`,
    },
    {
      percent: "20%",
      color: "#00bfff",
      title: "Development & Expansion",
      text: `Reserved for new utilities, growth, and innovation of the Animilian ecosystem.`,
    },
    {
      text: `Every percentage has a purpose — nothing random, nothing hidden. Just a balance of creativity, stability, and progress.`,
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          flexShrink: 0,
          position: "relative",
          zIndex: 10,
        }}
      >
        <NavBar />
      </div>

      {/* Background + Card Content */}
      <div
        className="flex-grow-1 d-flex justify-content-center align-items-center text-light"
        style={{
          backgroundImage: "url('/img/roadMap.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: "'Bebas Neue', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Card
          className="bg-dark bg-opacity-75 p-4 rounded-4 shadow-lg m-3"
          style={{
            maxWidth: "900px",
            width: "90%",
            maxHeight: "80%",
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
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
            Revenue Distribution — Built on Fairness & Transparency
          </Card.Title>

          {shares.map((item, index) => (
            <div key={index} className="mb-3">
              {item.percent && (
                <h4
                  style={{
                    color: item.color,
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  {item.percent} — {item.title}
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
                {item.text}
              </p>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default RevenueShare;
