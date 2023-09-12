import React, { useState, useEffect } from "react";
import bg from "../../assets/images/Settings.png";
import on from "../../assets/images/Turn On.png";
import display from "../../assets/images/Revised Screen with buttons.png";
import display3 from "../../assets/images/INJECTION RATE SELECTION.png";
import vid1 from "../../assets/images/Self test mp4.mp4";
import vid2 from "../../assets/images/Syringe Change.mp4";
import test from "../../assets/images/Test Mode.png";
import technical from "../../assets/images/Technical.png";
import syringe from "../../assets/images/Syringe Change.png";
import background from "../../assets/images/REVISED DEVICE.jpg";
import newbg from "../../assets/images/bg.png";
import backvid from "../../assets/images/REVISED SELFTEST.mp4";
import syringeChange from "../../assets/images/LOADING THE SYRINGE REVISED.mp4";
import beepaudio from "../../assets/images/Device Sound .mp3";
import "./bolus.css";
import volumeBolus from "../../assets/images/Volume Bolus.mp4";
import manualBolus from "../../assets/images/Manual Bolus.mp4";

import { Link } from "react-router-dom";
// import powerOnaudio from "../../assets/voice/Page 4/Turn on the power button.mp3";
import RotateScreen from "../RotateScreen";
import Sidebar from "../sidebar/Sidebar";
import infusionVideo from "../../assets/images/video.mp4";
import bolusImage from "../../assets/images/BOLUS.png";
import { NextButton } from "../NextButton/nextButton";

// import pressOk from '../../assets/voice/Page 8/Press okay Button.mp3';
// import { Tooltip as ReactTooltip } from "react-tooltip";

const Bolus = () => {
  const [activeButton, setActiveButton] = useState(1);
  // const [activeButton, setactiveButton] = useState(null);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState({ newbg });
  const [backgroundImage2, setBackgroundImage2] = useState({ newbg });
  const [toggle, setToggle] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  // const tooltipRef = useRef(null);

  // useEffect(() => {
  //   if (tooltipRef.current) {
  //     tooltipRef.current.style.opacity = 1; // Show the tooltip on component mount
  //   }
  // }, []);
  const [isRotated, setIsRotated] = useState(false);
  const handleOrientationChange = () => {
    const { orientation } = window;
    setIsRotated(orientation === 90 || orientation === -90);
  };

  useEffect(() => {
    window.addEventListener("orientationchange", handleOrientationChange);
    console.log(activeButton);
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);
  const handleButtonClick = (buttonNumber) => {
    console.log("button pressed");
    setActiveButton(buttonNumber);
    setDisabledButtons((prevDisabledButtons) => [
      ...prevDisabledButtons,
      buttonNumber,
    ]);
  };

  const handleVideoEnded = () => {
    setActiveButton(2);
    setBackgroundImage({ newbg });
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
    // document.getElementById("tooltip").innerHTML = 'Press OK';
  };
  const handleVideoEnded3 = () => {
    // setActiveButton(7);
    setBackgroundImage2({ newbg });
  };
  const handleVideoEnded2 = () => {
    window.location.replace("");
  };

  const handleToggle = () => {
    setToggle((pre) => !pre);
  };

  return (
    <>
      <div className="container-fluid">
        <RotateScreen></RotateScreen>
        {activeButton === 7 && (
           <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <video
            src={volumeBolus}
            autoPlay
            onEnded={handleVideoEnded2}
            style={{ width: "100%", overflow: "hidden" }}
          >
            Your browser does not support the video tag.
          </video>
          <span style={{
        position: 'absolute',
        // top: '10px',
        left: '10px',
        zIndex: 1,
      }}>
          <button
      onClick={handleToggle}
     
    >
      Table Of Content
    </button>
    <NextButton
      url={"ChangeSyringe"}
      // style={{
      //   // position: 'absolute',
      //   top: '10px',
      //   left: '110px', // Adjust the left position as needed
      //   // zIndex: 1,
      // }}
    />
    </span>
          </div>
        )}

        {activeButton === 8 && (
           <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <video
            src={manualBolus}
            autoPlay
            onEnded={handleVideoEnded2}
            style={{ width: "100%", overflow: "hidden" }}
          >
            Your browser does not support the video tag.
          </video>
          <span style={{
        position: 'absolute',
        // top: '10px',
        left: '10px',
        zIndex: 1,
      }}>
          <button
      onClick={handleToggle}
     
    >
      Table Of Content
    </button>
    <NextButton
      url={"ChangeSyringe"}
      // style={{
      //   // position: 'absolute',
      //   top: '10px',
      //   left: '110px', // Adjust the left position as needed
      //   // zIndex: 1,
      // }}
    />
    </span>
          </div>
        )}
        <center>
          {" "}
          <h3
            className="text-dark"
            id="tooltip"
            style={{ position: "absolute", zIndex: 2 }}
          ></h3>
        </center>

        <div className="image-container display-full displayVid-full">
          {activeButton === 1 && (
            <video src={infusionVideo} autoPlay loop></video>
          )}

          {activeButton === 4 && <img src={syringe} alt="Image 4" />}
          {activeButton === 2 && <img src={bolusImage} />}
        </div>
        <div className="button-container">
          <button
            onClick={() => handleButtonClick(2)}
            className={`image-button ${activeButton === 1 ? "active" : ""}`}
            style={{
              position: "absolute",
              left: "57%",
              top: "26%",
              width: "3%",
              borderRadius: "50%",
              display: activeButton === 1 ? "block" : "none",
            }}
          >
            Switch Image 6
          </button>
          <button
            onClick={() => handleButtonClick(7)}
            className={`mt-6 image-button ${
              activeButton === 2 ? "active" : ""
            }`}
            style={{
              position: "absolute",
              left: "27%",
              top: "10%",

              width: "5%",

              borderRadius: "50%",
              display: disabledButtons.includes(2) ? "block" : "none",
            }}
          >
            Hi
          </button>

          <button
            className={`mt-6 image-button ${
              activeButton === 2 ? "active" : ""
            }`}
            style={{
              position: "absolute",
              left: "55%",
              top: "-3%",

              width: "8%",

              borderRadius: "50%",
              display: activeButton === 2 ? "block" : "none",
            }}
          >
            <b>bolus</b>
            {/* Switch Video */}
          </button>

          {/* {activeButton === 4 &&
      <center > <h3 className="text-dark pt-2" id='tooltip'>Press Power Button</h3> </center>
    } */}
          {/* {activeButton === 5 &&
      <center > <h3 className="text-dark pt-2" id='tooltip'>Press Power Button</h3> </center>
    } */}
        </div>
        {activeButton === 6 && (
          <center>
            {" "}
            {/* <h3 className="text-dark mt-5" id="tooltip"> */}
            <h3 className="text-dark" id="tooltip">

              {/* Press{" "}
              <svg
                style={{ fill: "#05b18b" }}
                className="bg-sucess text-success"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
              </svg>{" "}
              Button */}
            </h3>{" "}
          </center>
        )}
        <div>
          {/* <button onClick={handleToggle}>Table Of Content</button> */}
          {toggle && (
            <Sidebar
              close={() => setToggle(false)}
              selectedEntry={selectedEntry}
              setSelectedEntry={setSelectedEntry}
            />
          )}
        {/* <NextButton url={"ChangeSyringe"}></NextButton> */}

        </div>
      </div>
    </>
  );
};

export default Bolus;
