import React, { useEffect, useState } from "react";
import { SearchResult, Show } from "../../types";
import { useSearchQuery } from "../../context/SearchQueryContext";
import { apiGet } from "../../api/api";
import Card from "../../components/Card/Card"
import {AlertMessage, Grid, SearchTitle, Wrapper} from "./showGrid.styles";

export const ShowGrid = () => {
  const { searchState } = useSearchQuery();
  const [shows, setShows] = useState<Array<Show>>([]);

  useEffect(() => {
    const query = String(searchState.query || "").trim();
    if (query) {
      apiGet(`/search/shows?q=${query}`).then((requestShows) => {
        setShows(
          requestShows.map((searchResult: SearchResult) => searchResult.show)
        );
      });
    } else {
      apiGet("shows").then((shows) => {
        setShows(shows.slice(0, 20));
      });
    }
  }, [searchState.query]);

  return (
    <Wrapper>
      {searchState.query ? <SearchTitle>{searchState.query}</SearchTitle> : null}
      <Grid>
        {shows && shows.length ? shows.map((show) => (
            <Card
                key={show.id}
                show={show}
            />
        )) : <AlertMessage> No results </AlertMessage>
        }
      </Grid>
    </Wrapper>
  );
};

export default ShowGrid;
