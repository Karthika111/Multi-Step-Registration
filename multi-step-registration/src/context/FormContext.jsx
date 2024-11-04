import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const useForm = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    country: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, theme, toggleTheme }}>
      {children}
    </FormContext.Provider>
  );
};