import React from "react";
import styled from "styled-components";
import {
  Card,
  CardImage,
  CardLabel,
  DetailsRow,
  CardLabelContent,
} from "../styles/Cards";
const EpisodeLink = styled.a`
 cursor: pointer;
 color: inherit;
 text-decoration: none;

`;

export default function EpisodesCard(props: any) {
  // The description is insecure html,
  // I don't add it  directly to the DOM, so I remove the tags
  const noTagsDescription = props.description
    .replace("<p>", "")
    .replace("</p>", "").slice(0,40);

  console.log(props)
  return (
    <Card>
      <CardImage src={props.image}></CardImage>
      <CardLabel>
        <CardLabelContent>
          <EpisodeLink href={props.url}>{props.name}</EpisodeLink>
        </CardLabelContent>
      </CardLabel>
      <DetailsRow>Season: {props.season}</DetailsRow>
      <DetailsRow>Airtime: {props.airtime}</DetailsRow>
      <DetailsRow>Description : {noTagsDescription}...</DetailsRow>
    </Card>
  );
}
