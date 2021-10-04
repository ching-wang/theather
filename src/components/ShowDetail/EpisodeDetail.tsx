import React from "react";
import {Episode} from "../../types";
import {EpisodeWrapper, EpisodeName, Thumbnail} from "./show.styles";

const EpisodeDetail = ({episode}: {episode: Episode}) => {
  return (<EpisodeWrapper>
    <Thumbnail src={episode?.image?.medium} alt={`thumbnail for ${episode.name}`} />
    <EpisodeName>
      {episode.number} {episode.name}
    </EpisodeName>
  </EpisodeWrapper>);
};

export default EpisodeDetail;
