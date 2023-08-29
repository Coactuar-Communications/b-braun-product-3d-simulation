import React, { useState, useEffect } from "react";
import changeInfusionRateVideo from "../../assets/images/changeInfusionRate.mp4";
import "./changeInfusionRate.css";
import video from "../../assets/images/video.mp4";

const ChangeInfusionRate = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  const [showInfusionChange, setShowInfusionChange] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const handleOrientationChange = () => {
    const { orientation } = window;
    setIsRotated(orientation === 90 || orientation === -90);
  };

  useEffect(() => {
    setVideoVisible(true);
    window.addEventListener("orientationchange", handleOrientationChange);
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  const handleOK = () => {
    setShowInfusionChange(true);
  };

  return (
    <>
      <center>
        {" "}
        <h3 className="text-dark" id="tooltip">
          Adjust infusion rate during therapy by pressing the OK button
        </h3>
      </center>
      {videoVisible ? (
        <video src={video} alt="Video" className="media vid1" autoPlay loop />
      ) : null}

      {showInfusionChange == true && (
        <video
          src={changeInfusionRateVideo}
          autoPlay
          style={{ width: "100%", overflow: "hidden" }}
        >
          Your browser does not support the video tag.
        </video>
      )}

      <div className="tab-navigation">
        <button className="ok-button1 " onClick={handleOK}>
          OK
        </button>
        {/* <audio className="audio-element" autoPlay>
          <source src={startInfusion}></source>
        </audio> */}
      </div>
    </>
  );
};

export default ChangeInfusionRate;
