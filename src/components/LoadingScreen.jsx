import React from "react";
import { Html, useProgress } from "@react-three/drei";

const LoadingScreen = () => {
  const { progress } = useProgress();
  console.log(progress, "loading");
  return (
    <Html center>
      <div className="loading-container">
        <div className="spinner"></div>
        <p style={{ color: "white", fontSize: "24px" }}>
          Loading... {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default LoadingScreen;
