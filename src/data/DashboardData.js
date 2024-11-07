// src/DashboardData.js


// Dummy Data for Example Purposes
const DashboardData = {
    onlineUsers: 279,
    phishingReports: { total: 19000, change: -23.74 },
    comments: { total: 683, change: 67.37 },
    userDevices: [
      { device: 'Mobile', percentage: 20.93 },
      { device: 'Tablet', percentage: 15.35 },
      { device: 'Laptop', percentage: 45.25 },
      { device: 'Desktop PC', percentage: 18.47 }
    ],
    visitors: [
      { month: 'Apr', newVisitors: 10000, returningVisitors: 15000 },
      { month: 'May', newVisitors: 15000, returningVisitors: 10000 },
      { month: 'Jun', newVisitors: 18000, returningVisitors: 17000 },
      { month: 'Jul', newVisitors: 22000, returningVisitors: 21000 },
      { month: 'Aug', newVisitors: 25000, returningVisitors: 23000 },
      { month: 'Sep', newVisitors: 30000, returningVisitors: 28000 }
    ],
    referrals: [
      { source: 'Google', users: 45904 },
      { source: 'Facebook', users: 20796 }
    ]
  };
  
  export default DashboardData;
  