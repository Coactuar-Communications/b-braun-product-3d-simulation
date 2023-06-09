import "./assets/images/Device.bmp";
import Tabs from "./component/tabs/tabs";
import Meter from "./component/meters/meter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tabs />} />
        <Route path="/Meter" element={<Meter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
