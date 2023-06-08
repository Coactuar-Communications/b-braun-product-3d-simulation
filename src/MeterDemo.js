import React, { useState } from 'react';

const MeterDemo = () => {
    const [value, setValue] = useState([0, 0, 0, '.', 0, 0]);
  const [activeDigit, setActiveDigit] = useState(0);

  const handleIncrement = () => {
    const updatedValue = [...value];
    if (activeDigit !== -1) {
      if (activeDigit === 1 || activeDigit === 2) {
        // If the active digit is in the tens or hundreds place
        updatedValue[activeDigit] += 1;
        if (updatedValue[activeDigit] === 10) {
          updatedValue[activeDigit] = 0;
          incrementPreviousDigits(activeDigit - 1, updatedValue);
        }
      } else {
        if (updatedValue[activeDigit] < 9) {
          updatedValue[activeDigit] += 1;
        } else {
          updatedValue[activeDigit] = 0;
          incrementPreviousDigits(activeDigit - 1, updatedValue);
        }
      }
    }
    setValue(updatedValue);
  };

  const incrementPreviousDigits = (index, updatedValue) => {
    if (index < 0) return;
    if (updatedValue[index] < 9) {
      updatedValue[index] += 1;
    } else {
      updatedValue[index] = 0;
      incrementPreviousDigits(index - 1, updatedValue);
    }
  };

  const handleDecrement = () => {
    const updatedValue = [...value];
    if (activeDigit !== -1) {
      if (activeDigit === 1 || activeDigit === 2) {
        // If the active digit is in the tens or hundreds place
        updatedValue[activeDigit] -= 1;
        if (updatedValue[activeDigit] === -1) {
          updatedValue[activeDigit] = 9;
          decrementPreviousDigits(activeDigit - 1, updatedValue);
        }
      } else {
        if (updatedValue[activeDigit] > 0) {
          updatedValue[activeDigit] -= 1;
        } else {
          updatedValue[activeDigit] = 9;
          decrementPreviousDigits(activeDigit - 1, updatedValue);
        }
      }
    }
    setValue(updatedValue);
  };

  const decrementPreviousDigits = (index, updatedValue) => {
    if (index < 0) return;
    if (updatedValue[index] > 0) {
      updatedValue[index] -= 1;
    } else {
      updatedValue[index] = 9;
      decrementPreviousDigits(index - 1, updatedValue);
    }
  };

  const handleShiftLeft = () => {
    const newActiveDigit = activeDigit === 0 ? value.length - 1 : activeDigit - 1;
    setActiveDigit(newActiveDigit);
  };

  const handleShiftRight = () => {
    const newActiveDigit = activeDigit === value.length - 1 ? 0 : activeDigit + 1;
    setActiveDigit(newActiveDigit);
  };

  return (
    <div className="meter">
      <div className="controls">
        <button onClick={handleShiftLeft}>{'<'}</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div className="digits">
        {value.map((digit, index) => (
          <div
            key={index}
            className={`tab ${activeDigit === index ? 'active' : ''}`}
            onClick={() => setActiveDigit(index)}
          >
            {digit}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleShiftRight}>{'>'}</button>
      </div>
    </div>
  );
};
export default MeterDemo;
