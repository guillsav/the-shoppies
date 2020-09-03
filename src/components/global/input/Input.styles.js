import styled from 'styled-components';

export const GlobalInput = styled.input`
  width: 37rem;
  height: 2.2rem;
  border: 0;
  background-color: transparent;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 400;
  outline: none;
  margin-left: 1rem;

  @media (max-width: 868px) {
    width: 24.9rem;
  }

  @media (max-width: 420px) {
    width: 100%;
  }

  &::-webkit-autofill &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
  }

  &::placeholder {
    color: #fff;
    opacity: 0.3;
  }
`;
