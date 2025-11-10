import NavBar from "./NavBar";
import { Container } from "react-bootstrap";

const RevenueShare = () => {
  return (
    <Container fluid className="p-0">
      <NavBar />

      <div
        style={{
          position: "relative",
          height: "calc(100vh - 70px)",
          backgroundImage: "url('/img/4th.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Bebas Neue', sans-serif",
        //   overflow: "hidden", // prevents accidental scroll
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            padding: "25px",
            borderRadius: "12px",
            maxWidth: "900px",
            marginTop: "70px", // navbar offset only
          }}
        >
          <h1
            className="mb-4 text-uppercase"
            style={{
                color: "#00ffff",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
              letterSpacing: "2px",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              textAlign: "center",
            }}
          >
            Revenue Distribution — Built on Fairness & Transparency
          </h1>

          {[
            "Every project talks about community — we actually designed our system around it. Here's how we distribute all earnings from mints and royalties:",
            "<strong style='color:#00ffcc'>40%</strong> — Community Rewards shared directly with holders. If the project wins, the community wins too.",
            "<strong style='color:#ff33cc'>40%</strong> — Ecosystem & Market Stability used for floor sweeps, giveaways, and selective burns to sustain scarcity and long-term value.",
            "<strong style='color:#00bfff'>20%</strong> — Development & Expansion reserved for new utilities, growth, and innovation of the Animilian ecosystem.",
            "Every percentage has a purpose — nothing random, nothing hidden. Just a balance of creativity, stability, and progress.",
          ].map((text, i) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{ __html: text }}
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "#f1f1f1",
                lineHeight: "1.6",
                marginBottom: "1rem",
                letterSpacing: "0.3px",
                textAlign: "justify",
              }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RevenueShare;
