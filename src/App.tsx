import React, { useEffect, useState } from "react";
import { getTvShowAndCastData, getTvShowEpisodes } from "./api/Api";
import Layout from "./components/Layout";
import {filterCastData} from "./utils/Filter";
//For convenience I will store all state and stateSetters in the top component

export enum Country {
  None = "None",
  Canada = "Canada",
  US = "United States",
  HongKong = "Hong Kong",
  Pakistan = "Pakistan",
}

export enum Gender {
  None = "None",
  Male = "Male",
  Female = "Female",
}

export enum Alive {
  None= "None",
  Yes = "Yes",
  No = "No",
}

function App() {
  const [tvShowAndCastData, setTvShowAndCastData] = useState({});
  const [tvShowEpisodes, setTvShowEpisodes] = useState({});
  const [buttonActive, setButtonActive] = useState(0);
  const [filteringButtonPressed, setFilteringButtonPressed] = useState(false);

  const [castFilter, setCastFilter] = useState({
    country: Country.None,
    gender: Gender.Male,
    alive: Alive.Yes,
    birthday: "",
  });
  // Since the filtering has to update with a click, I store the applied state separately
  const [appliedCastFilter, setAppliedCastFilter] = useState({...castFilter});

  const applyCastFilter = () => {
    setAppliedCastFilter(castFilter);
     setFilteringButtonPressed(!filteringButtonPressed)
  };

  useEffect(() => {
    //I fetch all the date in the begining
    getTvShowAndCastData().then((res: any) => {
      setTvShowAndCastData(res);
    });
    getTvShowEpisodes().then((res) => {
      setTvShowEpisodes(res);
    });
  }, []);

  return (
    <Layout
      tvShowAndCastData={filterCastData(tvShowAndCastData,appliedCastFilter)}
      buttonActive={buttonActive}
      setButtonActive={setButtonActive}
      filteringButtonPressed={filteringButtonPressed}
      setFilteringButtonPressed={setFilteringButtonPressed}
      tvShowEpisodes={tvShowEpisodes}
      castFilter={castFilter}
      setCastFilter={setCastFilter}
      applyCastFilter={applyCastFilter}
    ></Layout>
  );
}



export default App;
