import React from 'react';

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

export default Input;
