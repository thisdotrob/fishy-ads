import React from 'react';

const Input = ({ onInput, label }) => {
  return (
    <div>
      <label>{label}<input onBlur={(e) => onInput(e.target.value)} type='text'/></label>
    </div>
  )
}

export default Input;
