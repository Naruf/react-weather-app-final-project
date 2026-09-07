import React from "react";
import logo from "./naruf-dev_logo_horizontal_trimmed.svg";
export default function Logo() {
  return (
    <div className="Logo ms-sm-2 mt-3 ps-4 ">
      <span>
        <img src={logo} width="180px" alt="Logo" />
      </span>
      {/* <span className="brand-name text-secondary ps-1 fs-6 text-end">
        {" "}
        Naruf Development
      </span> */}
    </div>
  );
}
