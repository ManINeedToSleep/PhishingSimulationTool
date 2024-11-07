import React from 'react';

function PhishingScenario({ onFeedback }) {
  const handleChoice = (choice) => {
    const isPhishing = choice === 'Phishing';  // Simplified check for now
    onFeedback(isPhishing);
  };

  return (
    <div>
      <h2>Scenario: Fake Email</h2>
      <p>This is an example phishing email. Is it phishing or legitimate?</p>
      <button onClick={() => handleChoice('Phishing')}>Phishing</button>
      <button onClick={() => handleChoice('Not Phishing')}>Not Phishing</button>
    </div>
  );
}

export default PhishingScenario;
