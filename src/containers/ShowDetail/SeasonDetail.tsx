import React, { useEffect, useState } from "react";
import { Episode, Season } from "../../types";
import { apiGet } from "../../api/api";
import EpisodeDetail from "./EpisodeDetail";
import {Title, SeasonWrapper, Content} from "./show.styles";

const SeasonDetail = ({ season }: { season: Season }) => {
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
                  <EpisodeDetail key={episode.id} episode={episode} />
              ))}
          </Content>
      </SeasonWrapper>

  );
};

export default SeasonDetail;
