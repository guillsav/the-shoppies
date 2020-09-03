import React from 'react';

import { Text } from './Error.styles';

const Error = ({ text, ...errorProps }) => {
  return <Text {...errorProps}>{text}</Text>;
};

export default Error;
