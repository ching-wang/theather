import React, { useEffect, useState } from "react";
import { Episode, Season } from "../../types";
import { apiGet } from "../../api/api";
import EpisodeLink from "./EpisodeLink";
import {Title, SeasonWrapper, Content} from "./show.styles";

type Params = {
    season: Season,
    showId: string,
}

const SeasonEpisodes = ({season, showId} : Params) => {
  const [episodes, setEpisodes] = useState<Array<Episode>>([]);

  useEffect(() => {
    apiGet(`/seasons/${season.id}/episodes`).then((episodes) =>
      setEpisodes(
        episodes.sort(
          (a: Episode, b: Episode) =>
            Number(a.number || 0) - Number(b.number || 0)
        )
      )
    );
  }, [season.id]);

  return (
      <SeasonWrapper>
          <Title>
              Season {season.number} {season?.name}
          </Title>
          <Content>
              {episodes?.map((episode) => (
                  <EpisodeLink
                      key={episode.id}
                      episode={episode}
                      showId={String(showId)}
                      seasonId={String(season.id)}
                  />
              ))}
          </Content>
      </SeasonWrapper>

  );
};

export default SeasonEpisodes;
