import "./assets/images/Device.bmp";
import Tabs from "./component/tabs/tabs";
import Rate from "./component/meters/Rate";
import Videoplay from "./component/video/video";
import Login from "./component/login/Login";
import Select from "./component/select/select";
import Meter from "./component/meters/meter";
import Volume from "./component/meters/Volume";
import Time from "./component/meters/Time";
import Category from "./component/tabs/Category";
import General from "./component/tabs/General";
import Overview from "./component/tabs/Overview"; 
import Ward from "./component/tabs/Ward";
import InfusionCalculator from "./component/meters/InfusionCalculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/select" element={<Select />} />

        <Route path="/Video" element={<Videoplay />} />
        <Route path="/Meter" element={<Meter />} />
        <Route path="/Rate" element={<Rate />} />
        <Route path="/Volume" element={<Volume />} />
        <Route path="/Time" element={<Time />} />

        <Route path="/Tabs" element={<Tabs />} />
        <Route path="/Category" element={<Category />} />

        <Route path="/General" element={<General />} />

        <Route path="/Overview" element={<Overview />} />

        <Route path="/Ward" element={<Ward />} />

        <Route path="/InfusionCalculator" element={<InfusionCalculator />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
