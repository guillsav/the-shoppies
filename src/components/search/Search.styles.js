import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 37rem;
  height: 2.4rem;
  border-bottom: 1px solid #fff;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-content: baseline;

  @media (max-width: 868px) {
    width: 24.9rem;
  }

  @media (max-width: 420px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
