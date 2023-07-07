import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tabs.css';
import bgwithsyringe from '../../assets/images/REVISED DEVICE with Syringe 0011.jpg';
import display from '../../assets/images/Group 2.png';
import selectType from '../../assets/voice/Page 7/Select type.mp3';

const Overview = () => {
  const [activeTab, setActiveTab] = useState(0);
  const totalTabs = 4; // Total number of tabs
  const tabContent = [
    "General Ward",
    "Standard Patient Profile",
    "Insulin",
    "2000 IU / 40.00ml",

  ];

  const handleTabChange = (direction) => {
    if (direction === 'up') {
      setActiveTab((prevTab) => (prevTab + 1) % totalTabs);
    } else if (direction === 'down') {
      setActiveTab((prevTab) => (prevTab - 1 + totalTabs) % totalTabs);
    }
  };

  return (
    <div className='container-fluid'>
         <center> <h3 className=" visibility-hidden" style={{color:'transparent'}}  >Select type of syringe</h3></center>
          <center><h4 className="" style={{color:'transparent'}}  id='tooltip'>Select the correct type of syringe by using the up/down arrows and confirm with OK button</h4> </center>
    <div className="display display1">
       <img src={display}></img>
       <center>  <p className='heading'>Overview</p></center>
         <ul className="tab-buttons">
        {[...Array(totalTabs)].map((_, index) => (
          <li
            key={index}
            // className={activeTab === index ? 'active' : ''}
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
            className="tab-pane"
          >
            {content}
          </div>
        ))}
      </div>

      <div className="tab-navigation">
        <button className='down-button' onClick={() => handleTabChange('up')}>Down</button>
        <button className="up-button" onClick={() => handleTabChange('down')}>Up</button>
        <Link to="/Rate"> <button className='ok-button'>Ok</button></Link>
        <center>
        <p className="bg-warning text-dark startinfusion">
          <span className="bg-light text-success start  border-success"> Ok </span> Confirm
        </p>
      </center>
      </div>
      {/* <audio className="audio-element" autoPlay>
          <source src={selectType}></source>
        </audio> */}
    </div>
    </div>
  );
};

export default Overview;
