import React from "react";

const ProgressBar = ({
  progress,
  width = 300,
  height = 20,
  color = "blue",
}) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "#e0e0e0",
        borderRadius: "10px",
        overflow: "hidden",
      }}>
      <div
        style={{
          width: `${clampedProgress}%`,
          height: "100%",
          backgroundColor: color,
          transition: "width 0.3s ease-in-out",
        }}
      />
    </div>
  );
};

export default ProgressBar;
