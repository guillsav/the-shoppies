import styled, { css } from 'styled-components';

const jumbo = css`
  font-size: 2.2rem;
  font-weight: 900;

  @media (max-width: 420px) {
    margin-left: 1rem;
  }
`;

const regular = css`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const movieTitle = css`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 868px) {
    font-size: 1rem;
  }
`;

const getHeaderStyle = props => {
  if (props.jumbo) return jumbo;
  if (props.movieTitle) return movieTitle;
  return regular;
};

export const Title = styled.h2`
  text-transform: uppercase;
  color: #fff;
  ${getHeaderStyle}
`;
