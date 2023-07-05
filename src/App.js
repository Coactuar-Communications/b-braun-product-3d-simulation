import "./assets/images/Device.bmp";
import Tabs from "./component/tabs/tabs";
import Rate from "./component/meters/Rate";
import Videoplay from "./component/video/video";
import Login from "./component/login/Login";
import Select from "./component/select/select";
import Meter from "./component/meters/Meter";
import Volume from "./component/meters/Volume";
import Time from "./component/meters/Time";
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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
