import React from 'react';
import PropTypes from 'prop-types';

import { GlobalInput } from './Input.styles';

const Input = ({ type, name, id, placeholder, onChange, ...inputProps }) => {
  return (
    <GlobalInput
      {...inputProps}
      type={type}
      name={name || null}
      id={id || null}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
