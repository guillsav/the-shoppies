import React from 'react';
import PropTypes from 'prop-types';

import { NominateBtn } from './Btn.styles';

const Btn = ({ type, text, ...buttonProps }) => {
  return (
    <NominateBtn {...buttonProps} type={type}>
      {text}
    </NominateBtn>
  );
};

Btn.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Btn;
