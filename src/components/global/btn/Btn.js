import React from 'react';

const Btn = ({ type, text, ...buttonProps }) => {
  return (
    <button {...buttonProps} type={type}>
      {text}
    </button>
  );
};

export default Btn;
