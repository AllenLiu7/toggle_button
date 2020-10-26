import React from 'react';
import './Switch.css';

const Switch = ({isOn, handleToggle, color, disabled}) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={`switch-new`}  
        type="checkbox"
        disabled={disabled}
      />
      <label
        style={{ background: isOn && color }}
        className="switch-label"
        htmlFor={`switch-new`}
      >
        <span className={`switch-button`} />
      </label>
    </>
  );
};

export default Switch