import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ButtonUnstyled from "@mui/core/ButtonUnstyled";
import Stack from "@mui/material/Stack";
import buttonUnstyledClasses from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";
const CustomButtonRoot = styled("button")`
  background-color: #007fff;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;
function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}
const CardDetails = () => {
  let { id } = useParams();
  const [cardData, setCardData] = useState({});
  const url = `https://api.spacexdata.com/v5/launches/${id}`;

  const fetchData = async () => {
    const launchesUpComing = await axios.get(url);
    setCardData(launchesUpComing.data);
    console.log("data card single page ", launchesUpComing);
  };
  console.log("card data", cardData);
  useEffect(() => {
    fetchData();
  }, []);
  const {
    name,
    flight_number,
    date_utc,
    details,
    // links,
    success,
    payload,
    rocket,
    youtube_id,
  } = cardData;
  // const img = links.patch.small
  console.log(cardData);
  return (
    <>
      <div className="container-details">
        <Card sx={{ minWidth: 300 }}>
          <CardContent>
            <h1>Launch Details</h1>

            <div className="flex-grid-column">
              <div className="col">
                <div className="flx">
                  <h3>Launch Name : </h3>
                  <h4>{name}</h4>
                </div>
              </div>
              <div className="col">
                <div className="flx">
                  <h4>Launch Date:</h4>
                  <h5>{date_utc}</h5>
                </div>
              </div>
              <div className="col">
                <div className="flx">
                  <h4>Flight Number:</h4>
                  <h5>{flight_number}</h5>
                </div>
              </div>
              <div className="col">
                <div className="flx">
                  <h4>Details:</h4>
                  <h5>{details}</h5>
                </div>
              </div>
              <div className="col">
                <div className="flx">
                  <h4>Success:</h4>
                  <h5>{success}</h5>
                </div>
              </div>
              <div className="col">
                <div className="flx">
                  <h4> List of payload:</h4>
                  <h5>{payload}</h5>
                </div>
              </div>
              <div className="col">
                <div className="flex-grid-column">
                  <h4> Youtube Iframe:</h4>

                  <iframe width="420" height="345" src={youtube_id}></iframe>
                </div>
              </div>
              <div className="col">
                <div className="flx">
                  <h4>Article link:</h4>
                  <h5>
                    <a href={youtube_id}>Article_Link</a>
                  </h5>
                </div>
              </div>
              <div className="col">
                <div className="flx">
                  <h4>Wikipedia link:</h4>
                  <h5>
                    <a href="https://en.wikipedia.org/wiki/DemoSat">
                      https://en.wikipedia.org/wiki/DemoSat
                    </a>
                  </h5>
                </div>
              </div>
              <div className="col">
                <div className="flx">
                  <h4>Rocket Name:</h4>
                  <h5>{rocket}</h5>
                </div>
              </div>
            </div>

            <Stack spacing={2} direction="row">
              <Link to="/past">
                {" "}
                <CustomButton>Back To Home</CustomButton>
              </Link>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CardDetails;
