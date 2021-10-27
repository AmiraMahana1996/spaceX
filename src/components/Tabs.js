import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Upcoming from './Upcoming';/
const TabsComponent = () => {
  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs centered textColor="secondary" indicatorColor="secondary">
          <Link to="/latest">
            <Tab label="Latest" />
          </Link>
          <Link to="/upcoming">
            <Tab label="Upcoming" />
          </Link>
          <Link to="/past">
            {" "}
            <Tab label="past" />
          </Link>
        </Tabs>
      </Box>
    </>
  );
};

export default TabsComponent;
