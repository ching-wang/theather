import React from "react";
import {Episode} from "../../types";
import {EpisodeWrapper, EpisodeName, Thumbnail} from "./show.styles";

const EpisodeDetail = ({episode}: {episode: Episode}) => {

  const imagePlaceHolder = "http://lorempixel.com/212/119/abstract/"


  return (<EpisodeWrapper>
    <Thumbnail src={episode?.image?.medium || imagePlaceHolder} alt={`thumbnail for ${episode.name}`} />
    <EpisodeName>
      {episode.number} {episode.name}
    </EpisodeName>
  </EpisodeWrapper>);
};

export default EpisodeDetail;
