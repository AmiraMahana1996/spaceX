import React, { useEffect, useState } from "react";
import axios from "axios";
import Latest from "./Latest";
import Upcoming from "./Upcoming";
import Past from "./Past";
const Launches = () => {
 
  const [latest, setLatest] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [past, setPast] = useState([]);
  const urlLatest = "https://api.spacexdata.com/v5/launches/latest/";
  const urlUpComing = "https://api.spacexdata.com/v5/launches/upcoming/";
  const urlPast = "https://api.spacexdata.com/v5/launches/past/";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const launchesLatest = await axios.get(urlLatest);
    const launchesUpComing = await axios.get(urlUpComing);
    const launchesPast = await axios.get(urlPast);
    // console.log('Data Cards spacex : ', DataCards);
    setLatest(launchesLatest.data);
    setUpComing(launchesUpComing.data);
    setPast(launchesPast.data);
    // cards.push(DataCards.data);
  };
  useEffect(() => {
    fetchData();
    //  set cards
  }, []);
  //  print data endpoint
  console.log("print data latest ->", latest);

  console.log("print data upcomign ->", upcoming);

  console.log("print data past ->", past);
  return (
    <>
      <Latest latest={latest} />
      <Past past={past} />
      <Upcoming upcoming={upcoming} />
    </>
  );
};

export default Launches;
