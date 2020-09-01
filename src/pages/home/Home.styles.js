import styled from 'styled-components';

export const SectionHeader = styled.section`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
`;

export const SectionContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h3 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }
`;

export const LogoContainer = styled.div`
  width: 22.8rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
