import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import './ControlledInput.scss';

const ControlledInput = () => {
  const [text, setText] = useState('controlled');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="form-input">
      <Input value={text} handleChange={handleChange} />
    </div>
  );
};

export default ControlledInput;
