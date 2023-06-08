import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import display from './assets/images/Group 2.png';
// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const totalTabs = 7; // Total number of tabs
//   const tabContent1 = [
//     "_",
//     "_",
//     "_",
//     "_",
//     ".",
//     "_",
//     "_"
//   ];

//   const handleTabChange = (direction) => {
//     if (direction === 'up') {
//       setActiveTab((prevTab) => (prevTab + 1) % totalTabs);
//     } else if (direction === 'down') {
//       setActiveTab((prevTab) => (prevTab - 1 + totalTabs) % totalTabs);
//     }
//   };

//   return (
//     <div className="display">
//        <img src={display}></img>
//        <center>  <p className='heading'>Rate</p></center>
//        <center>  <p className='heading1'>ml/h</p></center>
//          <ul className="tab-buttons">
//         {[...Array(totalTabs)].map((_, index) => (
//           <li
//             key={index}
//             className={activeTab === index ? 'active' : ''}
//             onClick={() => handleTabChange(index)}
//           >
//             Tab {index + 1}
//           </li>
//         ))}
//       </ul>

//       <div className="tab-content1 row-view">
        
//         {tabContent1.map((content, index) => (
//           <div
//             key={index}
//             className={`tab-pane1 ${activeTab === index ? 'active' : ''}`}
//           >
//             {content}
//           </div>
//         ))}
//       </div>

//       <div className="tab-navigation">
        
//         <button onClick={() => handleTabChange('down')}>Left</button> 
//         <button onClick={() => handleTabChange('up')}>Right</button>
//       </div>
//     </div>
//   );
// };

// export default Tabs;
const Tabs = () => {
  const [value, setValue] = useState([0, 0, 0, '.', 0, 0]);
  const [activeDigit, setActiveDigit] = useState(0);

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

  const handleShiftLeft = () => {
    const newActiveDigit = activeDigit === 0 ? value.length - 1 : activeDigit - 1;
    setActiveDigit(newActiveDigit);
  };

  const handleShiftRight = () => {
    const newActiveDigit = activeDigit === value.length - 1 ? 0 : activeDigit + 1;
    setActiveDigit(newActiveDigit);
  };

  return (
    <div className="display">     
      <img src={display}></img>
      <center>  <p className='heading2'>Rate</p></center>
        <center>  <p className='heading1'>ml/h</p></center>
    <div className="meter">
       
      <div className="controls">
     

        <button className='left' onClick={handleShiftLeft}>{'<'}</button>
        <button className='decrement' onClick={handleDecrement}>-</button>
      </div>
      <div className="digits">
        
        {value.map((digit, index) => (
          <span
          key={index}
          className={`tab ${activeDigit === index ? 'active' : ''}`}
          onClick={() => setActiveDigit(index)}
        >
          {digit}
          </span>
        ))}
      </div>
      <div className="controls">
        <button className="increment" onClick={handleIncrement}>+</button>
        <button className="shiftright" onClick={handleShiftRight}>{'>'}</button>
      </div>
    </div>
    </div>
  );
};


export default Tabs;