import React, { useEffect, useState } from "react";
import { getTvShowAndCastData } from "./api/Api";
import Layout from "./components/Layout";

//For convenience I will store all state and stateSetters in the top component

function App() {
  const [tvShowAndCastData, setTvShowAndCastData] = useState({});
  const [buttonActive, setButtonActive] = useState(0);
  
  useEffect(() => {
    getTvShowAndCastData().then((res: any) => {
      // setTvShowAndCastData(res);
    });
  }, []);


  return (
    <Layout
      tvShowAndCastData={tvShowAndCastData}
      buttonActive={buttonActive}
      setButtonActive={setButtonActive}
    ></Layout>
  );
}

export default App;
