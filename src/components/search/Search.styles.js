import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 37rem;
  height: 2.4rem;
  border-bottom: 1px solid #fff;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-content: baseline;

  @media (max-width: 768px) {
    width: 25rem;
    justify-content: center;
  }
`;
