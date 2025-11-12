import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  const fullText = `Far away, on the edge of a dense forest, there lay a forgotten village — a place so cursed that people hesitated even to speak its name.
The land was barren, the water had dried up, and every day, villagers died of hunger.
The elders used to say, “Our poverty is a curse. And every curse demands a sacrifice.”

One dark new moon night, when not a single star lit up the sky, a few villagers, following the instructions of an ancient underground scripture, summoned a Dūt — a demon.

The demon said to them:

"Give me the sacrifice of an innocent child… and I will fulfill all your needs."

Between fear and greed, a hidden decision was made.
An orphaned, innocent child — unloved and forgotten by the world — was chosen for the offering.

The villagers imagined they would become rich, that crops would bloom, and gold would rain from the skies.
The demon accepts the offering… but he does not kill the child.

Instead, the child rises from the flames of the sacrifice — reborn as a monster.
There is pain in his eyes… and fire too.
He severs all ties with humanity.
He has become Animilian — the first of a new species, neither fully human, nor fully beast… and not yet free from the memory of being human.

He ends the village’s poverty — but at a cost.
Every new moon, a fresh sacrifice is required…

That village was never poor again —
but it was never free again, either.
`;

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      setTypingDone(true);
    }
  }, [currentIndex, fullText]);

  // Auto-scroll while typing
  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollTop = textRef.current.scrollHeight;
    }
  }, [displayedText]);

  // Optional: restart video near end
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= 2) {
        video.currentTime = 0;
      }
    };
    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <Container fluid className="p-0">
      <NavBar />
      <div className="position-relative w-100 vh-100 overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          className="w-100 h-100 position-absolute top-0 start-0"
          style={{ objectFit: "cover" }}
        >
          <source src="/videos/Animilian-1.mov" type="video/mp4" />
        </video>

        {/* Typing Text Overlay */}
        <div
          ref={textRef}
          className="position-absolute top-50 start-50 translate-middle text-light p-4"
          style={{
            width: "70%",
            maxHeight: "80%",
            overflowY: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            fontFamily: "serif",
            fontSize: "1.2rem",
            lineHeight: "1.8rem",
            whiteSpace: "pre-wrap",
            scrollbarWidth: "thin",
          }}
        >
          {displayedText}
          {!typingDone && <span className="typing-cursor">|</span>}
        </div>
      </div>
    </Container>
  );
};

export default Home;
