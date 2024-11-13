// pages/index.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import DashboardData from '../data/DashboardData';
import styles from '../styles/dashboard.module.css';

export default function Dashboard() {
  const [isSidebarHidden, setSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar toggleSidebar={toggleSidebar} isSidebarHidden={isSidebarHidden} />
      <div className={`${styles.mainContent} ${isSidebarHidden ? styles.expanded : ''}`}>
        <h2>Welcome to PhishGuard Dashboard</h2>
        
        <div className={styles.gridContainer}>
          <div className={styles.card}>
            <h3>Phishing Detection Success Rate</h3>
            <p>{DashboardData.phishingDetectionSuccessRate}%</p>
          </div>

          <div className={styles.card}>
            <h3>Recent Training Activity</h3>
            <p>Scenarios Completed This Week: {DashboardData.recentTrainingActivity.scenariosCompletedThisWeek}</p>
            <p>Active Trainees: {DashboardData.recentTrainingActivity.activeTrainees}</p>
          </div>

          <div className={styles.card}>
            <h3>Top Phishing Scenarios Missed</h3>
            <ul>
              {DashboardData.topMissedScenarios.map((scenario, index) => (
                <li key={index}>
                  {scenario.scenarioName}: {scenario.incorrectPercentage}% incorrect
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h3>User Engagement by Device</h3>
            <BarChart data={DashboardData.userEngagementByDevice} />
          </div>

          <div className={styles.card}>
            <h3>User Improvement Over Time</h3>
            <LineChart data={DashboardData.userImprovementOverTime} />
          </div>

          <div className={styles.card}>
            <h3>Completion Rate of Phishing Scenarios</h3>
            <p>{DashboardData.completionRate}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
