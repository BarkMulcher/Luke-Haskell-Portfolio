import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
