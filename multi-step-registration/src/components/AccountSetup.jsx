import React, { useState } from 'react';
import { useForm } from '../context/FormContext';

const AccountSetup = ({ onNext }) => {
  const { formData, setFormData } = useForm();
  const [passwordStrength, setPasswordStrength] = useState('');

  const checkPasswordStrength = (password) => {
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /[0-9]/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const specialCharCriteria = /[!@#$%^&*]/.test(password);

    const strength =
      lengthCriteria && (numberCriteria || uppercaseCriteria || specialCharCriteria)
        ? 'strong'
        : lengthCriteria
        ? 'moderate'
        : 'weak';
    setPasswordStrength(strength);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
    >
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
          checkPasswordStrength(e.target.value);
        }}
        required
      />
      <p>Password strength: {passwordStrength}</p>
      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        required
      />
      <button type="submit">Next</button>
    </form>
  );
};

export default AccountSetup;