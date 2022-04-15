import './App.css';
import { Routes, Route } from "react-router-dom";

//Import pages
import HomePage from './pages/HomePage';
import ZipCode from './pages/ZipCode';
import Variation from './pages/Variation';
import Agree from './pages/Agree';
import Userdata from './pages/UserData';
import Calender from './pages/Calender';
import Confirm from './pages/Confirm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/zipcode" element={<ZipCode />} />
        <Route path="/varition" element={<Variation />} />
        <Route path="/agree" element={<Agree />} />
        <Route path="/userdata" element={<Userdata />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </div>
  );
}

export default App;
