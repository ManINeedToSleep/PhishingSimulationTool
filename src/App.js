import React from 'react';
import PhishingScenario from './components/PhishingScenario';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="App">
      <h1>Phishing Simulation Tool</h1>
      <PhishingScenario />
      <Feedback />
    </div>
  );
}

export default App;
