import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// card
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const Upcoming = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [upcoming, setUpComing] = useState([]);
  const urlUpComing = "https://api.spacexdata.com/v5/launches/upcoming/";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const launchesUpComing = await axios.get(urlUpComing);
    // console.log('Data Cards spacex : ', DataCards);
    setUpComing(launchesUpComing.data);
    // cards.push(DataCards.data);
  };
  useEffect(() => {
    fetchData();
    //  set cards
  }, []);
  //  print data endpoint
  console.log("print data upcomign ->", upcoming);
  return (
    <>
      <div className="container">
        {upcoming.map((item) => {
          console.log("item in map ", item);
          const {
            id,
            name,
            flight_number,
            date_utc,
            // details,
            links,
            // success,
            // payload,
            // rocket,
          } = item;
          const { large } = links.patch;

          return (
            <Link to={`/launches/${id}`}>
              <Card className="cardConten" sx={{ maxWidth: 370 }}>
                <CardHeader title={name} subheader={date_utc} />
                <CardMedia
                  component="img"
                  height="150"
                  image={large}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <h3>Fleight Number :{flight_number}</h3>
                    <h3>Details:</h3>
                    <p>
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests.
                    </p>
                    {/* <p>{details}</p> */}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent></CardContent>
                </Collapse>
              </Card>
              <br />
            </Link>
          );
        })}
      </div>
      {/*  */}
    </>
  );
};

export default Upcoming;
