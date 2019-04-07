import React, { useState } from 'react';
import './Input.scss';

const Input = (props) => {
  const { value = '', handleChange } = props;
  const handleChangeWrapper = (e) => {
    if (handleChange) {
      handleChange(e);
    }
  };
  if (handleChange) {
    return (
      <input
        className="form-input_inner"
        placeholder="请输入内容"
        value={value}
        onChange={handleChangeWrapper}
      />
    );
  }
  return (
    <input
      className="form-input_inner"
      placeholder="请输入内容"
      defaultValue={value}
    />
  );
};

export default Input;
