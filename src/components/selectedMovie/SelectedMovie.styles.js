import styled from 'styled-components';

export const SelectedMovieContainer = styled.div`
  width: 20.8rem;
  height: 30.1rem;
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

  @media (max-width: 1124px) {
    width: 15.2rem;
    height: 22.4rem;
  }

  @media (max-width: 868px) {
    width: 12rem;
    height: 17.7rem;
    margin-top: 3rem;
    margin-bottom: 8rem !important;
  }

  @media (max-width: 420px) {
    width: 11.9rem;
    height: 17.6rem;
  }
`;
export const SelectedMoviePoster = styled.img`
  width: 100%;
  height: 100%;
  background: cover;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.3);
`;
