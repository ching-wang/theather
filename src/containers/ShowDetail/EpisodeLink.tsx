import React from "react";
import { Episode } from "../../types";
import { Link } from "react-router-dom";
import {EpisodeWrapper, EpisodeName, Thumbnail} from "./show.styles";

type Params = { episode: Episode, showId: string, seasonId: string}

const EpisodeLink = ({episode, showId, seasonId}: Params) => {
  const imagePlaceHolder = "http://lorempixel.com/212/119/abstract/"


  return (<EpisodeWrapper>
    <Link key={episode.id} to={`/show/${showId}/season/${seasonId}/episodes/${episode.id}`}>
      <Thumbnail src={episode?.image?.medium || imagePlaceHolder} alt={`thumbnail for ${episode.name}`} />
    </Link>
    <EpisodeName>
      {episode.number} {episode.name}
    </EpisodeName>
  </EpisodeWrapper>);
};

export default EpisodeLink;
