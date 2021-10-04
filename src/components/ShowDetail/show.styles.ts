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
`;

export const InfoTextBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  flex-direction: column;
  text-align: left;
  padding: 20px;
`;

export const DescText = styled.p`
    font-size: 1.5rem;
    text-align: left;
    margin: 20px auto;
`

export const InfoText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.span`
  text-align: left;
  font-size: 1.6rem;
`

// Season
export const SeasonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: antiquewhite;
  border-bottom: 1px solid purple;
  margin-bottom: 20px;
`;

export const ShowName = styled.p`
  font-size: 4rem;
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
