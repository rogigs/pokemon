import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
