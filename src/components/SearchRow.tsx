import React from "react";
import styled from "styled-components";
import { Country, Gender, Alive } from "../App";
type FilteringButtonProps = {
  pressed: boolean;
};

type FilteringPopupProps = {
  visible: boolean;
};

type CheckboxProps = {
  selected: boolean;
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
  margin-bottom: -10px;
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

const CheckBox = styled.div<CheckboxProps>`
  text-align: right;
  background: ${(props) => (props.selected ? "#189279" : "#c4c4c4")};
  width: 14px;
  height: 14px;
  margin-left: 20px;
  margin-right: 5px;
  cursor: pointer;
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

const GenderTitle = styled.p`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 140%;
  margin-top: 32px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const GenderButtonColumns = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  margin-right: 20px;
`;

const GenderIconButton = styled.img<CheckboxProps>`
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: ${(props) => (props.selected ? "1" : "0.3")};
`;
const GenderIconLabel = styled.p`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
  margin-left: -3px;
`;

const AliveBox = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
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
  font-size: 15px;
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
  border: 1px solid #c4c4c4;
  &:focus {
    outline: none;
  }
  -webkit-appearance: none;
  -moz-appearance: textfield;
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
  cursor: pointer;
`;
export default function SearchRow(props: any) {
  const filteringButtonPress = () => {
    props.setFilteringButtonPressed(!props.filteringButtonPressed);
  };

  const updatePress = () => {
    props.applyCastFilter();
    filteringButtonPress();
  };

  const setCountry = (to: Country) => {
    if (props.castFilter.country === to) {
      // If this is already selected, I turn it off
      props.setCastFilter({ ...props.castFilter, country: Country.None });
    } else {
      props.setCastFilter({ ...props.castFilter, country: to });
    }
  };

  const setGender = (to: Gender) => {
    if (props.castFilter.gender === to) {
      props.setCastFilter({ ...props.castFilter, gender: Gender.None });
    } else {
      props.setCastFilter({ ...props.castFilter, gender: to });
    }
  };

  const setAlive = (to: Alive) => {
    if (props.castFilter.alive === to) {
      props.setCastFilter({ ...props.castFilter, alive: Alive.None });
    } else {
      props.setCastFilter({ ...props.castFilter, alive: to });
    }
  };

  const setBirthday = (event: React.FormEvent<HTMLInputElement>) => {
    props.setCastFilter({
      ...props.castFilter,
      birthday: event.currentTarget.value,
    });
  };

  const search = (event: React.FormEvent<HTMLInputElement>) => {
    props.setCastFilter({
      ...props.castFilter,
      search: event.currentTarget.value,
    });
  };

  const getSelectedCountry = (current: Country) => {
    return current === props.castFilter.country;
  };

  const getSelectedGender = (current: Gender) => {
    return current === props.castFilter.gender;
  };
  const getSelectedAlive = (current: Alive) => {
    return current === props.castFilter.alive;
  };

  // The filter ui is tabbable and can be used with keyboard only, which is great for accessability
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      props.applyCastFilter();
    }
  };

  const handleDivEnters = (
    event: React.KeyboardEvent<HTMLDivElement>,
    name: string
  ) => {
    if (event.key === "Enter") {
      switch (name) {
        case Country.Canada:
          setCountry(Country.Canada);
          break;
        case Country.US:
          setCountry(Country.US);
          break;
        case Country.HongKong:
          setCountry(Country.HongKong);
          break;
        case Country.Pakistan:
          setCountry(Country.Pakistan);
          break;
        case Gender.Male:
          setGender(Gender.Male);
          break;
        case Gender.Female:
          setGender(Gender.Female);
          break;
        case Alive.Yes:
          setAlive(Alive.Yes);
          break;
        case Alive.No:
          setAlive(Alive.No);
          break;
        default:
          break;
      }
    }
  };

  return (
    <React.Fragment>
      <Row>
        <InputContainer>
          <LogoPlaceHolder src="/searchIcon.svg" />
          <Input
            onChange={search}
            onKeyDown={handleEnter}
            value={props.castFilter.search}
            placeholder={"Search for cast members"}
            id="search-input"
          />
        </InputContainer>
        <FilterContainer>
          <FilteringButton
            pressed={props.filteringButtonPressed}
            onClick={filteringButtonPress}
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
              <CheckBox
                tabIndex={0}
                onKeyDown={(e) => handleDivEnters(e, Country.Canada)}
                onClick={() => setCountry(Country.Canada)}
                selected={getSelectedCountry(Country.Canada)}
                id="country1"
              ></CheckBox>
              <CheckboxLabel htmlFor="country1">Canada</CheckboxLabel>
            </CheckBoxRow>
            <CheckBoxRow>
              <CheckBox
                tabIndex={0}
                id="country2"
                onKeyDown={(e) => handleDivEnters(e, Country.US)}
                onClick={() => setCountry(Country.US)}
                selected={getSelectedCountry(Country.US)}
              ></CheckBox>
              <CheckboxLabel htmlFor="country2">United states</CheckboxLabel>
            </CheckBoxRow>
            <CheckBoxRow>
              <CheckBox
                tabIndex={0}
                onKeyDown={(e) => handleDivEnters(e, Country.HongKong)}
                selected={getSelectedCountry(Country.HongKong)}
                id="country3"
                onClick={() => setCountry(Country.HongKong)}
              ></CheckBox>
              <CheckboxLabel htmlFor="country3">Hong Kong</CheckboxLabel>
            </CheckBoxRow>
            <CheckBoxRow>
              <CheckBox
                tabIndex={0}
                onKeyDown={(e) => handleDivEnters(e, Country.Pakistan)}
                selected={getSelectedCountry(Country.Pakistan)}
                id="country4"
                onClick={() => setCountry(Country.Pakistan)}
              ></CheckBox>
              <CheckboxLabel htmlFor="country4">Pakistan</CheckboxLabel>
            </CheckBoxRow>
          </CountryFilterBox>

          <Column>
            <GenderTitle>Gender</GenderTitle>
            <GenderRow>
              <GenderButtonColumns>
                <GenderIconButton
                  tabIndex={0}
                  onKeyDown={(e) => handleDivEnters(e, Gender.Male)}
                  onClick={() => setGender(Gender.Male)}
                  selected={getSelectedGender(Gender.Male)}
                  alt="male"
                  src="/face.svg"
                />
                <GenderIconLabel>Male</GenderIconLabel>
              </GenderButtonColumns>
              <GenderButtonColumns>
                <GenderIconButton
                  tabIndex={0}
                  onKeyDown={(e) => handleDivEnters(e, Gender.Female)}
                  onClick={() => setGender(Gender.Female)}
                  selected={getSelectedGender(Gender.Female)}
                  alt="female"
                  src="/face_unlock.svg"
                />
                <GenderIconLabel>Female</GenderIconLabel>
              </GenderButtonColumns>
            </GenderRow>
          </Column>
          <AliveBox>
            <Column>
              <AliveTitle>Alive</AliveTitle>
              <CheckBoxRow>
                <CheckBox
                  tabIndex={0}
                  onKeyDown={(e) => handleDivEnters(e, Alive.Yes)}
                  onClick={() => setAlive(Alive.Yes)}
                  selected={getSelectedAlive(Alive.Yes)}
                  id="aliveChechbox-yes"
                ></CheckBox>
                <CheckboxLabel>Yes</CheckboxLabel>
                <CheckBox
                  tabIndex={0}
                  onKeyDown={(e) => handleDivEnters(e, Alive.No)}
                  onClick={() => setAlive(Alive.No)}
                  selected={getSelectedAlive(Alive.No)}
                  id="aliveChechbox-no"
                ></CheckBox>
                <CheckboxLabel>No</CheckboxLabel>
              </CheckBoxRow>
            </Column>
          </AliveBox>
          <Column>
            <BirthdayText>
              <b>Birthday</b> (born before year)
            </BirthdayText>
            <YearInput
              type="number"
              value={props.castFilter.birthday}
              onChange={setBirthday}
              placeholder="1981"
            ></YearInput>
          </Column>
          <UpdateButton
            onKeyDown={handleEnter}
            tabIndex={0}
            onClick={updatePress}
          >
            Update
          </UpdateButton>
        </FilterSettings>
      </FilterPopup>
    </React.Fragment>
  );
}
