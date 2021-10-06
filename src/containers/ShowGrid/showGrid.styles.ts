import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  padding: 10px 50px;
  
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
