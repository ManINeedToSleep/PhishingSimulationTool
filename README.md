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
   - Users engage with each scenario to classify it as phishing or legitimate.
   - **Gmail-Style Email Component**: Realistic email templates styled to mimic Gmail's design, including sender details, email bodies, and actionable links.
     
2. **Feedback System**
   - Immediate feedback is provided based on user responses (e.g., "Phishing" or "Not Phishing").
   - Each feedback response includes detailed explanations, formatted with HTML for clarity, helping users learn from their decisions.

3. **Dynamic Dashboard with D3.js Visualizations**
   - Includes charts for various metrics (e.g., phishing detection success rate, user engagement by device) created with D3.js for visual insights.
   - **Newly Added Metrics**:
     - **Phishing Detection Success Rate**
     - **Top Missed Scenarios**
     - **User Improvement Over Time**
     - **Completion Rates**
   - Data is sourced from a local mock database (`DashboardData.js`) for realistic test data.

4. **Modern Sidebar Design**
   - Sidebar redesigned with popular CSS patterns, including icons for each navigation link (using `react-icons`) and responsive styling.
   - Includes new sections: **Analytics**, **Reports**, and **Training**.

---

### Planned Features

1. **Admin Controls for Customization**
   - **In Progress**: Admin panel to enable administrators to add and edit phishing scenarios.
   - **Functionality**: Admins can enter scenario details through a form, dynamically updating the available phishing scenarios.

2. **Expanded Phishing Tactics**
   - Integration of more phishing methods, such as fake social media links, fake login pages, and QR code scams.
   - Enhanced email components to allow for more dynamic phishing templates (e.g., logos, custom links).

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

## Recent Updates

1. **Gmail-Style Email Scenarios**
   - Realistic emails styled to mimic Gmail, complete with actionable links, sender names, and timestamps.
   - Includes 10 scenarios (5 phishing, 5 legitimate) for realistic testing.

2. **Sidebar Redesign**
   - Added icons for navigation and new sections: **Analytics**, **Reports**, and **Training**.
   - Improved responsiveness with a toggle button to hide/show the sidebar.

3. **New Dashboard Metrics**
   - Phishing Detection Success Rate
   - Top Missed Scenarios
   - User Improvement Over Time
   - Completion Rates of Phishing Scenarios

4. **Charts with D3.js**
   - Integrated D3.js for bar and line charts to visualize metrics dynamically.

---

## Future Goals

- **Multi-User Support**: Expand the tool to support teams, allowing multiple users to log in and track individual progress.
- **Automated Scenario Updates**: Integrate a backend to dynamically load new phishing scenarios, keeping the content fresh and relevant.
- **Enhanced Data Analytics**: Use more complex D3.js visualizations for a richer dashboard experience, showcasing trends and detailed user engagement.

---

## Contributions

This project is developed by a novice JavaScript programmer with plans for continued improvement and expansion. Contributions, ideas, and feedback are welcome to enhance the tool's capabilities.

---

### Let me know if you need further changes or refinements!
