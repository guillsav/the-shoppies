import styled from 'styled-components';

export const SelectedMovieContainer = styled.div`
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
`;
export const SelectedMoviePoster = styled.img`
  width: 100%;
  height: 24.2rem;
  background: cover;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.3);
`;