// pages/index.js
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import DashboardData from '../data/DashboardData';
import styles from '../styles/dashboard.module.css';

export default function Dashboard() {
  // State to control sidebar visibility
  const [isSidebarHidden, setSidebarHidden] = useState(false);

  // Toggle function to show/hide the sidebar
  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar component with toggle functionality */}
      <Sidebar toggleSidebar={toggleSidebar} isSidebarHidden={isSidebarHidden} />
      
      {/* Main content area for the dashboard */}
      <div className={`${styles.mainContent} ${isSidebarHidden ? styles.expanded : ''}`}>
        <h2>Welcome to PhishGuard Dashboard</h2>
        
        {/* Grid container to organize the cards */}
        <div className={styles.gridContainer}>
          
          {/* Card: Online Users */}
          <div className={styles.card}>
            <h3>Online Users</h3>
            <p>{DashboardData.onlineUsers} active users</p>
          </div>
          
          {/* Card: Phishing Reports with dynamic percentage change indicator */}
          <div className={styles.card}>
            <h3>Phishing Reports</h3>
            <p>{DashboardData.phishingReports.total} reports this week 
              <span className={DashboardData.phishingReports.change < 0 ? styles.decrease : styles.increase}>
                {DashboardData.phishingReports.change}%
              </span>
            </p>
          </div>
          
          {/* Card: Bar chart showing user engagement by device */}
          <div className={styles.card}>
            <h3>User Engagement by Device</h3>
            <BarChart data={DashboardData.userDevices} />
          </div>
          
          {/* Card: Line chart for monthly visitors data */}
          <div className={styles.card}>
            <h3>Visitors</h3>
            <LineChart data={DashboardData.visitors} />
          </div>
          
          {/* Card: List of referral sources */}
          <div className={styles.card}>
            <h3>Referral Sources</h3>
            <ul>
              {DashboardData.referrals.map((referral, index) => (
                <li key={index}>{referral.source}: {referral.users}</li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}
