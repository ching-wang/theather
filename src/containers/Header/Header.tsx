import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";

export const Header = () => {
  return (
    <div style={{ background: "black", color: "white", width: "100%" }}>
      <Link to="/">
          <h1>Header</h1>
      </Link>
      <SearchBox />
    </div>
  );
};

export default Header;
