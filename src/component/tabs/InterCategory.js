import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './tabs.css';
import bgwithsyringe from '../../assets/images/REVISED DEVICE with Syringe 0011.jpg';
// import display from '../../assets/images/Group 2.png';
import selectType from '../../assets/voice/Page 7/Select type.mp3';
// import React, { useState, useRef } from 'react';

const InterCategory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const totalTabs = 12;
  const tabContent = [
    "All Drugs",
    "Favourites",
    "Inotropes",
    "IV Sedation",
    "Diuretics",
    "Anti Arryhthmics",
    "Muscle Relaxants",
    "Anti Coagulation",
    "IV Fluids",
    "Analgesics",
    "Enteral",
    "Others"
  ];
  const tabContainerRef = useRef(null);

  useEffect(() => {
    if (tabContainerRef.current) {
      const scrollToButton = tabContainerRef.current.querySelector(
        `li:nth-child(${activeTab + 1})`
      );
      if (scrollToButton) {
        if (activeTab >= 4) {
          scrollToButton.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'center',
          });
        } else {
          scrollToButton.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }
    }
  }, [activeTab]);

  const handleTabChange = (direction) => {
    let newActiveTab;
    if (direction === 'down') {
      newActiveTab = (activeTab - 1 + totalTabs) % totalTabs;
    } else if (direction === 'up') {
      newActiveTab = (activeTab + 1) % totalTabs;
    }
    setActiveTab(newActiveTab);
  };

  // ... (return and rendering)

  return (
    <div className='container-fluid'>
  <center> <h3 className=" visibility-hidden" style={{color:'transparent'}}  >Select type of syringe</h3></center>
        <center><h4 className="" style={{color:'transparent'}}  id='tooltip'>Select the correct type of syringe by using the up/down arrows and confirm with OK button</h4> </center>
      <div className='display display1'>
 {/* <img src={display}></img> */}
       <center>  <p className='heading'>Category</p></center>
        <div className='tab-buttons-container'>
          <ul className='tab-buttons'>
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
        </div>

        <div className='tab-content' ref={tabContainerRef}>
{tabContent.slice(activeTab, activeTab + 5).map((content, index) => (
  <div
    key={index + activeTab}
    className={`tab-pane ${index === 0 ? 'active' : ''}`}
  >
    {content}
  </div>
))}


        </div>


      <div className="tab-navigation">
      <button className='down-button' onClick={() => handleTabChange('up')}>Down</button>
<button className="up-button" onClick={() => handleTabChange('down')}>Up</button>

        <Link to="/Intermediate"> <button className='ok-button'>Ok</button></Link>
    
      </div>
      </div>
    </div>
  );
};

export default InterCategory;


