import React from "react";
import { Container, Card } from "react-bootstrap";
import NavBar from "./NavBar";

const Community = () => {
  const content = [
    {
      text: `Animilian is not just a team — it’s a collective of artists, holders, and believers who share the same vision. Our community is built on trust, transparency, and shared growth.`,
    },
    {
      text: `From Discord events, games, and raffles, to community voting and collabs with other Web3 groups — everything we do is centered around our people. Holders aren’t just collectors here; they’re part of the journey, shaping how the Animilian world grows.`,
    },
    {
      text: `As we move forward, the goal is to keep the ecosystem fun, rewarding, and inclusive — where every holder feels they’re building something meaningful, together.`,
    },
    {
      quote: `Animilian — Built on Solana. Powered by Art. Driven by People.`,
    },
  ];

  return (
    <Container fluid className="p-0">
      <NavBar />

      <div
        className="min-vh-100 d-flex justify-content-center align-items-center text-light"
        style={{
          backgroundImage: "url('/img/community.jpg')",
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
            Community — The Soul of Animilian
          </Card.Title>

          {content.map((section, index) => (
            <div key={index} className="mb-3">
              {section.text && (
                <p
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.1rem)",
                    color: "#f1f1f1",
                    lineHeight: "1.6",
                    textAlign: "justify",
                  }}
                >
                  {section.text}
                </p>
              )}

              {section.quote && (
                <blockquote
                  style={{
                    color: "#00ffff",
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    fontStyle: "italic",
                    textAlign: "center",
                    marginTop: "1.5rem",
                    borderLeft: "3px solid #00ffff",
                    paddingLeft: "1rem",
                  }}
                >
                  {section.quote}
                </blockquote>
              )}
            </div>
          ))}
        </Card>
      </div>
    </Container>
  );
};

export default Community;
