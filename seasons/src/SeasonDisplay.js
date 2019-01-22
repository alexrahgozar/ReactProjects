import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    message: "It's very hot today!",
    iconName: "sun"
  },
  winter: {
    message: "It's freezing outside",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { message, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left huge ${iconName} icon`} />
      <h2>{message}</h2>
      <i className={`icon-right huge ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
