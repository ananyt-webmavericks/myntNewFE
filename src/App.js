
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './Pages/Home';
import GetStarted from './Pages/GetStarted';
import OtpVerification from './Pages/OtpVerification';
import AboutYou from './Pages/AboutYou';
import BecomeInvestor from './Pages/BecomeInvestor';
import StartupSectors from './Pages/StartupSectors';
import Dashboard from './Pages/Dashboard';
import DrawerMain from './component/Dashboard/Drawer';
function App() {

  // const location = window.location.pathname;

  return (
    <BrowserRouter>
    <Navbar />
    {/* {location === '/dashboard' && <DrawerMain />} */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/get-started" element={<GetStarted />} />
          <Route exact path="/otp-verification" element={<OtpVerification />} />
          <Route exact path="/about-you" element={<AboutYou />} />
          <Route exact path="/become-investor" element={<BecomeInvestor />} />
          <Route exact path="/startup-sectors" element={<StartupSectors />} />
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
