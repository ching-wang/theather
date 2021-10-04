import React from "react";
import {Episode} from "../../types";
import { EpisodeWrapper, EpisodeName} from "./show.styles";

const EpisodeDetail = ({episode}: {episode: Episode}) => {
  return (<EpisodeWrapper>
    <EpisodeName>
      {episode.number}: {episode.name}
    </EpisodeName>
  </EpisodeWrapper>);
};

export default EpisodeDetail;
