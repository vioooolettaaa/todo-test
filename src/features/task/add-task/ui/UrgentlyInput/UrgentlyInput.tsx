import './styles.css';
import React from 'react';

function UrgentlyInput() {
  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      <input type="checkbox" name="urgently" className="urgently-checkbox" />
      <span className="urgently-span">#</span>
      <span className="urgently-span">&nbsp;срочно</span>
    </label>
  );
}

export default UrgentlyInput;
