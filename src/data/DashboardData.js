const DashboardData = {
  phishingDetectionSuccessRate: 85, // Percentage

  recentTrainingActivity: {
    scenariosCompletedThisWeek: 200,
    activeTrainees: 50,
  },

  topMissedScenarios: [
    { scenarioName: "Password Reset Request", incorrectPercentage: 30 },
    { scenarioName: "Account Suspension Notice", incorrectPercentage: 25 },
    { scenarioName: "Fake Invoice", incorrectPercentage: 20 },
  ],

  userEngagementByDevice: {
    desktop: 60,
    mobile: 30,
    tablet: 10,
  },

  averageTimeToComplete: "1 min 30 sec", // Displayed as text

  userImprovementOverTime: [
    { week: "Week 1", detectionRate: 70 },
    { week: "Week 2", detectionRate: 75 },
    { week: "Week 3", detectionRate: 80 },
    { week: "Week 4", detectionRate: 85 },
  ],

  completionRate: 90, // Percentage
};

export default DashboardData;
