import React,{useEffect,useState} from 'react';
import axios  from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Latest from './Latest';
import Upcoming from './Upcoming';
import Past from './Past';
const Launches = () => {
    let   history = useHistory();
    const [latest, setLatest] = useState([]);
    const [upcoming,setUpComing] = useState([]);
    const [past , setPast ] = useState([]);
    const urlLatest = "https://api.spacexdata.com/v5/launches/latest/";
    const urlUpComing = "https://api.spacexdata.com/v5/launches/upcoming/";
    const urlPast = "https://api.spacexdata.com/v5/launches/past/";
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
        const fetchData  = async () => {
            const launchesLatest = await axios.get(urlLatest);
            const launchesUpComing = await axios.get(urlUpComing);
            const launchesPast = await axios.get(urlPast);
            // console.log('Data Cards spacex : ', DataCards);
            setLatest(launchesLatest.data);
            setUpComing(launchesUpComing.data);
            setPast(launchesPast.data);
            // cards.push(DataCards.data);
        }
    useEffect(()=>{
        fetchData();
        //  set cards 
    },[]);
    //  print data endpoint 
    console.log('print data latest ->', latest);
     
    console.log('print data upcomign ->', upcoming);
    
    console.log('print data past ->', past);
    
    //  print data endpoint 
    // console.log('print data Links ', cards.links);
    
    // cards.links.forEach((item) => {
    //     console.log('name item ->',item.name);
    // });
    // let mo = cards.cores;
    
    // onClick push id in url 
    // const pushId = (id) => {
    //    history.push(`/launches/${id}`);
    // }
    
    
    return (
        <>
          <Latest latest={latest}/>
          <Past past={past}/>
          <Upcoming upcoming={upcoming}/>

        </>
    )
}

export default Launches;
