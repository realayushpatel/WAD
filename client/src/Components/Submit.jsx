import React, { useState } from 'react';
import axios from 'axios';
import './Submit.css';

const Submit = () => {
  const [form, setForm] = useState({
    name: '',
    imageUrl: '',
    title: '',
    date: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/images', form);
    alert('Image submitted!');
    setForm({ name: '', imageUrl: '', title: '', date: '' });
  };

  return (
    <div>
      <form className="submit-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
        <input name="title" placeholder="Image title" value={form.title} onChange={handleChange} required />
        <input name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} required />
        <input name="date" type="date" value={form.date} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Submit;
  