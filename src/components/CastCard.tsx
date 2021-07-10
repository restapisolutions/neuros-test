import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 180px;
  height: 237px;
  left: 30px;
  top: 245px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
`;

const CardImage = styled.img`
  width: 180px;
  height: 180px;
  left: 30px;
  top: 245px;
  background: #c4c4c4;
`;

const CardLabel = styled.div`
  width: 180px;
  height: 35px;
  left: 30px;
  top: 402px;
  background: #189279;
  text-align: left;
  padding-botton: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardLabelContent = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;

const DetailsRow = styled.div`
  width: 137px;
  height: 14px;
  left: 33px;
  top: 430px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
`;
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


