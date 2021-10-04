import styled from "styled-components";
import { theme } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: antiquewhite;
  padding-top: 100px;
`;

export const ShowCard = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  background: lightblue;
  box-shadow: ${theme.shadow};
  justify-content: space-between;
`;

export const ImageBlock = styled.div`
  width: 50%;
`;

export const Poster = styled.img`
  width: 300px;
  padding: 20px;
`;

export const InfoTextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 50%;
  flex-direction: column;
`;

export const InfoText = styled.div`
  font-size: 1rem;
  color: red;
`;

// Season
export const SeasonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: antiquewhite;
  border-bottom: 1px solid purple;
  margin-bottom: 20px;
`;

export const ShowName = styled.p`
  font-size: 3rem;
  color: purple;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: blue;
`;

// Episode
export const EpisodeWrapper = styled.div`
  background: pink;
  padding: 10px;
  margin: 5px auto;
`;

export const EpisodeName = styled.p`
  background: aquamarine;
  font-size: 1.5rem;
`;
