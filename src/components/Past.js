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
const Past = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [past, setPast] = useState([]);
  const urlPast = "https://api.spacexdata.com/v5/launches/past/";
  const fetchData = async () => {
    const launchesPast = await axios.get(urlPast);
    // console.log('Data Cards spacex : ', DataCards);
      setPast(launchesPast.data);
  };
  useEffect(() => {
    fetchData();
    //  set cards
  }, []);
  console.log("print data past ->", past);
  return (
    <>
      <div className="container">
        {past.map((item) => {
          console.log("item in map ", item);
          const {
            id,
            name,
            flight_number,
            date_utc,
            details,
            links,
            success,
            payload,
            rocket,
          } = item;
          const { large } = links.patch;

          return (
            <Link to={`/launches/${id}`}>
              <Card
                className="cardContent"
                sx={{ maxWidth: 460, maxHeight: 500 }}
              >
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
                  <CardContent>
                    <Typography paragraph>Details:</Typography>
                    <Typography paragraph>{details}</Typography>

                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
              <br />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Past;
