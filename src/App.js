
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
