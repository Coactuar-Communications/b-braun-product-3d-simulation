import "./assets/images/Device.bmp";
import Tabs from "./component/tabs/tabs";
import Meter from "./component/meters/meter";
import Videoplay from "./component/video/video";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Videoplay />} />
        <Route path="/Meter" element={<Meter />} />
        <Route path="/Tabs" element={<Tabs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
