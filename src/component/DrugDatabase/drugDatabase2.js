import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgwithsyringe from '../../assets/images/Zoom out with syringe copy.jpg';
// import display from '../../assets/images/Group 2.png';
import selectSetting from '../../assets/voice/Page 9/Select setting and confirm.mp3';
import Sidebar from "../sidebar/Sidebar";
import { NextButton } from '../NextButton/nextButton';
import RotateScreen from '../RotateScreen';
import './drugDatabase2.css';
import { BsListUl } from 'react-icons/bs';
import selectDrugDatabaseAudio from '../../assets/voice/Page 10/Select drug database mix.mp3';

const DrugDatabase2 = () => {
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
    <div className='col-sm-2'>
    <button onClick={handleToggle}><BsListUl /></button>
        {toggle && <Sidebar close={() => setToggle(false)} selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} />}
        <NextButton url={"ward"}></NextButton>
    </div>
    <div className='col-sm-10'>
    <center>
      <h3 className="visibility-hidden" id="tooltip1">Select Drug Database in the Main Menu</h3>

      </center>
      <center>
        <h6 className="h4" id='tooltip'>Subsequently select the drug and confirm with OK button</h6>
      </center>
    </div>
    </div>
   
      
    
      <div className="display_ddb2">
        {/* <img src={display} alt="Display" /> */}
        <center>
          <p className='heading_ddb2'>Main Menu</p>
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
          <source src={selectDrugDatabaseAudio}></source>
        </audio>
      {/* <button onClick={handleToggle}><BsListUl /></button>
        {toggle && <Sidebar close={() => setToggle(false)} selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} />}
        <NextButton url={"ward"}></NextButton> */}
    </div>
  );
};

export default DrugDatabase2;
