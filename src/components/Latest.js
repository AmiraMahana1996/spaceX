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
const Latest = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [latest, setLatest] = useState({});
  const urlLatest = "https://api.spacexdata.com/v5/launches/latest";

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const launchesLatest = await axios.get(urlLatest);
    // console.log('Data Cards spacex : ', DataCards);
    setLatest(launchesLatest.data);

    // cards.push(DataCards.data);
  };
  useEffect(() => {
    fetchData();
    //  set cards
  }, []);
  let {
    id,
    name,
    flight_number,
    date_utc,
    details,
    // links,
    // success,
    // payload,
    // rocket,
  } = latest;
  // const {patch} = links.patch;
  //  print data endpoint
  console.log("print data latest ->", latest);
  // const {} = latest;
  // console.log('links ', links.patch.small);

  // let { small } = links.patch;
  console.log("links -> ");
  return (
    <>
      <div className="container">
        <Link to={`/launches/${id}`}>
          <Card className="cardConten" sx={{ maxWidth: 460 }}>
            <CardHeader title={name} subheader={date_utc} />
            <CardMedia component="img" height="150" alt="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <h3>Fleight Number :{flight_number}</h3>
                <h3>Details:</h3>
                <p>{details}</p>
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
        </Link>
      </div>
    </>
  );
};

export default Latest;
