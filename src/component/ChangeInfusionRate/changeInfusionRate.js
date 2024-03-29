import React, { useState, useEffect } from "react";
import bg from "../../assets/images/Settings.png";
import on from "../../assets/images/Turn On.png";
import display from "../../assets/images/Revised Screen with buttons.png";
import display3 from "../../assets/images/INJECTION RATE SELECTION.png";
import vid1 from "../../assets/images/Self test mp4.mp4";
import vid2 from "../../assets/images/Syringe Change.mp4";
import test from "../../assets/images/Test Mode.png";
import technical from "../../assets/images/Technical.png";
// //import syringe from "../../assets/images/Syringe Change.png";
import background from "../../assets/images/REVISED DEVICE.jpg";
import newbg from "../../assets/images/bg.png";
import backvid from "../../assets/images/REVISED SELFTEST.mp4";
import syringeChange from "../../assets/images/LOADING THE SYRINGE REVISED.mp4";
import beepaudio from "../../assets/images/Device Sound .mp3";
import "./changeInfusionRate.css";
import { Link } from "react-router-dom";
import powerOnaudio from "../../assets/voice/Page 4/Turn on the power button.mp3";
import RotateScreen from "../RotateScreen";
import Sidebar from "../sidebar/Sidebar";
import changeInfusionRateVideo from "../../assets/images/changeInfusionRate.mp4";
import runningInfusion from "../../assets/images/ADJUST INFUSION 32.mp4";
import { NextButton } from "../NextButton/nextButton";
import { BsListUl } from 'react-icons/bs';
// import pressOk from '../../assets/voice/Page 8/Press okay Button.mp3';
// import { Tooltip as ReactTooltip } from "react-tooltip";

const ChangeInfusionRate = () => {
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
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);
  const handleButtonClick = (buttonNumber) => {
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

  const handleToggle = () => {
    setToggle((pre) => !pre);
  };

  return (
    <>
      <div className="container-fluid">
        <RotateScreen></RotateScreen>
        
        <center>
          {" "}
          <h3
            className="text-dark"
            id="tooltip"
            style={{ position: "absolute", zIndex: 2 }}
          ></h3>
        </center>

        {activeButton === 6 && (
          <audio className="audio-element" autoPlay>
            <source src={powerOnaudio}></source>
          </audio>
        )}
        {activeButton === 3 && (
            <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <video
            src={backvid}
            autoPlay
            onEnded={handleVideoEnded}
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
      <BsListUl />
    </button>
    <NextButton
      url={"bolus"}
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
        {activeButton === 7 && (
         <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <video
            src={changeInfusionRateVideo}
            autoPlay
            style={{ width: "100%", overflow: "hidden" }}
          >
            Your browser does not support the video tag.
          </video>
          <span   style={{
        position: 'absolute',
        // top: '10px',
        left: '10px',
        zIndex: 1,
      }}>
          <button
      onClick={handleToggle}
    
    >

      <BsListUl />
    </button>

    <NextButton
      url={"Bolus"}
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
        <div className="image-container display-full displayVid-full">
        {/* {activeButton != 7 && (
          <center> <h3 className="text-dark" id='tooltip'>Adjust infusion rate during therapy by pressing the OK button</h3></center>
        )} */}
          {activeButton === 1 && 
           <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <video src={runningInfusion} autoPlay>
          Your browser does not support the video tag.
        </video>
        <span   style={{
        position: 'absolute',
        // top: '10px',
        left: '10px',
        zIndex: 1,
      }}>
          <button
      onClick={handleToggle}
    
    >

      <BsListUl />
    </button>

    <NextButton
      url={"Bolus"}
      // style={{
      //   // position: 'absolute',
      //   top: '10px',
      //   left: '110px', // Adjust the left position as needed
      //   // zIndex: 1,
      // }}
    />
   </span>    
</div> }
        </div>
        <div className="button-container">
          <button
            onClick={() => handleButtonClick(7)}
            disabled={disabledButtons.includes(7)}
            className={` image-button ${
              activeButton === 7 ? "active" : ""
            }`}
         id="changing-infusion-ok-btn"
              style={{
                
                display: disabledButtons.includes(7) ? "none" : "block",
         
            }}
          >
            <a
              onClick={() => handleButtonClick("video")}
              disabled={disabledButtons.includes("video")}
              className={`media-button ${
                activeButton === "video" ? "active" : ""
              }`}
              // style={{ display: disabledButtons.includes('video') ? 'none' : 'block' }}
              // className={`image-button ${activeButton === 3 ? 'active' : ''}`}
              style={{
                position: "absolute",
                left: "33%",
      top: "35%",
                height:"9%",
                width: "3%",
                borderRadius: "0%",
                color:"transparent",
                display: disabledButtons.includes("video") ? "none" : "block",
              }}
            >
              <b>ok</b>
            </a>
          </button>
        </div>
        {activeButton === 6 && (
          <center>
            {" "}
            {/* <h3 className="text-dark mt-5" id="tooltip"> */}
            <h3 className="text-dark" id="tooltip">

              Press{" "}
              <svg
                style={{ fill: "#05b18b" }}
                className="bg-sucess text-success"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
              </svg>{" "}
              Button
            </h3>{" "}
          </center>
        )}

        {/* <button onClick={handleToggle}><BsListUl /></button> */}
        {toggle && <Sidebar close={() => setToggle(false)} selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} />}
        {/* <NextButton url={"bolus"}></NextButton> */}
      </div>
    </>
  );
};

export default ChangeInfusionRate;


