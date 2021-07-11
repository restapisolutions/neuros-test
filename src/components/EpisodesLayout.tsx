import React from "react";
import EpisodesCard from "./EpisodesCard";
import styled from "styled-components";

const EpisodesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-content: center;
`;

export default function EpisodesLayout(props: any) {
  function getCards() {
    const data = props.tvShowEpisodes;
    if (data !== undefined) {
      return data.map((ep: any) => {
        return (
          <EpisodesCard
            key={ep.image.medium}
            image={ep.image.medium}
            name={ep.name}
            description={ep.summary}
            season={ep.season}
            airtime={ep.airtime}
            url={ep.url} 
          ></EpisodesCard>
        );
      });
    }
    return <p>Loading</p>;
  }

  return <EpisodesContainer>{getCards()}</EpisodesContainer>;
}
