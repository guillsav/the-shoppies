import styled, { css } from 'styled-components';

const warningStyle = css`
  color: #ff8000;
`;

const getErrorStyle = props => {
  if (props.warning) return warningStyle;
};

export const Text = styled.span`
  color: #ea002a;
  opacity: 0.91;
  font-size: 1.2rem;
  ${getErrorStyle}
`;
