import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './tabs.css';
import bgwithsyringe from '../../assets/images/Zoom out with syringe copy.jpg';
// import display from '../../assets/images/Group 2.png';
import selectType from '../../assets/voice/Page 7/Select type.mp3';
// import React, { useState, useRef } from 'react';
import { BsListUl } from 'react-icons/bs';

const Intensive = () => {
  const [activeTab, setActiveTab] = useState(0);
  const totalTabs = 35; // Total number of tabs
    const tabContent = [
   "ABC",
   "Alfentanil",
    "Atracurium" ,
    "Clonidine",
    "DEF",
    "Dobutamine" ,
    "Dopamine",
    "Dopexamine",
    "Epinephrine",
    "Fentanyl" ,
    "Furosemide",
    "GHI",
    "Heparin",
   " Hydralazine",
    "Insulin",
   " Isoprenaline",
    "JKL",
    "Ketamine",
   " Lignocaine 1%",
    'Lignocaine 2%',
    "MNO",
    "Midazolam",
    "Midazolam 100 mg/50mls",
    "Milrinone",
    "Milrinone 20mg/50 ml",
   " Morphine",
    'N/Saline',
    "Noradrenaline",
    "Nutricomp Energy",
    "PQRS",
    "Propofol 1%",
    "Remifentanil 100mcg/ml",
    "TUV",
    "Vasopressin",
    'Vecuronium'
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

  const specialTabs = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV'];

  console.log(specialTabs.indexOf(tabContent[activeTab]));

const handleTabChange = (action) => {
  let newActiveTab;

  if (action === 'down') {
    newActiveTab = (activeTab - 1 + totalTabs) % totalTabs;
  } else if (action === 'up') {
    newActiveTab = (activeTab + 1) % totalTabs;
  } else if (action === 'left') {
    const currentIndex = specialTabs.indexOf(tabContent[activeTab]);
    const newIndex = currentIndex > 0 ? currentIndex - 1 : specialTabs.length - 1;
    newActiveTab = tabContent.indexOf(specialTabs[newIndex]);
  } else if (action === 'right') {
    const currentIndex = specialTabs.indexOf(tabContent[activeTab]);
    const newIndex = (currentIndex + 1) % specialTabs.length;
    newActiveTab = tabContent.indexOf(specialTabs[newIndex]);
  }

  setActiveTab(newActiveTab);
};

  

  // ... (return and rendering)

  return (
    <div className="container-fluid bg-syringe">
  <center> <h3 className=" visibility-hidden" style={{color:'transparent'}}  >Select type of syringe</h3></center>
        <center><h4 className="" style={{color:'transparent'}}  id='tooltip'>Select the correct type of syringe by using the up/down arrows and confirm with OK button</h4> </center>
      <div className='display display1'>
 {/* <img src={display}></img> */}
       <center>  <p className='heading'>Intensive Care Unit</p></center>
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
      className={`tab-pane ${index === 0 ? 'active' : ''} ${
        ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV'].includes(content) ? 'special-tab' : ''
      }`}
    >
      {content}
    </div>
  ))}
</div>


<div className='tab-navigation'>
  <button className='left left-shift-button' onClick={() => handleTabChange('left')}>{"<<"}</button>
  <button className='down-button' onClick={() => handleTabChange('up')}>Down</button>
  <button className='up-button' onClick={() => handleTabChange('down')}>Up</button>
  <button className='shiftright right-shift-button' onClick={() => handleTabChange('right')}>{">>"}</button>
  <Link to="/Intensive"> <button className='ok-button'>Ok</button></Link>
</div>

      </div>
    </div>
  );
};

export default Intensive;


