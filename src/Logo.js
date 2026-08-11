import React from "react";
import logo from "./nrf_badge_logo_cropped.png";
export default function Logo() {
  return (
    <div className="Logo ms-4 mt-3 ps-3">
      <p>
        <img src={logo} width="45px" alt="Logo" />
        <span className="brand-name text-secondary ps-1 fs-6">
          {" "}
          Naruf Development
        </span>
      </p>
    </div>
  );
}
