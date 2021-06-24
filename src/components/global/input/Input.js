import React from 'react';
import PropTypes from 'prop-types';

import { GlobalInput } from './Input.styles';

const Input = ({ type, name, placeholder, onChange, ...inputProps }) => {
  return (
    <GlobalInput
      {...inputProps}
      type={type}
      name={name || null}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
