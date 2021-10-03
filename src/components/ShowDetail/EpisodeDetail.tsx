import React from "react";
import {Episode} from "../../types";

const EpisodeDetail = ({episode}: {episode: Episode}) => {
  return (<div>
    <h3>{episode.number}: {episode.name}</h3>
  </div>);
};

export default EpisodeDetail;
