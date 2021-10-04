import styled from "styled-components";
import { theme } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: ${theme.shadow};
  width: 250px;
  margin: 10px;
  padding: 20px;
`;

export const Thumbnail = styled.img`
  width: 200px;
  padding: 5px;
`;

export const Title = styled.p`
  font-size: 1.5rem;
`;
