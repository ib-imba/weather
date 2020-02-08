import React from "react";
import styled from "@emotion/styled";

const Icon = props => {
  const State = styled.h3`
    font-family: "Merriweather", serif;
    font-size: 1.2rem;
  `;
  const Icon = styled.img`
    width: 35%;
    max-width: 62px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 100%;
  `;

  var icon = "";
  switch (props.condition) {
    case "Clouds":
      icon = `./icons/wi-cloudy.svg`;
      break;
    case "Clear":
      icon = `./icons/wi-day-sunny.svg`;
      break;
    case "Haze":
      icon = `./icons/wi-day-Haze.svg`;
      break;
    case "Hail":
      icon = `./icons/wi-hail.svg`;
      break;
    case "Fog":
      icon = `./icons/wi-fog.svg`;
      break;
    case "Tornado":
      icon = `./icons/wi-tornado.svg`;
      break;
    case "Dust":
      icon = `./icons/wi-dust.svg`;
      break;
    case "Mist":
      icon = `./icons/wi-day-fog.svg`;
      break;
    case "Snow":
      icon = `./icons/wi-snow.svg`;
      break;
    case "Rain":
      icon = `./icons/wi-rain.svg`;
      break;
    case "Drizzle":
      icon = `./icons/wi-sleet.svg`;
      break;
    case "Thunderstorm":
      icon = `./icons/wi-thunderstorm.svg`;
      break;
    default:
      icon = `./icons/wi-fog.svg`;
      break;
  }

  return (
    <>
      <State>Today {props.condition}</State>
      <Icon src={icon} alt="weather icon" />
    </>
  );
};

export default Icon;
