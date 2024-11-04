import React from 'react';
import { useForm } from '../context/FormContext';

const Confirmation = ({ onEdit }) => {
  const { formData } = useForm();

  return (
    <div>
      <h3>Confirmation</h3>
      <p>Full Name: {formData.fullName}</p>
      <p>Date of Birth: {formData.dob}</p>
      <p>Country: {formData.country}</p>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <button onClick={onEdit}>Edit</button>
      <button
        onClick={() => {
          console.log(formData);
          alert("Form submitted! Check console for data.");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Confirmation;