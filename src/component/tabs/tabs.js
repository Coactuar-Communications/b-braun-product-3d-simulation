import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tabs.css';
import bgwithsyringe from '../../assets/images/Zoom out with syringe copy.jpg';
// import display from '../../assets/images/Group 2.png';
import selectType from '../../assets/voice/Page 7/Select type.mp3';
import RotateScreen from '../RotateScreen';
import Sidebar from "../sidebar/Sidebar";
import { NextButton } from '../NextButton/nextButton';
import { BsListUl } from 'react-icons/bs';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
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
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };

  return (
    <div className="container-fluid bg-syringe">
    <RotateScreen></RotateScreen>
    <div className='row'>
    <div className='col-sm-2'>
    <button onClick={handleToggle}><BsListUl /></button>
        {toggle && <Sidebar close={() => setToggle(false)} selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} />}
        <NextButton url={"menu2"}></NextButton>
    </div>
    <div className='col-sm-10'>
        <center> <h4 className="text-dark" id="tooltip" >Select type of syringe</h4></center>
        <center><h4 className="text-dark"  style={{fontSize:"2.5vmin"}}>Select the correct type of syringe by using the up/down arrows and confirm with OK button</h4> </center>

</div>
</div>

       
    <div className="display_tabs">
       {/* <img src={display}></img> */}
       <center>  <p className='heading_menu'>Select Syringe</p></center>
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
        <Link to="/Rate"> <button className='ok-button'>Ok</button></Link>
    <Link to="/Menu2" className='menu-button'>Menu</Link>
      </div>
      <audio className="audio-element" autoPlay>
          <source src={selectType}></source>
        </audio>
        
    </div>
   
    </div>
  

  );
};

export default Tabs;
