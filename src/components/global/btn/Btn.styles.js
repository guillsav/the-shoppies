import styled, { css } from 'styled-components';

const nominatedStyle = css`
  opacity: 0.4;
  cursor: text;
`;

const regular = css`
  opacity: 1;
  cursor: pointer;
`;

const getBtnStyle = props => {
  if (props.nominated) return nominatedStyle;
  return regular;
};

export const NominateBtn = styled.button`
  ${getBtnStyle}
`;
