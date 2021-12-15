import React from 'react';
import './App.css';
import About from './components/About';
import Shop from './components/Shop';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import BreedDetail from './components/BreedDetail';

const Home =() =>{
  return(
    <div>
      <h3>Home</h3>
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:breed/:subBreed/*" element={<BreedDetail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
