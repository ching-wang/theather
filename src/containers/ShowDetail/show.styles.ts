import styled from "styled-components";
import { theme } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.palette.white};
  padding-top: 100px;
`;

export const ShowCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 50px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageBlock = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Poster = styled.img`
  width: 300px;
`;

export const InfoTextBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 60%;
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
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0px;
  
`;

export const Content = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: baseline;
  grid-gap: 10px 15px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ShowName = styled.p`
  font-size: 4rem;
  color: ${theme.palette.black}
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${theme.palette.black};
  text-align: left;
`;

// Episode
export const EpisodeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
`;

export const EpisodeName = styled.p`
  font-size: 1.5rem;
`;

export const Thumbnail = styled.img`
  max-width: 100%;
`;
