import styled, { css } from 'styled-components';

const nominatedStyle = css`
  opacity: 0.2;
  cursor: initial;
`;

const getContainerStyle = props => {
  if (props.nominated) return nominatedStyle;
};

export const MovieContainer = styled.div`
  width: 16.4rem;
  height: 28.2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  span {
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
  }

  /* &:hover {
    transform: scale(1.1);
  } */

  ${getContainerStyle}
`;

const posterSelectedStyle = css`
  &:hover {
    transform: none;
  }
`;

const getPosterStyle = props => {
  if (props.selected) return posterSelectedStyle;
};

export const MoviePoster = styled.img`
  width: 100%;
  height: 24.2rem;
  background: cover;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  ${getPosterStyle}
`;
