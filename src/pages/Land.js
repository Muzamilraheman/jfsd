import React from "react";
import Banner from "../components/Banner";
import '../App.css';


const Land =()=>{
    return (
      <div className="landing-page">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero-section">
          <h1>Welcome to Our Online Banking</h1>
          <p>Manage your finances with ease and security.</p>
          <a href="/login">Log In</a>
          <a href="/register">Sign Up</a>
        </section>
        <section className="features-section">
          <div className="feature">
            <img src="feature1.jpg" alt="Feature 1" />
            <h2>Secure Transactions</h2>
            <p>Your financial data is safe and secure.</p>
          </div>
          <div className="feature">
            <img src="feature2.jpg" alt="Feature 2" />
            <h2>24/7 Customer Support</h2>
            <p>We're here to assist you round the clock.</p>
          </div>
          <div className="feature">
            <img src="feature3.jpg" alt="Feature 3" />
            <h2>Mobile Banking</h2>
            <p>Access your account on the go with our mobile app.</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Online Banking. All rights reserved.</p>
      </footer>
    </div>
    );
};

export default Land;