import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tabs.css';
import display from '../../assets/images/Group 2.png';
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const totalTabs = 5; // Total number of tabs
  const tabContent = [
    "B. Braun OMNIFIX 50ml",
    "B. Braun OPS 50ml",
    "B. Braun Platipak 50ml",
    "Margomed 50ml",
    "#Syringe gauge ops 50ml"
  ];

  const handleTabChange = (direction) => {
    if (direction === 'up') {
      setActiveTab((prevTab) => (prevTab + 1) % totalTabs);
    } else if (direction === 'down') {
      setActiveTab((prevTab) => (prevTab - 1 + totalTabs) % totalTabs);
    }
  };

  return (
    <div className="display">
       <img src={display}></img>
       <center>  <p className='heading'>Select Syringe</p></center>
         <ul className="tab-buttons">
        {[...Array(totalTabs)].map((_, index) => (
          <li
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleTabChange(index)}
          >
            Tab {index + 1}
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabContent.map((content, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? 'active' : ''}`}
          >
            {content}
          </div>
        ))}
      </div>

      <div className="tab-navigation">
        <button onClick={() => handleTabChange('up')}>Down</button>
        <button onClick={() => handleTabChange('down')}>Up</button>
        <button><Link to="/meter">Ok</Link></button>
    
      </div>
    </div>
  );
};

export default Tabs;
