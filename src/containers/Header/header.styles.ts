import styled from "styled-components";
import {theme} from "../../styles/GlobalStyles";

export const HeaderWrapper = styled.div`
  background: ${theme.palette.bgColor};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  font-family: 'Roboto', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
`


export const CompanyName = styled.h1`
    color: ${theme.palette.red};
    font-size: 3.8rem;
`