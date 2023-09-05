import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tabs.css';
import bgwithsyringe from '../../assets/images/REVISED DEVICE with Syringe 0011.jpg';
import display from '../../assets/images/Group 2.png';
import selectType from '../../assets/voice/Page 7/Select type.mp3';
import drugsData from '../../data/drugsData';
import Sidebar from "../sidebar/Sidebar";
import { NextButton } from '../NextButton/nextButton';

const Ward = () => {
    // const [activeTab, setActiveTab] = useState(0);
    // const totalTabs = 3; // Total number of tabs
    // const tabContent = [
  
      
    // ];

    const [activeTab, setActiveTab] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const totalTabs = 3; // Total number of tabs
    const tabContent = [
      "General Ward",
      "Intensive Care Unit",
      "Intermediate Care Unit"
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
          return '/Category/General Ward'; // Redirect to '/Category' for the first tab
        case 1:
          return '/Category/Intensive Care Unit'; // Redirect to '/IntensiveCategory' for the second tab
        case 2:
          return '/Category/Intermediate Care Unit'; // Redirect to '/InterCategory' for the third tab
       
        default:
          return ''; // No redirect for other tabs
      }
    };
    return (
      <div className='container-fluid'>
          <center> <h3 className=" visibility-hidden" style={{color:'transparent'}}  >.</h3></center>
          <center><h4 className="" style={{color:'transparent'}}  id='tooltip'>.</h4> </center>
      <div className="display display1">
         <img src={display}></img>
         <center>  <p className='heading pl-2'>Ward</p></center>
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
          {/* {tabContent.map((content, index) => (
            <div
              key={index}
              className={`tab-pane ${activeTab === index ? 'active' : ''}`}
            >
              {content}
            </div>
          ))} */}
          {drugsData.map((category, index) => (
            <div
            key={index}
            className={`tab-pane ${activeTab === index ? 'active' : ''}`}
          >
          {category.category}
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
        {/* <audio className="audio-element" autoPlay>
            <source src={selectType}></source>
          </audio> */}
      </div>
      <button onClick={handleToggle}>Table Of Content</button>
        {toggle && <Sidebar close={() => setToggle(false)} selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} />}
        <NextButton url={"ChangeInfusionRate"}></NextButton>
      </div>
    );
  };
  

export default Ward;
