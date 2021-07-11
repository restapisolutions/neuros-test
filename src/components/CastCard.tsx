import React from "react";
import {
  Card,
  CardImage,
  CardLabel,
  DetailsRow,
  CardLabelContent,
} from "../styles/Cards";

export default function CastCard(props: any) {
  function getGender(gender: string) {
    if (gender === "Male") {
      return "/face.png";
    } else {
      return "./face_unlock.png";
    }
  }
  return (
    <Card>
      <CardImage src={props.img}></CardImage>
      <CardLabel>
        <CardLabelContent>{props.name}</CardLabelContent>
      </CardLabel>
      <DetailsRow>Country: {props.country}</DetailsRow>
      <DetailsRow>Birthday: {props.birthday}</DetailsRow>
      <DetailsRow>Character: {props.character}</DetailsRow>
    </Card>
  );
}
