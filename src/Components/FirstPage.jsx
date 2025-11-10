import React from "react";

const FirstPage = ({ onEnter }) => {
  return (
    <div
      onClick={onEnter}
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/img/2nd.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        cursor: "pointer",
        fontFamily: "Poppins, sans-serif",
        userSelect: "none",
        textShadow: "0 0 10px rgba(0,0,0,0.7)",
      }}
    >
      {/* <p
        style={{
          fontSize: "2rem",
          opacity: 0.9,
          letterSpacing: "1px",
          animation: "blink 1.2s infinite",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        Tap to Enter
      </p> */}
    </div>
  );
};

export default FirstPage;
