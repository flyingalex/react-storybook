import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  const { text, clsname } = props;
  return (
    <button className={`${clsname}`}>{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;
