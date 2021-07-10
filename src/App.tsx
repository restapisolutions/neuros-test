import React, { useEffect, useState } from "react";
import { getTvShowAndCastData, getTvShowEpisodes } from "./api/Api";
import Layout from "./components/Layout";

//For convenience I will store all state and stateSetters in the top component

enum FilterCountryCheckboxState {
  None,
  Canada,
  US,
  HongKong,
  Pakistan,
}

function App() {
  const [tvShowAndCastData, setTvShowAndCastData] = useState({});
  const [tvShowEpisodes, setTvShowEpisodes] = useState({});
  const [buttonActive, setButtonActive] = useState(0);
  const [filteringButtonPressed, setFilteringButtonPressed] = useState(false);

  const [filterCountryCheckbox, setFilterCountryCheckbox] = useState(
    FilterCountryCheckboxState.None
  );

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
      tvShowAndCastData={tvShowAndCastData}
      buttonActive={buttonActive}
      setButtonActive={setButtonActive}
      filteringButtonPressed={filteringButtonPressed}
      setFilteringButtonPressed={setFilteringButtonPressed}
      tvShowEpisodes={tvShowEpisodes}
    ></Layout>
  );
}

export default App;
