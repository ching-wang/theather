import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Season, Show } from "../../types";
import { apiGet } from "../../api/api";
import SeasonDetail from "./SeasonDetail";
import {
  Wrapper,
  ShowName,
  ShowCard,
  Poster,
  InfoTextBlock,
  InfoText,
  ImageBlock,
  DescText, Text,
} from "./show.styles";

export const ShowDetail = () => {
  const { showId } = useParams<{ showId: string }>();

  const [show, setShow] = useState<Show>();
  const [seasons, setSeasons] = useState<Array<Season>>();

  useEffect(() => {
    apiGet(`/shows/${showId}`).then((show) => setShow(show));
    apiGet(`/shows/${showId}/seasons`).then((seasons) => setSeasons(seasons));
  }, [showId]);

  console.log("show DETAILS,", show);

  return (
    <Wrapper>
      <ShowCard>
        <ImageBlock>
          <Poster alt="poster" src={show?.image?.medium} />
        </ImageBlock>
        <InfoTextBlock>
          <ShowName>{show?.name}</ShowName>
          <DescText>{String(show?.summary || "").replace(/(<([^>]+)>)/gi, "")}</DescText>
          <InfoText>
            <Text>Cast: {show?.genres}</Text>
            <Text>Status: {show?.status}</Text>
            <Text>Rating: {show?.rating?.average}</Text>
          </InfoText>
        </InfoTextBlock>
      </ShowCard>
      {seasons?.map((season) => (
        <SeasonDetail key={season.id} season={season} />
      ))}
    </Wrapper>
  );
};

export default ShowDetail;
