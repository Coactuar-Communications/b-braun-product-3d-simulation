import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './meter.css';
import display from '../../assets/images/Group 2.png';
import startInfusion from '../../assets/voice/Page 8/Press okay Button.mp3';

const Meter = () => {
  const location = useLocation();
  const selectedNumber = location.state?.selectedNumber;
  const selectedNumber1 = location.state?.selectedNumber1;
  const selectedNumber2 = location.state?.selectedNumber2;

  const history = useNavigate();

  const [activeTab, setActiveTab] = useState(0);
  const totalMeter = 3; // Total number of Meter
  const tabContent = [
    { label: <span style={{ wordSpacing: '24px' }}>Rate {selectedNumber !== undefined ? selectedNumber : ''}ml/h</span>, value: selectedNumber !== 0 ? selectedNumber : '', page: '/Rate' },
    { label: <span style={{ wordSpacing: '24px' }}>Volume {selectedNumber2 !== undefined ? selectedNumber2 : ''}ml</span>, value: selectedNumber2 !== 0 ? selectedNumber2 : '', page: '/Volume' },
    // { label: 'Volume' + selectedNumber2 + ' ml', value: selectedNumber2, page: '/Volume' },
    { label: <span style={{ wordSpacing: '24px' }}>Time {selectedNumber1 !== undefined ? selectedNumber1 : ''}h:mm</span>, value: selectedNumber1 !== 0 ? selectedNumber1 : '', page: '/Time' },
    // { label: 'Time' + selectedNumber1 + ' h:min', value: selectedNumber1, page: '/Time' },
  ];

  const handleTabChange = (direction) => {
    if (direction === 'up') {
      setActiveTab((prevTab) => (prevTab + 1) % totalMeter);
    } else if (direction === 'down') {
      setActiveTab((prevTab) => (prevTab - 1 + totalMeter) % totalMeter);
    }
  };

  const handleOK = () => {
    const page = tabContent[activeTab].page;
    // Update the URL with the active tab information
    window.history.pushState({ activeTab }, '', page);
    // Navigate to the selected page
    // You can replace this line with the appropriate navigation logic in your application
    console.log(`Navigating to ${page}`);
  };

  const handleGoBack = () => {
    // Go back to the previous page
    history(-1);
  };

  useEffect(() => {
    // Update the active tab based on the URL when the component mounts
    const activeTabFromURL = tabContent.findIndex(
      (tab) => tab.page === window.location.pathname
    );
    if (activeTabFromURL !== -1) {
      setActiveTab(activeTabFromURL);
    }
  }, []);

  useEffect(() => {
    // Update the URL with the active tab information when it changes
    const handlePopState = (event) => {
      const activeTabFromURL = event.state?.activeTab;
      if (activeTabFromURL !== undefined) {
        setActiveTab(activeTabFromURL);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <>
     <center> <h3 className="text-dark" id='tooltip'>Press the start button to start the infusion</h3></center>
        <center><h4 className="text-dark" id='tooltip'>Optional Setting - Press OK button to enter a volume or time preselection</h4> </center>
    <div className="display display3">
      <img src={display} alt="Display" />
      <center>
        <p className="heading">Overview</p>
      </center>
      <ul className="tab-buttons">
        {tabContent.map((tab, index) => (
          <li
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
            {tab.value !== null && (
              <span className="selected-number">{tab.value} ml</span>
            )}
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabContent.map((content, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? 'active' : ''}`}
          >
            {content.label}
          </div>
        ))}
      </div>

      <div className="tab-navigation">
        <button className="down-button" onClick={() => handleTabChange('up')}>
          Down
        </button>
        <button className="up-button" onClick={() => handleTabChange('down')}>
          Up
        </button>
        <Link to={tabContent[activeTab].page}>
          <button className="ok-button" onClick={handleOK}>
            OK
          </button>
        </Link>
        <button className="back-button" onClick={handleGoBack}>
          Back
        </button>
        <audio className="audio-element" autoPlay>
          <source src={startInfusion}></source>
        </audio>
      </div>
    </div>
    </>
  );
};

export default Meter;
