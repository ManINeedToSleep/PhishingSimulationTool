import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/sidebar.module.css';

const Sidebar = ({ toggleSidebar, isSidebarHidden, username = 'User Name' }) => {
  return (
    <>
      <div className={`${styles.sidebar} ${isSidebarHidden ? styles.hidden : ''}`}>
        <div className={styles.logo}>
          <h1>PhishGuard</h1>
          <button className={styles.toggleButton} onClick={toggleSidebar}>
            <img
              src={isSidebarHidden ? '/img/sidebar-show.svg' : '/img/sidebar-hide.svg'}
              alt="Toggle Sidebar"
              className={styles.toggleIcon}
            />
          </button>
        </div>
        <nav className={styles.nav}>
          <Link href="/">Dashboard</Link>
          <Link href="/phishing">Phishing</Link>
          <Link href="/settings">User Settings</Link>
        </nav>
        
        {/* Profile section at the bottom of the sidebar */}
        <div className={styles.profileSection}>
          <img src="/img/profile.png" alt="User Profile" className={styles.profileImage} />
          <p className={styles.username}>{username}</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
