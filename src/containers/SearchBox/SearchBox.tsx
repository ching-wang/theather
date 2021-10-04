import React, { useMemo } from "react";
import { ReactChangeEvent } from "../../types";
import { debounce } from "lodash";
import { useSearchQuery } from "../../context/SearchQueryContext";
import { withRouter } from "react-router-dom";
import { SearchWrapper, Input} from "./searchBox.styles"

export const SearchBox = () => {
  const { searchState, dispatchSearch } = useSearchQuery();

  const handleSearchChange = (event: ReactChangeEvent): void => {
    event.persist();
    const query = event?.target?.value || "";
    dispatchSearch({ query });
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(handleSearchChange, 300),
    []
  );

  return (
    <SearchWrapper>
      <Input
        type="search"
        defaultValue={searchState.query}
        onChange={debouncedChangeHandler}
        placeholder="Search for a TV show"
      />
    </SearchWrapper>
  );
};

export default withRouter(SearchBox);
