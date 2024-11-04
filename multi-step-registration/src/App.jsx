// src/App.js
import React, { useState } from 'react';
import { FormProvider, useForm } from './context/FormContext';
import PersonalInfo from './components/PersonalInfo';
import AccountSetup from './components/AccountSetup';
import Confirmation from './components/Confirmation';
import ThemeToggle from './components/ThemeToggle';
import ProgressBar from './components/ProgressBar';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const { theme } = useForm();

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const editStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className={theme}>
      <div className="container">
        <div className="form-container">
          <ThemeToggle />
          <ProgressBar step={step} />
          {step === 1 && <PersonalInfo onNext={nextStep} />}
          {step === 2 && <AccountSetup onNext={nextStep} />}
          {step === 3 && <Confirmation onEdit={editStep} />}
        </div>
      </div>
    </div>
  );
};

const Root = () => (
  <FormProvider>
    <App />
  </FormProvider>
);

export default Root;
