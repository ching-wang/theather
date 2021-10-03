import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Season, Show } from "../../types";
import { apiGet } from "../../api/api";
import SeasonDetail from "./SeasonDetail";

export const ShowDetail = () => {
  const { showId } = useParams<{ showId: string }>();

  const [show, setShow] = useState<Show>();
  const [seasons, setSeasons] = useState<Array<Season>>();

  useEffect(() => {
    apiGet(`/shows/${showId}`).then((show) => setShow(show));
    apiGet(`/shows/${showId}/seasons`).then((seasons) => setSeasons(seasons));
  }, [showId]);

  console.log({seasons})

  return (
    <>
      <h1>{show?.name}</h1>
      <h2>Seasons</h2>
      {seasons?.map(season =>
          <SeasonDetail key={season.id} season={season} />
      )}
    </>
  );
};

export default ShowDetail;
