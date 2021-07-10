import React from "react";
import styled from "styled-components";
type FilteringButtonProps = {
  pressed: boolean;
};

type FilteringPopupProps = {
  visible: boolean;
};

// This is the row containing the search bar and the filtering button
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-left: 15px;
  z-index: 2;
`;

const LogoPlaceHolder = styled.img`
  width: 17.05px;
  height: 17.06px;
  left: 3px;
  top: 3px;
  margin-top: 8px;
  margin-left: 5px;
`;

//This contains the search bar an the icon
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 717px;
  height: 34px;
  left: 30px;
  top: 182px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;

const FilteringButton = styled.button<FilteringButtonProps>`
  display: flex;
  flex-direction: row;
  width: 87px;
  height: 42px;
  left: 1339px;
  top: 182px;
  border: none;
  background: white;
  border-top: ${(props) => (props.pressed ? "1px solid #C4C4C4" : "none")};
  border-left: ${(props) => (props.pressed ? "1px solid #C4C4C4" : "none")};
  border-right: ${(props) => (props.pressed ? "1px solid #C4C4C4" : "none")};
  z-index: 9;
`;

const FilteringLogo = styled.img`
  margin-top: 7px;
`;

const FilteringLabel = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: #000000;
`;

const FilterContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const FilterPopup = styled.div<FilteringPopupProps>`
  position: absolute;
  display: ${(props) => (props.visible === true ? "block" : "none")};
  z-index: 1;
  height: 502px;
  width: 230px;
  float: right;
  right: 0;
  background: #fefefe;
  border: 1px solid #c4c4c4;
  border-top: none;
  box-sizing: border-box;
  top: 180px;
`;

const HalfBorderTop = styled.div`
  border-top: 1px solid #c4c4c4;
  position: absolute;
  width: 142px;
`;

const FilterSettings = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountryFilterBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterTitle = styled.p`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 140%;
  margin-top: 32px;
  margin-left: 20px;
  margin-bottom: 6px;
`;

const CheckBox = styled.div`
  text-align: right;
  background-color: #c4c4c4;
  background: #c4c4c4;
  width: 14px;
  height: 14px;
  margin-left: 20px;
  margin-right: 5px;
`;

const CheckboxLabel = styled.label`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
  float: left;
`;

const CheckBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 7px;
`;

const GenderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const GenderButtonColumns = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  margin-right: 20px;
`;

const GenderIconButton = styled.img`
  width: 20px;
  height: 20px;
`;
const GenderIconLabel = styled.p`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
`;

const AliveBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const AliveTitle = styled.p`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 140%;
  margin-left: 22px;
  margin-bottom: 6px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const BirthdayText = styled.p`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-size: 14px;
  line-height: 140%;
  margin-top: 20px;
  margin-left: 24px;
  margin-right: 32px;
  margin-bottom: 7px;
`;

const YearInput = styled.input`
  height: 32px;
  margin-left: 24px;
  margin-right: 36px;
  border: 1px solid #C4C4C4;
  &:focus {
    outline: none;
  }
`;

const UpdateButton = styled.div`
  margin-left: 8px;
  margin-bottom: 16px;
  margin-top: 29px;
  background: #189279;
  width: 210px;
  height: 34px;
  top: 110px;
  left: 141px;
  border: none;
  font-family: "Roboto";
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  line-height: 23.44px;
  color: white;
  text-align: center;
  padding-top: 6px;
`
export default function SearchRow(props: any) {
  return (
    <React.Fragment>
      <Row>
        <InputContainer>
          <LogoPlaceHolder src="/searchIcon.svg" />
          <Input placeholder={"Search for cast members"} id="search-input" />
        </InputContainer>
        <FilterContainer>
          <FilteringButton
            pressed={props.filteringButtonPressed}
            onClick={() =>
              props.setFilteringButtonPressed(!props.filteringButtonPressed)
            }
          >
            <FilteringLogo src="/filteringIcon.png"></FilteringLogo>
            <FilteringLabel>Filtering</FilteringLabel>
          </FilteringButton>
        </FilterContainer>
      </Row>
      <FilterPopup visible={props.filteringButtonPressed}>
        <HalfBorderTop></HalfBorderTop>
        <FilterSettings>
          <CountryFilterBox>
            <FilterTitle>Country</FilterTitle>
            <CheckBoxRow>
              <CheckBox id="country1"></CheckBox>
              <CheckboxLabel htmlFor="country1">Canada</CheckboxLabel>
            </CheckBoxRow>
            <CheckBoxRow>
              <CheckBox id="country2"></CheckBox>
              <CheckboxLabel htmlFor="country2">United states</CheckboxLabel>
            </CheckBoxRow>
            <CheckBoxRow>
              <CheckBox id="country3"></CheckBox>
              <CheckboxLabel htmlFor="country3">Hong Kong</CheckboxLabel>
            </CheckBoxRow>
            <CheckBoxRow>
              <CheckBox id="country4"></CheckBox>
              <CheckboxLabel htmlFor="country4">Pakistan</CheckboxLabel>
            </CheckBoxRow>
          </CountryFilterBox>

          <Column>
            <FilterTitle>Gender</FilterTitle>
            <GenderRow>
              <GenderButtonColumns>
                <GenderIconButton alt="male" src="/face.svg" />
                <GenderIconLabel>Male</GenderIconLabel>
              </GenderButtonColumns>
              <GenderButtonColumns>
                <GenderIconButton alt="male" src="/face_unlock.svg" />
                <GenderIconLabel>Female</GenderIconLabel>
              </GenderButtonColumns>
            </GenderRow>
          </Column>
          <AliveBox>
            <Column>
              <AliveTitle>Alive</AliveTitle>
              <CheckBoxRow>
                <CheckBox id="aliveChechbox-yes"></CheckBox>
                <CheckboxLabel>Yes</CheckboxLabel>
                <CheckBox id="aliveChechbox-no"></CheckBox>
                <CheckboxLabel>No</CheckboxLabel>
              </CheckBoxRow>
            </Column>
          </AliveBox>
          <Column>
            <BirthdayText>
              <b>Birthday</b> (born before year)
            </BirthdayText>
            <YearInput placeholder="1981"></YearInput>
          </Column>

          <UpdateButton>Update</UpdateButton>
        </FilterSettings>
      </FilterPopup>
    </React.Fragment>
  );
}
