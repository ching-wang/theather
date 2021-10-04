import styled from "styled-components";
import {theme} from "../../styles/GlobalStyles";

export const CardWrapper = styled.div`
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
