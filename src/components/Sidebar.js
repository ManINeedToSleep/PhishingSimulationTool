// components/Sidebar.js
import React from 'react';
import Link from 'next/link';
import { FaHome, FaShieldAlt, FaUserCog, FaChartLine, FaFileAlt, FaTools, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons
import styles from '../styles/sidebar.module.css';

const Sidebar = ({ toggleSidebar, isSidebarHidden }) => {
  return (
    <div className={`${styles.sidebar} ${isSidebarHidden ? styles.hidden : ''}`}>
      <div className={styles.logo}>
        PhishGuard
        <button onClick={toggleSidebar} className={styles.toggleButton}>
          {isSidebarHidden ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          <FaHome className={styles.icon} /> Dashboard
        </Link>
        <Link href="/phishing" className={styles.navLink}>
          <FaShieldAlt className={styles.icon} /> Phishing Simulation
        </Link>
        <Link href="/analytics" className={styles.navLink}>
          <FaChartLine className={styles.icon} /> Analytics
        </Link>
        <Link href="/reports" className={styles.navLink}>
          <FaFileAlt className={styles.icon} /> Reports
        </Link>
        <Link href="/training" className={styles.navLink}>
          <FaTools className={styles.icon} /> Training
        </Link>
        <Link href="/settings" className={styles.navLink}>
          <FaUserCog className={styles.icon} /> User Settings
        </Link>
      </nav>

      <div className={styles.userProfile}>
        <img src="/img/profile.png" alt="User Profile" className={styles.profileImg} />
        <p>User Name</p>
      </div>
    </div>
  );
};

export default Sidebar;
