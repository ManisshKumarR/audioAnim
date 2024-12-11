import React from "react";
import SphereVideo from "../../asserts/videos/Sphere AI_IDLE.webm";
import "./circleAnim.css";

const CircleAnim = () => {
  return (
    <div className="anim-container">
      <video
        src={SphereVideo}
        type="video/webm"
        className="anim"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default CircleAnim;
