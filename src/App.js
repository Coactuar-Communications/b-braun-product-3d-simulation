import logo from './logo.svg';
import './App.css';
import './assets/images/Device.bmp';
import display from './assets/images/Group 2.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import Tabs from './tabs';
import Meter from './meter';
import MeterDemo from './MeterDemo';
import ControlPanel from './ControlPanel';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import Meter from './meter';
import {
  useRoutes
} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Tabs />} />
  <Route path="/Meter" element={<Meter />} />
  <Route path="/MeterDemo" element={<MeterDemo />} />
    <Route path="/ControlPanel" element={<ControlPanel />} />
    {/* <Route path="/rate" element={<Rate />} />
    <Route path="/volume" element={<Volume />} /> */}
  </Routes>

  </BrowserRouter>
  );
}

export default App;
