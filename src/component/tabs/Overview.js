import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './tabs.css';
import bgwithsyringe from '../../assets/images/Zoom out with syringe copy.jpg';
// import display from '../../assets/images/Group 2.png';
import selectType from '../../assets/voice/Page 7/Select type.mp3';
import drugsData from '../../data/drugsData';
import RotateScreen from '../RotateScreen';
import Sidebar from '../sidebar/Sidebar';
import { BsListUl } from 'react-icons/bs';
import { NextButton } from '../NextButton/nextButton';
const Overview = () => {
  const [activeTab, setActiveTab] = useState(0);
  const totalTabs = 4; // Total number of tabs
  const [toggle, setToggle] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const { categoryName, subcategoryName, drugName } = useParams();
  const selectedCategory = drugsData.find(category => category.category === categoryName);

  if (!selectedCategory) {
    return <div>Category not found.</div>;
  }

  const selectedSubcategory = selectedCategory.subcategories.find(subcategory => subcategory.name === subcategoryName);

  if (!selectedSubcategory) {
    return <div>Subcategory not found.</div>;
  }

  const selectedDrug = selectedSubcategory.drugs.find(drug => drug.name === drugName);

  if (!selectedDrug) {
    return <div>Drug not found.</div>;
  }

  console.log(selectedCategory.category);
  console.log(selectedDrug.name);
  console.log(selectedDrug.mlValue);
  console.log(selectedDrug.iuValue);

  const tabContent = [
    selectedCategory.category,
    "Standard Patient Profile",
    selectedDrug.name,
    selectedDrug.mlValue == '' ? `${selectedDrug.iuValue}` : `${selectedDrug.iuValue} IU / ${selectedDrug.mlValue} ml`,
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
    <>
      <div className="container-fluid bg-syringe">
         <RotateScreen></RotateScreen>
    <div className='row'>
    <div className='col-sm-2'>
    <button onClick={handleToggle}><BsListUl /></button>
        {toggle && <Sidebar close={() => setToggle(false)} selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} />}
        <NextButton url={"category"}></NextButton>
    </div>
    <div className='col-sm-10'>
       {/* <center> <h3 className=" visibility-hidden" style={{color:'transparent'}}  >Select type of syringe</h3></center>
          <center><h4 className="" style={{color:'transparent'}}  id='tooltip'>Select the correct type of syringe by using the up/down arrows and confirm with OK button</h4> </center> */}
          </div></div>
        {toggle && (
          <Sidebar
            close={() => setToggle(false)}
            selectedEntry={selectedEntry}
            setSelectedEntry={setSelectedEntry}
          />
        )}
    <div className="display_menu">
       {/* <img src={display}></img> */}
       <center>  <p className='heading_menu'>Overview</p></center>
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
        <Link to="/Rate"> <button className='ok-button ok-overv' >Ok</button></Link>
        
      </div>
      <center>
        <p className="bg-warning text-dark startinfusion">
          <span className="bg-light text-success start  border-success" style={{fontSize:"2vmin",
      padding:"3px 2px 3px 2px", border:"0px"}}> Ok </span> Confirm
        </p>
      </center>
      {/* <audio className="audio-element" autoPlay>
          <source src={selectType}></source>
        </audio> */}
    </div>
   
    {/* <button onClick={handleToggle}><BsListUl /></button>
        {toggle && <Sidebar close={() => setToggle(false)} selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} />} */}
</div>

</>
  );
};

export default Overview;
