import styled from 'styled-components';

export const GlobalInput = styled.input`
  width: 37rem;
  height: 1.8rem;
  border: 0;
  background-color: transparent;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 400;
  outline: none;
  margin-left: 1rem;

  @media (max-width: 768px) {
    width: 20rem;
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
