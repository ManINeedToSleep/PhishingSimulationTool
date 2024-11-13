// pages/phishing.js

// Import necessary modules and components from React and other files
import { useState } from 'react';
import Sidebar from '../components/Sidebar'; // Sidebar component for navigation
import Email from '../components/Email'; // Email component to display phishing scenarios
import styles from '../styles/phishing.module.css'; // CSS module for styling
import phishingData from '../data/PhishingData'; // Data containing phishing and legitimate email scenarios

// Main functional component for the Phishing simulation page
export default function Phishing() {
  // State to manage whether the sidebar is visible or hidden
  const [isSidebarHidden, setSidebarHidden] = useState(false);

  // State to keep track of the current scenario index
  const [currentScenario, setCurrentScenario] = useState(0);

  // State to store the user's response to the current scenario
  const [userResponse, setUserResponse] = useState(null);

  // State to manage the feedback message displayed to the user
  const [feedback, setFeedback] = useState(null);

  // State to store a detailed explanation displayed when the user’s response is incorrect
  const [explanation, setExplanation] = useState(null);

  // Function to toggle the sidebar’s visibility
  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  // Function to handle the user's response (Phishing or Not Phishing)
  const handleResponse = (isPhishing) => {
    // Retrieve the current scenario data
    const scenario = phishingData[currentScenario];

    // Check if the user’s response matches the scenario's phishing status
    const correct = scenario.isPhishing === isPhishing;

    // Store the user's response in state
    setUserResponse(isPhishing);

    // Determine and set the feedback message based on whether the response is correct
    if (correct) {
      // Correct response feedback
      setFeedback(scenario.isPhishing ? 'Correct! This is a phishing attempt.' : 'Correct! This is not a phishing attempt.');
    } else {
      // Incorrect response feedback
      setFeedback(scenario.isPhishing ? 'Incorrect. This is a phishing attempt.' : 'Incorrect. This is not a phishing attempt.');
    }

    // Show a detailed explanation only if the user’s response was incorrect
    setExplanation(!correct ? scenario.explanation : null);
  };

  // Function to load the next scenario in the list
  const nextScenario = () => {
    // Reset user responses, feedback, and explanation for the next scenario
    setUserResponse(null);
    setFeedback(null);
    setExplanation(null);

    // Update the current scenario index, cycling back to the beginning if at the end
    setCurrentScenario((prev) => (prev + 1) % phishingData.length);
  };

  // Retrieve the current scenario data based on the current scenario index
  const scenario = phishingData[currentScenario];

  // Render the phishing simulation page
  return (
    <div className={styles.phishingContainer}>
      {/* Sidebar for navigation, which can be toggled on or off */}
      <Sidebar toggleSidebar={toggleSidebar} isSidebarHidden={isSidebarHidden} />

      {/* Main content area, adjusts based on sidebar visibility */}
      <div className={`${styles.mainContent} ${isSidebarHidden ? styles.expanded : ''}`}>
        <h2>Phishing Scenarios</h2>
        
        {/* Scenario counter to indicate the user's progress */}
        <p className={styles.scenarioCounter}>
          Scenario {currentScenario + 1} of {phishingData.length}
        </p>

        <div className={styles.centeredContent}>
          {/* Display the Email component only if the scenario type is "email" */}
          {scenario.type === "email" && (
            <Email
              sender={scenario.sender}
              senderEmail={scenario.senderEmail}
              subject={scenario.subject}
              date={scenario.date}
              body={scenario.body}
              links={scenario.links}
            />
          )}

          {/* Buttons for user to select whether the scenario is Phishing or Not Phishing */}
          <div className={styles.buttonContainer}>
            <button onClick={() => handleResponse(true)} className={styles.phishingButton}>Phishing</button>
            <button onClick={() => handleResponse(false)} className={styles.notPhishingButton}>Not Phishing</button>
          </div>

          {/* Feedback section, visible only after the user has made a choice */}
          {feedback && (
            <div className={styles.feedback}>
              {/* Display feedback message */}
              <p>{feedback}</p>
              
              {/* Explanation displayed only if the user response was incorrect */}
              {explanation && (
                <p
                  className={styles.explanation}
                  dangerouslySetInnerHTML={{ __html: explanation }} // Render explanation as HTML for formatted content
                />
              )}
              
              {/* Button to move to the next scenario */}
              <button onClick={nextScenario} className={styles.nextButton}>Next Scenario</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
