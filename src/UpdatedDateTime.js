import React from "react";

export default function UpdatedDateTime({ date }) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
  ];
  let day = date.getDay();
  let today = weekdays[day];
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  return (
    <span>
      {today} {hours}:{minutes}h,{" "}
    </span>
  );
}
