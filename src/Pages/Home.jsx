import React from 'react'
import "./Home.css"
// import HeroAI from "./assets/hero-ai.svg"  

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Automate Your <span className="ai-word">RFP Requests</span> <br /> with Intelligent AI
          </h1>
          <p>
            Save hours by letting our platform analyze RFPs, check your inventory, 
            and generate precise, personalized responses in seconds.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">Watch Demo</button>
          </div>
        </div>
        <div className="hero-image">
          {/* <img src={HeroAI} alt="AI automation illustration" /> */}
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section">
        <h2>Why Automate RFPs with AI?</h2>
        <div className="why-cards">
          <div className="card">
            <h3>Smart Matching</h3>
            <p>
              Our AI scans RFP details and cross-checks them with your product inventory instantly 
              to shortlist exact matches.
            </p>
          </div>
          <div className="card">
            <h3>Time Efficiency</h3>
            <p>
              Reduce the manual effort of reading, comparing, and drafting responses. 
              Let automation do the heavy lifting.
            </p>
          </div>
          <div className="card">
            <h3>Data-Driven Responses</h3>
            <p>
              Generate precise, optimized RFP responses enriched with your past performance data 
              for better conversions.
            </p>
          </div>
        </div>
      </section>

      {/* AI Workflow Section */}
      <section className="workflow-section">
        <h2>How It Works</h2>
        <div className="workflow-steps">
          <div className="step">
            <span className="step-number">1</span>
            <h4>Upload or Connect RFP</h4>
            <p>
              Sync RFPs directly from your email or upload documents seamlessly.
            </p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h4>AI Analyzes Requirements</h4>
            <p>
              The AI parses content, checks your inventory database, and extracts critical insights.
            </p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h4>Get Generated Response</h4>
            <p>
              Get a ready-to-send, editable RFP response instantly — accurate, formatted, and data-backed.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
