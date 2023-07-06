import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import './meter.css';
import display from '../../assets/images/Revised Screen with buttons.png';

const Rate = () => {
  const [value2, setValue2] = useState([0, 0, 0, 0, '.', 0, 0]);
  const [activeDigit2, setActiveDigit2] = useState(3);
  const [selectedNumber2, setSelectedNumber2] = useState('');
  const [calculationResult, setCalculationResult] = useState(''); // New state variable for the calculation result
  const location = useLocation();
  const navigate = useNavigate ();
  const history = useNavigate();
  const handleGoBack = () => {
    // Go back to the previous page
    history(-1);
  };
  useEffect(() => {
    const number = parseFloat(value2.join(''));
    setSelectedNumber2(number);
  }, [value2]);

  const handleIncrement = () => {
    const updatedvalue2 = [...value2];
    if (activeDigit2 !== -1) {
      if (updatedvalue2[activeDigit2] < 9) {
        updatedvalue2[activeDigit2] += 1;
      } else {
        updatedvalue2[activeDigit2] = 0;
        let previousDigit = activeDigit2 - 1;
        while (previousDigit >= 0 && updatedvalue2[previousDigit] === 9) {
          updatedvalue2[previousDigit] = 0;
          previousDigit--;
        }
        if (previousDigit >= 0) {
          updatedvalue2[previousDigit] += 1;
        }
      }
    }
    setValue2(updatedvalue2);
    calculateResult();
  };

  const handleDecrement = () => {
    const updatedvalue2 = [...value2];
    if (activeDigit2 !== -1) {
      if (updatedvalue2[activeDigit2] > 0) {
        updatedvalue2[activeDigit2] -= 1;
      } else {
        updatedvalue2[activeDigit2] = 9;
        let previousDigit = activeDigit2 - 1;
        while (previousDigit >= 0 && updatedvalue2[previousDigit] === 0) {
          updatedvalue2[previousDigit] = 9;
          previousDigit--;
        }
        if (previousDigit >= 0) {
          updatedvalue2[previousDigit] -= 1;
        }
      }
    }
    setValue2(updatedvalue2);
    calculateResult();
  };

  const handleShiftLeft = () => {
    const newactiveDigit2 = activeDigit2 === 0 ? value2.length - 1 : activeDigit2 - 1;
    setActiveDigit2(newactiveDigit2);
  };

  const handleShiftRight = () => {
    const newactiveDigit2 = activeDigit2 === value2.length - 1 ? 0 : activeDigit2 + 1;
    setActiveDigit2(newactiveDigit2);
  };

  const handleOK = () => {
    localStorage.setItem("volume", parseFloat(value2.join('')));
    // Redirect to Meter page and pass selectedNumber state
    navigate('/Meter', { state: { selectedNumber2: parseFloat(value2.join('')) } });
  };
  const renderDigit = (digit, index) => {
    if (digit === 0 && index !== activeDigit2) {
      return <div className={`tab ${activeDigit2 === index ? 'active' : ''}`}>-</div>;
    }
    return (
      <div
        className={`tab ${activeDigit2 === index ? 'active' : ''}`}
        onClick={() => setActiveDigit2(index)}
      >
        {digit}
      </div>
    );
  };

  const calculateResult = () => {
    const rate = localStorage.getItem("rate");; // Placeholder for the volume value (replace with actual volume)
    const volume = parseFloat(value2.join('')) + 1; // Get the rate from the user-selected value
    console.log("Volume: " + volume)
    console.log("Rate: " + rate)
    const result = volume / rate;
    const timeResult = formatTime(result);
    console.log(result);
    setCalculationResult(timeResult);
  };

  const formatTime = (timeInHours) => {
    const hours = Math.floor(timeInHours);
    const minutes = Math.round((timeInHours - hours) * 60);
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} h:min`;
  };

  return (
    <div className="display displayVol">
      <img src={display} alt="Display" />

      <center>
        <p className="heading2">Volume</p>
      </center>
      <center>
        <p className='heading11'>{selectedNumber2}</p>
        {/* <p className="heading1"></p></p>ml</p> */}
        <p className="heading1">{calculationResult}</p> {/* Display the calculation result */}
      </center>
      <div className="meter">
        <div className="controls">
          <button className="left" onClick={handleShiftLeft}>{'<'}</button>
          <button className="decrement down-button1" onClick={handleDecrement}>-</button>
        </div>
        <div className="digits">
          {value2.map((digit, index) => (
            <span key={index} className={`tab ${activeDigit2 === index ? 'active' : ''}`}>
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
        <button className="back-button" onClick={handleGoBack}>
          Back
        </button>
      </center>
    </div>
  );
};

export default Rate;