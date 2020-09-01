import styled from 'styled-components';

export const ResultContainer = styled.div`
  width: 100%;
  height: 78.3rem;
  background: #15161a;
  border-radius: 0.2rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
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
  height: 6.5rem;

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
  grid-gap: 2rem;
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
`;
