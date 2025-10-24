import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <div className="hero">
        <h1>Welcome to Plant Store</h1>
        <p>Your one-stop shop for beautiful houseplants.</p>
        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
