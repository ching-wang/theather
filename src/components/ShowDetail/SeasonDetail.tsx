import React, { useEffect, useState } from "react";
import { Episode, Season } from "../../types";
import { apiGet } from "../../api/api";
import EpisodeDetail from "./EpisodeDetail";

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
  }, []);

  return (
    <div>
      <h2>
        Season {season.number} {season?.name}
      </h2>
      {episodes?.map((episode) => (
        <EpisodeDetail key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default SeasonDetail;
