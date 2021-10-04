import React from "react";
import { Link } from "react-router-dom";
import {SearchBox} from "../SearchBox/SearchBox";
import {CompanyName, HeaderWrapper} from "./header.styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
          <CompanyName>
              Theatre
          </CompanyName>
      </Link>
      <SearchBox />
    </HeaderWrapper>
  );
};

export default Header;
