import React from "react";
import logo from "./nrf_badge_logo_cropped.png";
export default function Logo() {
  return (
    <div className="Logo ms-3 mt-3 ps-4 ">
      <span>
        <img src={logo} width="45px" alt="Logo" />
      </span>
      <span className="brand-name text-secondary ps-1 fs-6 text-end">
        {" "}
        Naruf Development
      </span>
    </div>
  );
}
