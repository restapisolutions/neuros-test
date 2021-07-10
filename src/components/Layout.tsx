import React from "react";
import styled from "styled-components";
import CastLayout from "./CastLayout";
import EpisodesLayout from "./EpisodesLayout";
import SearchRow from "./SearchRow";
const LayoutBody = styled.div`
  height: 1024px;
  top: -512px;
  left: -720px;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

type ButtonProps = {
  active: boolean;
};

const Logo = styled.img`
  width: 110px;
  height: 143px;
  top: 18px;
  left: 17px;
`;

const Button = styled.button<ButtonProps>`
  margin-left: 8px;
  background: ${(props) =>
    props.active ? "#189279;" : "rgba(196,196,196,0.5);"};
  width: 210px;
  height: 34px;
  top: 110px;
  left: 141px;
  margin-bottom: 16px;
  border: none;
  font-family: "Roboto";
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  line-height: 23.44px;
  color: ${(props) => (props.active ? "#FFFFFF;" : "#000000;")};
`;

export default function Layout(props: any) {
  function handleClick(e: any) {
    if (e.target.name === "cast-button") {
      props.setButtonActive(0);
    } else if (e.target.name === "episodes-button") {
      props.setButtonActive(1);
    }
  }

  function getSection(props: any) {
    if (props.buttonActive === 0) {
      return <CastLayout {...props} />;
    } else if (props.buttonActive === 1) {
      return <EpisodesLayout {...props} />;
    }
  }

  return (
    <LayoutBody>
      <Menu>
        <Logo src="/logo.jpeg" />
        <Button
          active={props.buttonActive === 0}
          onClick={handleClick}
          name="cast-button"
        >
          Cast
        </Button>
        <Button
          active={props.buttonActive === 1}
          onClick={handleClick}
          name="episodes-button"
        >
          Episodes
        </Button>
      </Menu>
      <SearchRow {...props}></SearchRow>
      {getSection(props)}
    </LayoutBody>
  );
}
