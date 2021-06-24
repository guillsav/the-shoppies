import styled, { css } from 'styled-components';

const nominatedStyle = css`
  opacity: 0.2;
  cursor: initial;
`;

const getContainerStyle = props => {
  if (props.nominated) return nominatedStyle;
};

export const MovieContainer = styled.div`
  position: relative;
  width: 20.8rem;
  height: 30.7rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  span {
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
  }

  /* &:hover {
    transform: scale(1.1);
  } */

  @media (max-width: 1124px) {
    width: 15.2rem;
    height: 22.4rem;
  }

  @media (max-width: 868px) {
    width: 12rem;
    height: 17.7rem;
    margin-bottom: 8rem !important;
  }

  @media (max-width: 420px) {
    width: 11.9rem;
    height: 17.6rem;
    margin-bottom: 8rem !important;
    margin: 0 auto;
  }

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
  height: 100%;
  background: cover;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.6s ease-in-out;

  ${getPosterStyle}
`;

const hidden = css`
  display: none;
`;

const visible = css`
  display: flex;
`;

const getDisplayStyle = props => {
  return props.hidden ? hidden : visible;
};

export const ActionMSG = styled.p`
  width: 100%;
  height: 15%;
  color: #000;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  background: #008000;
  opacity: 90%;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 0.4rem 0.4rem;

  ${getDisplayStyle}
`;
