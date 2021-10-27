// import style App 
import './App.css';
//  import components 
// import Launches from './ components/ListCards';
import Latest from './components/Latest';
import Upcoming from './components/Upcoming';
import Past from './components/Past';
import Head from './components/Head';
import {BrowserRouter } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import TabsComponent from "./components/Tabs";
import CardDetails from './views/CardDetails';
function App() {
  return (
    <>
      <BrowserRouter>
        <Head />
        <TabsComponent />
        {/* <Launches/> */}
        <Switch>
          <Route exact path="/past">
            <Past />
          </Route>
          <Route exact path="/latest">
            <Latest />
          </Route>
          <Route exact path="/upcoming">
            <Upcoming />
          </Route>
          <Route exact path="/launches/:id">
            <CardDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
