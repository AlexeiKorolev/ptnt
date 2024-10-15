import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
        <img src="https://www.pinclipart.com/picdir/big/186-1865929_mako-shark-clipart-carton-shark-png-download.png" alt="Logo" className="logo" />
        <h1 className="title">Mako Intelligence</h1>
        <button className="get-started-btn">Get Started</button>
    </div>
  );
}

export default LandingPage;