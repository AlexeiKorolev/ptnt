import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
      <div className="App">
        <Header />
        
      </div>
    </Router>
  );
}

export default App;