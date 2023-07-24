import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { BrowserRouter, Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter basename='/'>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <Routes>
          <Route index element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Navigate to='/' replace={true}/>
        </Routes>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
