import styled from 'styled-components';

export const NominatedContainer = styled.div`
  width: 100%;
  height: 57.4rem;
  background: #15161a;
  border-radius: 0.2rem;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;

  @media (max-width: 1124px) {
    height: 48.5rem;
  }

  @media (max-width: 868px) {
    height: 40rem;
    padding: 3rem;
  }

  @media (max-width: 420px) {
    /* height: auto; */
    height: 92rem;
    padding: 1.5rem;
  }
`;

export const NominatedHeading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;

  p {
    font-size: 1.2rem;
    color: #fff;
    opacity: 0.26;
    margin-bottom: 0.5rem;
  }
`;

export const NominatedContent = styled.div`
  width: 45rem;
  height: 5.8rem;

  p {
    font-size: 1.2rem;
    color: #fff;
    opacity: 0.26;
    margin-bottom: 0.5rem;
  }
`;

export const SelectedList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3rem;
  margin-bottom: 3rem;
  transition: all 200ms ease-in-out;

  .display-enter {
    opacity: 0.01;
  }

  .display-enter-active {
    opacity: 1;
    transition: all 200ms ease-in-out;
  }

  .display-leave {
    opacity: 1;
  }

  .display-leave-active {
    opacity: 0.01;
    transition: all 200ms ease-in-out;
  }

  @media (max-width: 1124px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2.1rem;
  }

  @media (max-width: 868px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1.7rem;
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 2rem;
  }
`;
