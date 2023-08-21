import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import './tabs.css';
import bgwithsyringe from '../../assets/images/REVISED DEVICE with Syringe 0011.jpg';
import display from '../../assets/images/Group 2.png';
import selectType from '../../assets/voice/Page 7/Select type.mp3';
import drugsData from '../../data/drugsData';

const General = () => {
    const [activeTab, setActiveTab] = useState(0);
    const totalTabs = 3; // Total number of tabs
    const tabContent = [
   "Heparin",
      "Insulin",
      "Nutricomp Energy"
    ];

    const { categoryName, subcategoryName } = useParams();
  const selectedCategory = drugsData.find(category => category.category === categoryName);

  const [selectedDrugIndex, setSelectedDrugIndex] = useState(0);

  const tabContainerRef = useRef(null);
  const specialTabs = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV'];

  useEffect(() => {
    if (selectedCategory.category == "Intensive Care Unit" || selectedCategory.category == "Intermediate Care Unit") {
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
    }
  }, [activeTab]);

  if (!selectedCategory) {
    return <div>Category not found.</div>;
  }

  const selectedSubcategory = selectedCategory.subcategories.find(
    subcategory => subcategory.name === subcategoryName
  );
  

  if (!selectedSubcategory) {
    return <div>Subcategory not found.</div>;
  }

  const selectedDrug = selectedSubcategory.drugs[selectedDrugIndex];

  console.log(selectedDrug);

    const handleTabChange = (direction) => {
      // if (direction === 'up') {
      //   setActiveTab((prevTab) => (prevTab + 1) % selectedSubcategory.drugs.length);
      // } else if (direction === 'down') {
      //   setActiveTab((prevTab) => (prevTab - 1 + selectedSubcategory.drugs.length) % selectedSubcategory.drugs.length);
      // } else if (action === 'left') {
      //   const currentIndex = specialTabs.indexOf(tabContent[activeTab]);
      //   const newIndex = currentIndex > 0 ? currentIndex - 1 : specialTabs.length - 1;
      //   newActiveTab = tabContent.indexOf(specialTabs[newIndex]);
      // } else if (action === 'right') {
      //   const currentIndex = specialTabs.indexOf(tabContent[activeTab]);
      //   const newIndex = (currentIndex + 1) % specialTabs.length;
      //   newActiveTab = tabContent.indexOf(specialTabs[newIndex]);
      // }

      let newActiveTab;

      if (direction === 'down') {
        newActiveTab = (activeTab - 1 + selectedSubcategory.drugs.length) % selectedSubcategory.drugs.length;
        setSelectedDrugIndex((prevIndex) => (prevIndex - 1 + selectedSubcategory.drugs.length) % selectedSubcategory.drugs.length);
      } else if (direction === 'up') {
        newActiveTab = (activeTab + 1) % selectedSubcategory.drugs.length;
        setSelectedDrugIndex((prevIndex) => (prevIndex + 1) % selectedSubcategory.drugs.length);
      } else if (direction === 'left') {
        const currentIndex = specialTabs.indexOf(selectedSubcategory.drugs[activeTab].name);
        const newIndex = currentIndex > 0 ? currentIndex - 1 : specialTabs.length - 1;
        newActiveTab = selectedSubcategory.drugs.findIndex(drug => drug.name === specialTabs[newIndex]);
        console.log(selectedSubcategory.drugs.indexOf(specialTabs[newIndex]));
      } else if (direction === 'right') {
        const currentIndex = specialTabs.indexOf(selectedSubcategory.drugs[activeTab].name);
        const newIndex = (currentIndex + 1) % specialTabs.length;
        newActiveTab = selectedSubcategory.drugs.findIndex(drug => drug.name === specialTabs[newIndex]);
      }
      setActiveTab(newActiveTab);
    };

    const handleNavigate = () => {
      if (selectedDrug) {
        // Redirect to the selected subcategory page or perform any action
        // For example: history.push(`/subcategory/${selectedCategory.category}/${selectedSubcategory.name}`);
        console.log(`/subcategory/${selectedCategory.category}/${selectedSubcategory.name}/${selectedDrug.name}`);
        return `/Overview/${selectedCategory.category}/${selectedSubcategory.name}/${selectedDrug.name}`;
      }
    };
  
    return (
      <div className='container-fluid'>
          <center> <h3 className=" visibility-hidden" style={{color:'transparent'}}  >Select type of syringe</h3></center>
          <center><h4 className="" style={{color:'transparent'}}  id='tooltip'>Select the correct type of syringe by using the up/down arrows and confirm with OK button</h4> </center>
      <div className="display display1">
         <img src={display}></img>
         <center>  <p className='heading'>{selectedCategory.category}</p></center>
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
  
        {selectedCategory.category == "General Ward" ? <div className="tab-content">
          {console.log("General Ward")}
          {/* {tabContent.map((content, index) => (
            <div
              key={index}
              className={`tab-pane ${activeTab === index ? 'active' : ''}`}
            >
              {content}
            </div>
          ))} */}

          {selectedSubcategory.drugs.map((drug, index) => (
            <div
            key={index}
            className={`tab-pane ${activeTab === index ? 'active' : ''}`}
          >
            {drug.name}
          </div>
          ))}

        </div> : selectedCategory.category == "Intensive Care Unit" ? <div className='tab-content' ref={tabContainerRef}>
        {console.log("Intensive Care Unit")}
  {selectedSubcategory.drugs.slice(activeTab, activeTab + 5).map((content, index) => (
    <div
      key={index + activeTab}
      className={`tab-pane ${index === 0 ? 'active' : ''} ${
        ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV'].includes(content.name) ? 'special-tab' : ''
      }`}
    >
      {content.name}
    </div>
  ))}
</div> : selectedCategory.category == "Intermediate Care Unit" ? <div className='tab-content' ref={tabContainerRef}>
{console.log("Intermediate Care Unit")}
  {selectedSubcategory.drugs.slice(activeTab, activeTab + 5).map((content, index) => (
    <div
      key={index + activeTab}
      className={`tab-pane ${index === 0 ? 'active' : ''} ${
        ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV'].includes(content.name) ? 'special-tab' : ''
      }`}
    >
      {content.name}
    </div>
  ))}
</div> : null}
        
  
        <div className="tab-navigation">
          {selectedCategory.category == "Intensive Care Unit" || selectedCategory.category == "Intermediate Care Unit" ? <button className='left left-shift-button' onClick={() => handleTabChange('left')}>{"<<"}</button> : null}
          <button className='down-button' onClick={() => handleTabChange('up')}>Down</button>
          <button className="up-button" onClick={() => handleTabChange('down')}>Up</button>
          {selectedCategory.category == "Intensive Care Unit" || selectedCategory.category == "Intermediate Care Unit" ? <button className='shiftright right-shift-button' onClick={() => handleTabChange('right')}>{">>"}</button> : null}
          <Link to={handleNavigate()}> <button className='ok-button'>Ok</button></Link>
      
        </div>
        {/* <audio className="audio-element" autoPlay>
            <source src={selectType}></source>
          </audio> */}
      </div>
      </div>
    );
  };
  

export default General;
