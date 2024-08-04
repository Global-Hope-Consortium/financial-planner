import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    amount: '',
    date: '',
    user_id: 1, // Assuming a default user_id for simplicity
  });

  useEffect(() => {
    axios.get('/api/plans')
      .then(response => setPlans(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/plans', form)
      .then(response => setPlans([...plans, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Plans</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange}></textarea>
        <input type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} required />
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <button type="submit">Add Plan</button>
      </form>
      <ul>
        {plans.map(plan => (
          <li key={plan.id}>{plan.title} - {plan.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Plans;