// src/components/ThemeToggle.js
import React from 'react';
import { useForm } from '../context/FormContext';

const ThemeToggle = () => {
  const { toggleTheme } = useForm();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
