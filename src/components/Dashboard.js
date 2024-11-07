import React, { useState } from 'react';
import PhishingScenario from './PhishingScenario';
import Feedback from './Feedback';

function Dashboard() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleFeedback = (isCorrect) => {
    setAttempts(attempts + 1);
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      setFeedbackMessage('Correct! This was a phishing attempt.');
    } else {
      setFeedbackMessage('Incorrect. This was a legitimate email.');
    }
  };

  return (
    <div className="dashboard">
      <h1>Phishing Simulation Dashboard</h1>

      <div className="progress">
        <p>Correct Answers: {correctAnswers}</p>
        <p>Attempts: {attempts}</p>
      </div>

      <PhishingScenario onFeedback={handleFeedback} />
      <Feedback message={feedbackMessage} />
    </div>
  );
}

export default Dashboard;
