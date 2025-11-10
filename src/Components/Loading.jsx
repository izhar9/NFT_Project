import React from "react";
import { Atom } from "react-loading-indicators";
const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#0f0f1a",
      }}
    >
      <Atom color="#8B0000" size="large" text="Loading..." textColor="" />
    </div>
  );
};
export default Loading;
