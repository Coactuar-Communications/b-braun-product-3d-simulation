import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import './meter.css';
import display from '../../assets/images/Revised Screen with buttons.png';

const Time = () => {
  const [value1, setValue1] = useState([0, 0, 'h', 0,0,'min']);
  const [activeDigit1, setActiveDigit1] = useState(3);
  const [selectedNumber1, setSelectedNumber1] = useState('');

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

  return (
    <div className="display">
      <img src={display} alt="Display" />

      <center>
        <p className="heading2">Time</p>
      </center>
      <center>
        <p className='heading11'>{selectedNumber1}</p>
        <p className="heading1">ml/h</p>
      </center>

      <div className="meter">
        <div className="controls">
          <button className="left" onClick={handleShiftLeft}>{'<'}</button>
          <button className="decrement down-button1" onClick={handleDecrement}>-</button>
        </div>
        <div className="digits">
          {value1.map((digit, index) => (
            <span key={index} className={`tab1 ${activeDigit1 === index ? 'active' : ''}`}>
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
        <button className="ok-button" onClick={handleOK}>
          OK
        </button>
      </center>
    </div>
  );
};

export default Time;