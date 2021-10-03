import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import { InputHandler } from "../../types";

export const Header = ({
  handleSearchChange,
}: {
  handleSearchChange: InputHandler;
}) => {
  return (
    <div style={{ background: "black", color: "white", width: "100%" }}>
      <h1>Header</h1>
      <SearchBox handleSearchChange={handleSearchChange} />
    </div>
  );
};

export default Header;
