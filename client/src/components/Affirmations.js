import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Affirmations = () => {
  const [affirmations, setAffirmations] = useState([]);
  const [form, setForm] = useState({
    text: '',
    date: '',
    user_id: 1, // Assuming a default user_id for simplicity
  });

  useEffect(() => {
    axios.get('/api/affirmations')
      .then(response => setAffirmations(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/affirmations', form)
      .then(response => setAffirmations([...affirmations, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Affirmations</h2>
      <form onSubmit={handleSubmit}>
        <textarea name="text" placeholder="Affirmation" value={form.text} onChange={handleChange} required></textarea>
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <button type="submit">Add Affirmation</button>
      </form>
      <ul>
        {affirmations.map(affirmation => (
          <li key={affirmation.id}>{affirmation.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Affirmations;