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
# Phishing Simulation Tool

This project is a **web-based phishing simulation tool** designed to help users practice identifying phishing attempts. Through realistic scenarios, users will engage with phishing emails, messages, and links, making decisions to help them recognize potential threats. This tool is particularly beneficial for new cybersecurity analysts looking to build practical skills in phishing detection.

> **Project Status**: Currently in the early development phase. Core features are being implemented, with future additions planned.

---

## Features

### Current Features

1. **Realistic Phishing Scenarios**
   - A range of phishing examples such as emails, messages, and links are presented.
   - Users interact with each scenario to determine if it is phishing or legitimate.
   - Content is randomized to keep scenarios engaging and varied.

2. **Feedback System**
   - After users make a choice (e.g., "Phishing" or "Not Phishing"), immediate feedback is provided.
   - Correct or incorrect feedback is displayed with a brief explanation to reinforce learning.

3. **Progress Tracking**
   - Tracks user attempts and success rates.
   - Statistics are stored in `localStorage`, allowing progress retention between sessions.

---

### Planned Features

1. **Admin Controls for Customization**
   - **In Progress**: A basic admin panel will be added, allowing administrators to add new phishing scenarios easily. 
   - **Description**: Admins can enter scenario details through a form that updates the available phishing scenarios dynamically.

2. **Advanced Scenario Randomization**
   - Planned improvement on current randomization to further diversify scenario presentation.
   - This may include additional scenario templates and variations.

3. **Improved Deployment and Hosting**
   - Current deployment uses GitHub Pages.
   - Future deployments may include Firebase or a similar backend service if more dynamic storage is needed.

---

## Installation

To set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/phishing-simulation-tool.git
   cd phishing-simulation-tool
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Project**
   ```bash
   npm start
   ```
   This will start a development server, and you can view the tool at `http://localhost:3000` in your browser.

---

## Usage

1. **Start the Simulation**: Navigate through various phishing scenarios by identifying each example as "Phishing" or "Not Phishing."
2. **View Feedback**: After each choice, receive feedback explaining why the scenario was classified as phishing or legitimate.
3. **Track Progress**: User progress is tracked through stored attempts and accuracy, visible on the main page.

---

## Future Goals

- **Advanced User Tracking and Reporting**: For users to view more detailed performance metrics.
- **Multi-User Support**: Expand the tool for group or team use, allowing multiple users to log in and track individual progress.
- **Automated Scenario Updates**: Integrate a backend to pull in new phishing scenarios automatically.

---

## Contributions

This project is currently developed by a novice JavaScript programmer with plans for continued improvement and expansion. Contributions, ideas, and feedback are welcome to enhance the tool's capabilities.
