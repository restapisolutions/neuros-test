import React from "react";
import styled from "styled-components";

//The layout is a column with 3 rows

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
  background: ${(props) =>
    props.active ? "#189279;" : "rgba(196,196,196,0.5);"};
  width: 210px;
  height: 34px;
  top: 110px;
  left: 141px;
  margin-bottom: 16px;
`;


export default function Layout(props: any) {
  function handleClick(e : any){
    console.log(e);
  }

  return (
    <React.Fragment>
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
           active={props.episodesActive === 1}
          onClick={handleClick}
	  name="Episodes-button"
        >
          Episodes
        </Button>
      </Menu>
    </React.Fragment>
  );
}
