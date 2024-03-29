import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import './meter.css';
import display from '../../assets/images/Revised Screen with buttons.png';
import buttons from '../../assets/voice/Page 8/Use the buttons.mp3';
import Sidebar from "../sidebar/Sidebar";
import RotateScreen from '../RotateScreen';
import { BsListUl } from 'react-icons/bs';
import { NextButton } from '../NextButton/nextButton';
const Rate = () => {
  const [value, setValue] = useState([0, 0, 0, 0, '.', 0, 0]);
  const [activeDigit, setActiveDigit] = useState(3);
  const [selectedNumber, setSelectedNumber] = useState('');
  const [toggle, setToggle] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const navigate = useNavigate ();
  const history = useNavigate();
  useEffect(() => {
    const preselectedValue = localStorage.getItem("rate");
    const number = parseFloat(value.join(''));
    setSelectedNumber(number);
  }, [value]);
  const handleGoBack = () => {
    // Go back to the previous page
    history(-1);
  };
  const handleIncrement = () => {
    const updatedValue = [...value];
    if (activeDigit !== -1) {
      if (updatedValue[activeDigit] < 9) {
        updatedValue[activeDigit] += 1;
      } else {
        updatedValue[activeDigit] = 0;
        let previousDigit = activeDigit - 1;
        while (previousDigit >= 0 && updatedValue[previousDigit] === 9) {
          updatedValue[previousDigit] = 0;
          previousDigit--;
        }
        if (previousDigit >= 0) {
          updatedValue[previousDigit] += 1;
        }
      }
    }
    setValue(updatedValue);
  };

  const handleDecrement = () => {
    const updatedValue = [...value];
    if (activeDigit !== -1) {
      if (updatedValue[activeDigit] > 0) {
        updatedValue[activeDigit] -= 1;
      } else {
        updatedValue[activeDigit] = 9;
        let previousDigit = activeDigit - 1;
        while (previousDigit >= 0 && updatedValue[previousDigit] === 0) {
          updatedValue[previousDigit] = 9;
          previousDigit--;
        }
        if (previousDigit >= 0) {
          updatedValue[previousDigit] -= 1;
        }
      }
    }
    setValue(updatedValue);
  };
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };
  const handleShiftLeft = () => {
    const newActiveDigit = activeDigit === 0 ? value.length - 1 : activeDigit - 1;
    setActiveDigit(newActiveDigit);
  };

  const handleShiftRight = () => {
    const newActiveDigit = activeDigit === value.length - 1 ? 0 : activeDigit + 1;
    setActiveDigit(newActiveDigit);
  };

  const handleOK = () => {
    localStorage.setItem("rate", parseFloat(value.join('')));
    // Redirect to Meter page and pass selectedNumber state
    navigate('/Meter', { state: { selectedNumber: parseFloat(value.join('')) } });
  };
  const renderDigit = (digit, index) => {
    if (digit === 0 && index !== activeDigit) {
      return <div className={`tab ${activeDigit === index ? 'active' : ''}`}>-</div>;
    }
    return (
      <div
        className={`tab ${activeDigit === index ? 'active' : ''}`}
        onClick={() => setActiveDigit(index)}
      >
        {digit}
      </div>
    );
  };

  return (
    <>

<div className="container-fluid bg-syringe">
    <RotateScreen></RotateScreen>
    <div className='row'>
    <div className='col-sm-3'>
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
      url={"menu2"}
      // style={{
      //   // position: 'absolute',
      //   top: '10px',
      //   left: '110px', // Adjust the left position as needed
      //   // zIndex: 1,
      // }}
    />
    </span>
        {toggle && <Sidebar close={() => setToggle(false)} selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} />}
        {/* <NextButton url={"ward"}></NextButton> */}
    </div>
    <div className='col-sm-9'>

     <center> <h3 className="text-dark" id='tooltip'>Enter the delivery rate  </h3></center>
     <center> <h4 className="text-dark" id='tooltip'>Use the arrow buttons to enter the required rate </h4></center>
     </div></div>
     <audio className="audio-element" autoPlay>
     <source src={buttons}></source>
   </audio>  
    <div className="display_meter">
      {/* <img src={display} alt="Display" /> */}

      <center>
        <p className="heading_menu">Rate</p>
      </center>
      <center>
        {/* <p className='heading11'>{selectedNumber}</p> */}
        <p className="heading1">ml/h</p>
      </center>

      <div className="meter">
        <div className="controls">
          <button className="left" onClick={handleShiftLeft}>{'<'}</button>
          <button className="decrement down-button1" onClick={handleDecrement}>-</button>
        </div>
        <div className="digits">
          {value.map((digit, index) => (
            <span key={index} className={`tab ${activeDigit === index ? 'active' : ''}`}>
              {renderDigit(digit, index)}
            </span>
          ))}
        </div>
        <div className="controls">
          <button className="increment up-button1" onClick={handleIncrement}>+</button>
          <button className="shiftright" onClick={handleShiftRight}>{'>'}</button>
        </div>
      </div>
      <center>
        <p className="bg-warning text-dark startinfusion">
          <span className="bg-success text-white start">Start</span> Start Infusion
        </p>
      </center>
      <center>
        <button className="ok-button1" style={{width: "25%"}} onClick={handleOK}>
          OK
        </button>
        <button className="back-button" onClick={handleGoBack}>
          Back
        </button>
      </center>
     
    </div>
 
   </div>
    </>
  );
};

export default Rate;