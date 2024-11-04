// src/components/PersonalInfo.js
import React, { useState } from 'react';
import { useForm } from '../context/FormContext';
import { countries } from '../data/countries';

const PersonalInfo = ({ onNext }) => {
  const { formData, setFormData } = useForm();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const dobDate = new Date(formData.dob);
    const age = new Date().getFullYear() - dobDate.getFullYear();

    // Check age requirement
    if (formData.country === 'US' && age < 18) {
      setError('You must be at least 18 years old.');
      return;
    }
    setError('');
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        required
      />
      <input
        type="date"
        value={formData.dob}
        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
        required
      />
      <select
        value={formData.country}
        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        required
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.flag} {country.name}
          </option>
        ))}
      </select>
      {error && <p className="error">{error}</p>}
      <button type="submit">Next</button>
    </form>
  );
};

export default PersonalInfo;
