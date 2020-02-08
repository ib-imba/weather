import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Condition from "./Condition";
import Icon from "./Icon";

const WeatherCard = ({ temp, condition, city, country, message }) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if (temp > 12) {
    // This is for hot weather
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to bottom,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    )`;
  } else if (temp <= 12) {
    // This is for cold weather
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to bottom,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 155)
    )`;
  } else if (message) {
    bg = `linear-gradient(
      to top,
      #75EDD1,
      #091423
    )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  `;

  const icon = `./images/moon.svg`;

  if (!message) {
    return (
      <Card>
        <Location city={city} country={country} />
        <Icon condition={condition} />
        <Condition temp={temp} condition={condition} />
      </Card>
    );
  } else {
    return (
      <Card>
        <img src={icon} alt="moon" width="62" height="62" />
        <div>{message} - Type a city.</div>
      </Card>
    );
  }
};

export default WeatherCard;
