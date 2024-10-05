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
      <Route path="/index.html" element={<LandingPage />} />
      <Route path="/app" element={<MainPage />} />
    </Routes>
      <div className="App">
        <Header />
        
      </div>
    </Router>
  );
}

export default App;