import React from 'react';
import PropTypes from 'prop-types';

import { Text } from './Error.styles';

const Error = ({ text, ...errorProps }) => {
  return <Text {...errorProps}>{text}</Text>;
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;
