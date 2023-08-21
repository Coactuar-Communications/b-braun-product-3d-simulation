import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './tabs.css';
import bgwithsyringe from '../../assets/images/REVISED DEVICE with Syringe 0011.jpg';
import display from '../../assets/images/Group 2.png';
import selectType from '../../assets/voice/Page 7/Select type.mp3';
import drugsData from '../../data/drugsData';

const Category = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSubcategoryIndex, setSelectedSubcategoryIndex] = useState(0);
  const totalTabs = 2; // Total number of tabs
  const tabContent = [
    "All Drugs",
    "Favourites",
    "Anticoagulation",
    "Enteral",
    "Others"
  ];

  const { categoryName } = useParams();
  const selectedCategory = drugsData.find(category => category.category === categoryName);

  if (!selectedCategory) {
    return <div>Category not found.</div>;
  }

  const selectedSubcategory = selectedCategory.subcategories[selectedSubcategoryIndex];

  const handleTabChange = (direction) => {
    if (direction === 'up') {
      setActiveTab((prevTab) => (prevTab + 1) % selectedCategory.subcategories.length);
      setSelectedSubcategoryIndex((prevIndex) => (prevIndex + 1) % selectedCategory.subcategories.length);
    } else if (direction === 'down') {
      setActiveTab((prevTab) => (prevTab - 1 + selectedCategory.subcategories.length) % selectedCategory.subcategories.length);
      setSelectedSubcategoryIndex((prevIndex) => (prevIndex - 1 + selectedCategory.subcategories.length) % selectedCategory.subcategories.length);
    }
  };

  const handleNavigate = () => {
    if (selectedSubcategory) {
      // Redirect to the selected subcategory page or perform any action
      // For example: history.push(`/subcategory/${selectedCategory.category}/${selectedSubcategory.name}`);
      return `/subcategory/${selectedCategory.category}/${selectedSubcategory.name}`;
    }
  };

  return (
    <div className='container-fluid'>
        <center> <h3 className=" visibility-hidden" style={{color:'transparent'}}  >Select type of syringe</h3></center>
        <center><h4 className="" style={{color:'transparent'}}  id='tooltip'>Select the correct type of syringe by using the up/down arrows and confirm with OK button</h4> </center>
    <div className="display display1">
       <img src={display}></img>
       <center>  <p className='heading'>Category</p></center>
         <ul className="tab-buttons">
        {[...Array(selectedCategory.subcategories.length)].map((_, index) => (
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

        {selectedCategory.subcategories.map((subcategory, index) => (
          <div>
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? 'active' : ''}`}
          >
            {console.log(subcategory.name)}
            {subcategory.name}
          </div>
          {/* // <li key={subcategory.name}>
          //   <Link to={`/subcategory/${selectedCategory.category}/${subcategory.name}`}>
          //     {subcategory.name}
          //   </Link>
          // </li> */}
          </div>
        ))}
      </div>

      <div className="tab-navigation">
        <button className='down-button' onClick={() => handleTabChange('up')}>Down</button>
        <button className="up-button" onClick={() => handleTabChange('down')}>Up</button>
        <Link to={handleNavigate()}> <button className='ok-button'>Ok</button></Link>
      </div>
      {/* <audio className="audio-element" autoPlay>
          <source src={selectType}></source>
        </audio> */}
    </div>
    </div>
  );
};

export default Category;
