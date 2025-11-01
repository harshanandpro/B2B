import React, { useState } from 'react'
import "./Dashboard.css"

const Dashboard = () => {
  // Dummy data
  const stats = {
    totalRFPs: 24,
    matched: 18,
    applied: 12,
    success: 8
  }

  const recentMatches = [
    {
      id: 1,
      rfpTitle: "Office Furniture Supply Contract",
      company: "TechCorp Ltd",
      matchedProducts: ["Executive Desk", "Ergonomic Chair", "Filing Cabinet"],
      matchScore: 95,
      status: "Applied",
      date: "2025-10-30",
      value: "$45,000"
    },
    {
      id: 2,
      rfpTitle: "IT Equipment Procurement",
      company: "Global Solutions Inc",
      matchedProducts: ["Laptop Dell XPS", "Network Router", "UPS System"],
      matchScore: 88,
      status: "Matched",
      date: "2025-10-29",
      value: "$82,000"
    },
    {
      id: 3,
      rfpTitle: "Industrial Safety Equipment",
      company: "Manufacturing Co",
      matchedProducts: ["Safety Helmet", "Protective Gloves", "Safety Boots"],
      matchScore: 92,
      status: "Applied",
      date: "2025-10-28",
      value: "$28,500"
    },
    {
      id: 4,
      rfpTitle: "Medical Supplies Request",
      company: "HealthCare Systems",
      matchedProducts: ["Surgical Masks", "Hand Sanitizer", "PPE Kits"],
      matchScore: 78,
      status: "Won",
      date: "2025-10-25",
      value: "$65,000"
    }
  ]

  const inventoryHighlights = [
    { name: "Executive Desk", stock: 45, category: "Furniture", demand: "High" },
    { name: "Laptop Dell XPS", stock: 120, category: "Electronics", demand: "High" },
    { name: "Safety Helmet", stock: 200, category: "Safety", demand: "Medium" },
    { name: "Ergonomic Chair", stock: 80, category: "Furniture", demand: "High" },
    { name: "Network Router", stock: 55, category: "Electronics", demand: "Medium" }
  ]

  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h1>RFP Automation Dashboard</h1>
        <p>AI-powered matching and response system</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-info">
            <h3>{stats.totalRFPs}</h3>
            <p>Total RFPs Scanned</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✓</div>
          <div className="stat-info">
            <h3>{stats.matched}</h3>
            <p>Inventory Matched</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🚀</div>
          <div className="stat-info">
            <h3>{stats.applied}</h3>
            <p>Applications Sent</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-info">
            <h3>{stats.success}</h3>
            <p>Contracts Won</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="dashboard-tabs">
        <button 
          className={activeTab === 'overview' ? 'tab-active' : ''} 
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'inventory' ? 'tab-active' : ''} 
          onClick={() => setActiveTab('inventory')}
        >
          Inventory
        </button>
      </div>

      {/* Content Area */}
      {activeTab === 'overview' && (
        <>
          {/* Recent Matches Section */}
          <section className="matches-section">
            <h2>Recent RFP Matches</h2>
            <div className="matches-list">
              {recentMatches.map(match => (
                <div key={match.id} className="match-card">
                  <div className="match-header">
                    <div>
                      <h3>{match.rfpTitle}</h3>
                      <p className="company-name">{match.company}</p>
                    </div>
                    <span className={`status-badge status-${match.status.toLowerCase()}`}>
                      {match.status}
                    </span>
                  </div>
                  
                  <div className="match-details">
                    <div className="detail-item">
                      <span className="label">Match Score:</span>
                      <div className="score-bar">
                        <div 
                          className="score-fill" 
                          style={{width: `${match.matchScore}%`}}
                        ></div>
                        <span className="score-text">{match.matchScore}%</span>
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <span className="label">Matched Products:</span>
                      <div className="product-tags">
                        {match.matchedProducts.map((product, idx) => (
                          <span key={idx} className="product-tag">{product}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="match-footer">
                      <span className="date">📅 {match.date}</span>
                      <span className="value">💰 {match.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {activeTab === 'inventory' && (
        <section className="inventory-section">
          <h2>High-Demand Inventory Items</h2>
          <div className="inventory-table-container">
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Stock</th>
                  <th>Demand</th>
                </tr>
              </thead>
              <tbody>
                {inventoryHighlights.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td>
                      <span className="category-badge">{item.category}</span>
                    </td>
                    <td>{item.stock} units</td>
                    <td>
                      <span className={`demand-badge demand-${item.demand.toLowerCase()}`}>
                        {item.demand}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  )
}

export default Dashboard
