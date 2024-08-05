import React, { useState } from 'react';
import axios from 'axios';

const PlanForm = () => {
  const [form, setForm] = useState({
    planName: '',
    planDetails: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    try {
      const response = await axios.post('/api/plans', form, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include JWT token if required
        },
      });
      console.log(response.data);
      // Update the UI or state based on the response
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="planName"
        placeholder="Plan Name"
        value={form.planName}
        onChange={handleChange}
        required
      />
      <textarea
        name="planDetails"
        placeholder="Plan Details"
        value={form.planDetails}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlanForm;