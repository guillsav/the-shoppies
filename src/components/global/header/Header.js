import React from 'react';

import { Title } from './Header.styles';

const Header = ({ text, ...titleProps }) => {
  return <Title {...titleProps}>{text}</Title>;
};

export default Header;
