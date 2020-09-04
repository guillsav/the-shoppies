import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './Header.styles';

const Header = ({ text, ...titleProps }) => {
  return <Title {...titleProps}>{text}</Title>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
