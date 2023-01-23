
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './Pages/Home';
import GetStarted from './Pages/GetStarted';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/get-started" element={<GetStarted />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
