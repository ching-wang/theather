import React, { useEffect, useState } from "react";
import { SearchResult, Show } from "../../types";
import { useSearchQuery } from "../../context/SearchQueryContext";
import { apiGet } from "../../api/api";
import { Link } from "react-router-dom";

export const ShowGrid = () => {
  const { searchState } = useSearchQuery();
  const [shows, setShows] = useState<Array<Show>>([]);

  useEffect(() => {
    const query = String(searchState.query || "").trim();
    if (query) {
      apiGet(`/search/shows?q=${query}`).then((requestShows) => {
        console.log("requested shows", requestShows);
        setShows(
          requestShows.map((searchResult: SearchResult) => searchResult.show)
        );
      });
    } else {
      apiGet("shows").then((shows) => {
        setShows(shows.slice(0, 5));
      });
    }
  }, [searchState.query]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <h1> SHOWS </h1>
        {searchState.query ? <h2>{searchState.query}</h2> : null}
        {shows.map((show) => (
          <Link
            key={show.id}
            to={`/show/${show.id}`}
            style={{
              width: "100px",
              background: "salmon",
              margin: "2px",
              padding: "10px",
            }}
          >
            {show.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default ShowGrid;
