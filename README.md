Here’s an updated README with a **Note** section added to inform users that the dashboard currently displays dummy data for demonstration purposes. 

---

# PhishGuard - Phishing Simulation Tool

This project, **PhishGuard**, is a web-based phishing simulation tool designed to help users practice identifying phishing attempts through realistic, interactive scenarios. Users encounter various phishing techniques via emails, messages, and links, making decisions to enhance their ability to spot potential threats. This tool is especially beneficial for new cybersecurity analysts looking to build practical phishing detection skills.

> **Project Status**: Early development phase. Core features are being implemented, with additional features planned for future releases.

---

## Note
> ⚠️ **Please Note**: The dashboard currently displays dummy data for demonstration purposes only. The charts and statistics are populated with mock data to showcase potential dashboard functionalities. Future updates will include real-time tracking and analytics based on actual user interactions.

---

## Features

### Current Features

1. **Realistic Phishing Scenarios**
   - A variety of phishing examples, including emails, messages, and links.
   - Users engage with each scenario to classify it as phishing or legitimate.
   - Scenarios are randomized to provide a unique experience each time.

2. **Feedback System**
   - Immediate feedback is provided based on user responses (e.g., "Phishing" or "Not Phishing").
   - Each feedback response includes explanations, helping users learn from their decisions.

3. **Progress Tracking**
   - Tracks user attempts, success rates, and progress over time.
   - Progress data is stored in `localStorage`, allowing users to retain their progress across sessions.

4. **Dynamic Dashboard with D3.js Visualizations**
   - Displays real-time analytics and statistics on user progress.
   - Includes charts for various metrics (e.g., phishing reports, device engagement) created with D3.js for visual insights.
   - Data is sourced from a local mock database (`DashboardData.js`) for realistic test data.

---

### Planned Features

1. **Admin Controls for Customization**
   - **In Progress**: Admin panel to enable administrators to add and edit phishing scenarios.
   - **Functionality**: Admins can enter scenario details through a form, dynamically updating the available phishing scenarios.

2. **Enhanced Scenario Randomization**
   - Planned improvements to existing randomization for richer scenario variations.
   - Additional scenario templates and phishing tactics to increase engagement.

3. **Advanced User Tracking and Reporting**
   - Expanded tracking for more detailed performance metrics (e.g., identifying specific weak spots).
   - Users can see their historical performance in more granular detail.

4. **Improved Deployment and Hosting**
   - Current deployment on GitHub Pages.
   - Future consideration for deploying on Firebase or another backend for more dynamic storage and user management.

---

## Installation

To set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/phishguard.git
   cd phishguard
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Project**
   ```bash
   npm run dev
   ```
   This will start a development server. You can view the tool in your browser at `http://localhost:3000`.

---

## Usage

1. **Start the Simulation**: Navigate through phishing scenarios by identifying each example as "Phishing" or "Not Phishing."
2. **View Feedback**: After each choice, users receive detailed feedback explaining why a scenario is classified as phishing or legitimate.
3. **Track Progress**: User progress is tracked, showing attempts, accuracy, and statistics on the main dashboard.

---

## Future Goals

- **Multi-User Support**: Expand the tool to support teams, allowing multiple users to log in and track individual progress.
- **Automated Scenario Updates**: Integrate a backend to dynamically load new phishing scenarios, keeping the content fresh and relevant.
- **Enhanced Data Analytics**: Use more complex D3.js visualizations for a richer dashboard experience, showcasing trends and detailed user engagement.

---

## Contributions

This project is developed by a novice JavaScript programmer with plans for continued improvement and expansion. Contributions, ideas, and feedback are welcome to enhance the tool's capabilities.