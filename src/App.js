import "./assets/images/Device.bmp";
import Tabs from "./component/tabs/tabs";
import Rate from "./component/meters/Rate";

import Login from "./component/login/Login";
import Select from "./component/select/select";
import Meter from "./component/meters/meter";
import Volume from "./component/meters/Volume";
import Time from "./component/meters/Time";
import Category from "./component/tabs/Category";
import Menu from "./component/tabs/Menu";
import General from "./component/tabs/General";
import Overview from "./component/tabs/Overview"; 
import Ward from "./component/tabs/Ward";
import IntensiveCategory from "./component/tabs/IntensiveCategory";
import Intensive from "./component/tabs/Intensive";
import Intermediate from "./component/tabs/Intermediate";
import InfusionCalculator from "./component/meters/InfusionCalculator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InterCategory from "./component/tabs/InterCategory";
import PowerOn from "./component/PowerOn/powerOn";
import ChangeInfusionRate from "./component/ChangeInfusionRate/changeInfusionRate";
import Bolus from "./component/Bolus/bolus";
import InsertSyringe from "./component/InsertSyringe/insertSyringe";
import ChangeSyringe from "./component/ChangeSyringe/changeSyringe";
import Standby from "./component/Standby/standby";
// import Intensive from "./component/tabs/Intensive";
import Shutdown from "./component/Shutdown/shutdown";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/select" element={<Select />} />

        <Route path="/PowerOn" element={<PowerOn />} />
        <Route path="/Meter" element={<Meter />} />
        <Route path="/Rate" element={<Rate />} />
        <Route path="/Volume" element={<Volume />} />
        <Route path="/Time" element={<Time />} />

        <Route path="/Tabs" element={<Tabs />} />
        <Route path="/Category/:categoryName" element={<Category />} />
        <Route path="/IntensiveCategory" element={<IntensiveCategory />} />
        <Route path="/InterCategory" element={<InterCategory />} />



        <Route path="/subcategory/:categoryName/:subcategoryName" element={<General />} />
        <Route path="/Intensive" element={<Intensive />} />
        <Route path="/Intermediate" element={<Intermediate />} />

        <Route path="/Overview/:categoryName/:subcategoryName/:drugName" element={<Overview />} />

        <Route path="/Ward" element={<Ward />} />
        <Route path="/Menu" element={<Menu />} />

        <Route path="/InfusionCalculator" element={<InfusionCalculator />} />

        <Route path="/ChangeInfusionRate" element={<ChangeInfusionRate />} />

        <Route path="/Bolus" element={<Bolus />} />

        <Route path="/InsertSyringe" element={<InsertSyringe />} />

        <Route path="/ChangeSyringe" element={<ChangeSyringe />} />

        <Route path="/Standby" element={<Standby />} />

        <Route path="/Shutdown" element={<Shutdown />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
