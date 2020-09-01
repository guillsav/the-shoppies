import styled from 'styled-components';

export const NominatedContainer = styled.div`
  width: 100%;
  height: 44.1rem;
  background: #15161a;
  border-radius: 0.2rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
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

export const SelectedList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin-bottom: 3rem;
`;
