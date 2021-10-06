import styled from "styled-components";
import {theme} from "../../styles/GlobalStyles";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: ${theme.shadow};
  padding: 20px;
`;

export const Thumbnail = styled.img`
  padding: 5px;
  max-width: 100%;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;
