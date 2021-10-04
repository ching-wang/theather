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
  min-height: 400px;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageBlock = styled.div`
  width: 50%;
  
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Poster = styled.img`
  width: 300px;
  padding: 10px;
`;

export const InfoTextBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  flex-direction: column;
  text-align: left;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
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
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: baseline;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ShowName = styled.p`
  font-size: 4rem;
  color: ${theme.palette.purple}
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${theme.palette.purple};
  text-align: left;
`;

// Episode
export const EpisodeWrapper = styled.div`
  padding: 2px;
  margin: auto 5px;
`;

export const EpisodeName = styled.p`
  font-size: 1.5rem;
`;

export const Thumbnail = styled.img`
  max-width: 100%;
  padding: 5px;
`;
