import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../../api/api";
import { Link } from "react-router-dom";
import { Episode } from "../../types";
import {Thumbnail} from "../../components/Card/card.styles";

export const EpisodeDetail = () => {
  const { showId, episodeId } =
    useParams<{ episodeId: string; showId: string }>();
  const [episode, setEpisode] = useState<Episode>();

  console.log(episode);

  useEffect(() => {
    apiGet(`/episodes/${episodeId}`).then((episode) => setEpisode(episode));
  }, [episodeId]);

  const imagePlaceHolder = "http://lorempixel.com/210/295/abstract/"

  return (
    <div style={{paddingTop: "100px"}}>
      <div style={{display: "flex", flexDirection: "column", maxWidth: "500px"}}>
          <Link to={`/show/${showId}`}>
              <button> Back to show </button>
          </Link>
          <Thumbnail src={episode?.image?.medium || imagePlaceHolder } alt="thumbnail" />
          <h1>This is Episode Preview page for ID: {episodeId}</h1>
      </div>
    </div>
  );
};

export default EpisodeDetail;
