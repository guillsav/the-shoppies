import React from 'react';

const Input = ({ type, name, id, placeholder, onChange, ...inputProps }) => {
  return (
    <input
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
