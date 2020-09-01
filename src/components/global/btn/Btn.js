import React from 'react';

import { NominateBtn } from './Btn.styles';

const Btn = ({ type, text, ...buttonProps }) => {
  return (
    <NominateBtn {...buttonProps} type={type}>
      {text}
    </NominateBtn>
  );
};

export default Btn;
