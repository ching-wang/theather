import React, { useMemo } from "react";
import { ReactChangeEvent } from "../../types";
import { debounce } from "lodash";
import { useSearchQuery } from "../../context/SearchQueryContext";
import {withRouter} from 'react-router-dom'

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
    <div>
      <input
        type="search"
        defaultValue={searchState.query}
        onChange={debouncedChangeHandler}
        placeholder="Search for a TV show"
      />
    </div>
  );
};

export default withRouter(SearchBox);
