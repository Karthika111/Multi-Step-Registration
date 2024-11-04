import React from 'react';

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${(step / 3) * 100}%` }} />
    </div>
  );
};

export default ProgressBar;