import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tabs.css';
import bgwithsyringe from '../../assets/images/Zoom out with syringe copy.jpg';
// import display from '../../assets/images/Group 2.png';
import selectSetting from '../../assets/voice/Page 9/Select setting and confirm.mp3';
import Sidebar from "../sidebar/Sidebar";
import { NextButton } from '../NextButton/nextButton';
import RotateScreen from '../RotateScreen';
import './mobile.css';
import { BsListUl } from 'react-icons/bs';

const Menu = ({ showDrugDatabaseText }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const totalTabs = 5; // Total number of tabs
  const tabContent = [
    "Rate, Volume & Time",
    "Drug",
    "Dose calculation",
    "Reset Therapy",
    "Settings..."
  ];

  const handleTabChange = (direction) => {
    if (direction === 'up') {
      setActiveTab((prevTab) => (prevTab + 1) % totalTabs);
    } else if (direction === 'down') {
      setActiveTab((prevTab) => (prevTab - 1 + totalTabs) % totalTabs);
    }
  };
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };
  const getLinkDestination = () => {
    switch (activeTab) {
      case 0:
        return '../meter'; // Redirect to '../meter' for the first tab
      case 1:
        return '../ward'; // Redirect to '../drug' for the second tab
      case 2:
        return '../dose'; // Redirect to '../dose' for the third tab
      // Add more cases for other tabs if needed
      default:
        return ''; // No redirect for other tabs
    }
  };

  return (
    <div className="container-fluid bg-syringe">
    <RotateScreen></RotateScreen>
    <div className='row'>
    <div className='col-sm-3'>
    <button onClick={handleToggle}><BsListUl /></button>
        {toggle && <Sidebar close={() => setToggle(false)} selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} />}
        <NextButton url={"ward"}></NextButton>
    </div>
    <div className='col-sm-9'>
    <center>
      <h4 className="visibility-hidden" >Select setting and confirm with OK</h4>

      </center>
      </div></div>
      {/* <center>
        <h4 className="" style={{ color: 'transparent' }} id='tooltip'>Select the correct type of syringe by using the up/down arrows and confirm with OK button</h4>
      </center> */}
      <div className="display_menu">
        {/* <img src={display} alt="Display" /> */}
        <center>
          <p className='heading_menu'>Main Menu</p>
        </center>
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
          <button className='down-button' onClick={() => handleTabChange('up')}>Down</button>
          <button className="up-button" onClick={() => handleTabChange('down')}>Up</button>
          <Link to={getLinkDestination()}>
            <button className='ok-button'>Ok</button>
          </Link>
        </div>
      </div>
      <audio className="audio-element" autoPlay>
          <source src={selectSetting}></source>
        </audio>
    
    </div>
  );
};

export default Menu;
