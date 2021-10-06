import styled from "styled-components";
import {theme} from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
`
export const SearchTitle = styled.h1`
    margin-bottom: 10px;
`

export const AlertMessage = styled.p`
    color: ${theme.palette.red};
    font-size: 5rem;
`

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  grid-gap: 30px;
  
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

