import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UnifiedView = () => {
  const [plans, setPlans] = useState([]);
  const [affirmations, setAffirmations] = useState([]);

  useEffect(() => {
    axios.get('/api/plans')
      .then(response => setPlans(response.data))
      .catch(error => console.error(error));

    axios.get('/api/affirmations')
      .then(response => setAffirmations(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Unified View</h2>
      <h3>Plans</h3>
      <ul>
        {plans.map(plan => (
          <li key={plan.id}>{plan.title} - {plan.amount}</li>
        ))}
      </ul>
      <h3>Affirmations</h3>
      <ul>
        {affirmations.map(affirmation => (
          <li key={affirmation.id}>{affirmation.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default UnifiedView;