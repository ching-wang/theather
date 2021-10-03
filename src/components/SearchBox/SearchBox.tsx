import React from "react";
import { InputHandler } from "../../types";

export const SearchBox = ({
  handleSearchChange,
}: {
  handleSearchChange: InputHandler;
}) => {
  return (
    <div>
      <input
        type="search"
        onChange={handleSearchChange}
        placeholder="Search for a TV show"
      />
    </div>
  );
};

export default SearchBox;
