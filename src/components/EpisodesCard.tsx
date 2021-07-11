import React from "react";
import styled from "styled-components";
import {
  Card,
  CardImage,
  CardLabel,
  CardLabelContent,
  DetailsRow,
} from "../styles/Cards";



export default function EpisodesCard(props: any) {
  return (
    <Card>
      <CardImage src={props.image}></CardImage>
      <CardLabel>
        <CardLabelContent>{props.name}</CardLabelContent>
      </CardLabel>
      <DetailsRow>Season: {props.season}</DetailsRow>
      <DetailsRow>Airtime: {props.airtime}</DetailsRow>
    </Card>
  );
}
