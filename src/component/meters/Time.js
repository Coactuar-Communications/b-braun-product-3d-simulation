import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import './meter.css';
import display from '../../assets/images/Revised Screen with buttons.png';
import RotateScreen from '../RotateScreen';
import Sidebar from "../sidebar/Sidebar";
import { BsListUl } from 'react-icons/bs';
import { NextButton } from '../NextButton/nextButton';
const Time = () => {
  const [value1, setValue1] = useState([0, 0, '.', 0,0,'h']);
  const [activeDigit1, setActiveDigit1] = useState(3);
  const [selectedNumber1, setSelectedNumber1] = useState('');
  const [calculationResult, setCalculationResult] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const navigate = useNavigate ();

  useEffect(() => {
    const number = parseFloat(value1.join(''));
    setSelectedNumber1(number);
  }, [value1]);

  const handleIncrement = () => {
    const updatedvalue1 = [...value1];
    if (activeDigit1 !== -1) {
      if (updatedvalue1[activeDigit1] < 9) {
        updatedvalue1[activeDigit1] += 1;
      } else {
        updatedvalue1[activeDigit1] = 0;
        let previousDigit = activeDigit1 - 1;
        while (previousDigit >= 0 && updatedvalue1[previousDigit] === 9) {
          updatedvalue1[previousDigit] = 0;
          previousDigit--;
        }
        if (previousDigit >= 0) {
          updatedvalue1[previousDigit] += 1;
        }
      }
    }
    setValue1(updatedvalue1);
    calculateResult();
  };

  const handleDecrement = () => {
    const updatedvalue1 = [...value1];
    if (activeDigit1 !== -1) {
      if (updatedvalue1[activeDigit1] > 0) {
        updatedvalue1[activeDigit1] -= 1;
      } else {
        updatedvalue1[activeDigit1] = 9;
        let previousDigit = activeDigit1 - 1;
        while (previousDigit >= 0 && updatedvalue1[previousDigit] === 0) {
          updatedvalue1[previousDigit] = 9;
          previousDigit--;
        }
        if (previousDigit >= 0) {
          updatedvalue1[previousDigit] -= 1;
        }
      }
    }
    setValue1(updatedvalue1);
    calculateResult();
  };

  const handleShiftLeft = () => {
    const newactiveDigit1 = activeDigit1 === 0 ? value1.length - 1 : activeDigit1 - 1;
    setActiveDigit1(newactiveDigit1);
  };

  const handleShiftRight = () => {
    const newactiveDigit1 = activeDigit1 === value1.length - 1 ? 0 : activeDigit1 + 1;
    setActiveDigit1(newactiveDigit1);
  };

  const handleOK = () => {
    localStorage.setItem("time", parseFloat(value1.join('')));
    // Redirect to Meter page and pass selectedNumber state
    navigate('/Meter', { state: { selectedNumber1: parseFloat(value1.join('')) } });
  };
  const renderDigit = (digit, index) => {
    if (digit === 0 && index !== activeDigit1) {
      return <div className={`tab1 ${activeDigit1 === index ? 'active' : ''}`}>-</div>;
    }
    return (
      <div
        className={`tab1 ${activeDigit1 === index ? 'active' : ''}`}
        onClick={() => setActiveDigit1(index)}
      >
        {digit}
      </div>
    );
  };
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };
  const calculateResult = () => {
    const rate = localStorage.getItem("rate");; // Placeholder for the volume value (replace with actual volume)
    const time = parseFloat(value1.join('')) + 0.01; // Get the rate from the user-selected value
    const timeInHrs = time / 60;
    console.log("Rate: " + rate)
    console.log("Time: " + time)
    const result = rate * timeInHrs;
    console.log(result);
    setCalculationResult(result);
  };

  return (
    <>
    {/* <RotateScreen></RotateScreen> */}
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

    <center> <h3 className="text-dark" id='tooltip'>Enter the time  </h3></center>
    <center> <h4 className="text-dark" id='tooltip'>Use the arrow buttons to enter the required time </h4></center>
    </div></div>
    <div className="display_meter">
      {/* <img src={display} alt="Display" /> */}

      <center>
        <p className="heading_menu">Time</p>
      </center>
      <center>
        <p className='heading1' style={{left:"7%"}}>{selectedNumber1}</p>
        {/* <p className="heading1">ml/h</p> */}
        <p className="heading1">{calculationResult.toFixed(2)}</p> {/* Display the calculation result */}
      </center>

      <div className="meter">
        <div className="controls">
          <button id="lefttime" className="left " onClick={handleShiftLeft}>{'<'}</button>
          <button id="down-buttontime" className="decrement down-button1 " onClick={handleDecrement}>-</button>
        </div>
        <div className="digits">
          {value1.map((digit, index) => (
            <span key={index} className={`tab1 ${activeDigit1 === index ? 'active' : ''}`}>
              {renderDigit(digit, index)}
            </span>
          ))}
        </div>
        <div className="controls">
          <button id="up-buttontime" className="increment up-button1 " onClick={handleIncrement}>+</button>
          <button id="shiftrighttime" className="shiftright " onClick={handleShiftRight}>{'>'}</button>
        </div>
      </div>
      <center>
        <p className="bg-warning text-dark startinfusion">
          <span className="bg-success text-white start">Start</span> Start Infusion
        </p>
      </center>
      <center>
        <button className="ok-button" onClick={handleOK}>
          OK
        </button>
      </center>
    </div>
    {/* <button onClick={handleToggle}><BsListUl /></button>
        {toggle && <Sidebar close={() => setToggle(false)} selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} />} */}
    </div>
    </>
  );
};

export default Time;