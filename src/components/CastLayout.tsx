import React from "react";
import CastCard from "./CastCard";
import styled from "styled-components";

const CastContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  margin-left: 15px;
  margin-right: 15px;
  align-content: center;
`;

export default function CastLayout(props: any) {
  function getCards() {
    const cast = props.tvShowAndCastData;
    if (cast.length > 0 ) {
      return cast.map((c: any) => {
        return (
          <CastCard
            key={c.character.id}
            name={c.person.name}
            country={c.person.country.name}
            birthday={c.person.birthday}
            character={c.character.name}
            img={c.character.image.medium}
            gender={c.person.gender}
          />
        );
      });
    } else {
      return <p>Loading</p>;
    }
  }

  return <CastContainer>{getCards()}</CastContainer>;
}
