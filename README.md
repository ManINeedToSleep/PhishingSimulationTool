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
