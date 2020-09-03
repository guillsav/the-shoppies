import styled from 'styled-components';

export const ResultContainer = styled.div`
  width: 100%;
  height: 96.8rem;
  background: #15161a;
  border-radius: 0.2rem;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;

  @media (max-width: 868px) {
    height: 116rem;
  }
`;

export const ResultHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

export const ResultContent = styled.div`
  width: 45rem;
  height: 5.8rem;

  p {
    font-size: 1.2rem;
    color: #fff;
    opacity: 0.26;
    margin-bottom: 0.5rem;
  }
`;

export const ResultPagination = styled.div`
  width: 5rem;
  height: 2rem;
`;

export const ResultList = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 3rem;
  overflow: hidden;

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

  @media (max-width: 868px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  @media (max-width: 593px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 2rem;
  } ;
`;
