import React from "react";

const SkeletonBox = ({ width = "100%", height = "20px", className = "" }) => {
  return (
    <div
      className={`bg-white/10 animate-pulse rounded ${className}`}
      style={{ width, height }}
    />
  );
};

export default SkeletonBox;