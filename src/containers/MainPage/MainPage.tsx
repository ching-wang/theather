import React, { useEffect, useMemo, useState } from "react";
import Header from "../Header/Header";
import ShowGrid from "../../components/ShowGrid/ShowGrid";
import { apiGet } from "../../api/api";
import { ReactChangeEvent, SearchResult } from "../../types";
import { debounce } from "lodash";

export const MainPage = () => {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const query = String(searchTerm || "").trim();
    if (query) {
      apiGet(`/search/shows?q=${query}`).then((requestShows) => {
        console.log("requested shows", requestShows);
        setShows(
            requestShows.map((searchResult: SearchResult) => searchResult.show)
        );
      });
    } else {
      apiGet("shows").then((shows) => {
        setShows(shows.slice(0, 20));
      });
    }
  }, [searchTerm]);

  const handleSearchChange = (event: ReactChangeEvent): void => {
    event.persist();
    setSearchTerm(event?.target?.value || "");
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(handleSearchChange, 300),
    []
  );
  

  return (
    <div>
      <Header handleSearchChange={debouncedChangeHandler} />
      <ShowGrid shows={shows} />
    </div>
  );
};

export default MainPage;
