import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Fonts/Rotis Sans Serif Std 75 Extra Bold.otf";
import perfusor from "../../assets/images/Perfusor_compact_plus_HighResolutionFile.tif"
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  
from 'mdb-react-ui-kit';
import "./select.css";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
function Select() {
    const [isSubmit, setIsSubmit] = useState(false);


  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmit(true);
   
  };
  return (
<div className="bg-white">
<div className="container ">
        {/* <img src="Rectangle 5.png" alt="" /> */}
      {isSubmit ? (
        // <div className="ui message success">Signed in successfully</div>
        navigate('/Video')
      ) : (
        <pre></pre>
      )}




    </div>
    <div>

    <MDBCard>
      <MDBRow className='g-0 mt-5'>
    
        <MDBCol md='6' className="text-center border-2">
        <h1 className="text-white">Perfusor® compact<sup>plus</sup>

</h1>

        <button className=" btnlogin btn btn-sm btn-light"onClick={handleSubmit}>Select</button>
        </MDBCol>
    
        <MDBCol md='6' className="text-center">
        {/* <MDBCardImage src='B_Braun_logo.png' alt="login form" className='rounded-start w-100 logo'/> */}
    <h1 className="text-white">Infusomat®
 compact<sup>plus</sup> P</h1>
<img src={perfusor}></img>
          <button className=" btnlogin btn btn-sm btn-light">Select</button>
        </MDBCol>
    
      </MDBRow>
    </MDBCard>
    
    </div>
    </div>
  );
}

export default Select;