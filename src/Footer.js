import React from "react";

export default function Footer() {
  return (
    <div
      className="Footer text-center border-top border-secondary-subtle m-3 mb-4 mb-sm-3 p-3 text-secondary pt-4
     text-opacity-75 smallFont"
    >
      This project was coded by{" "}
      <a
        className="link"
        href="https://github.com/Naruf"
        target="_blank"
        rel="noreferrer"
      >
        Nadia Ruiz
      </a>
      , is{" "}
      <a
        className="link"
        href="https://github.com/Naruf/react-weather-app-final-project"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on Github
      </a>{" "}
      and hosted on{" "}
      <a
        className="link"
        href="https://react-weather-app-final-project.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        Vercel
      </a>
    </div>
  );
}
