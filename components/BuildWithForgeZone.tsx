import React from "react";
import forgeLogo from "../public/forge-zone.png";
import Image from "next/image";

const BuildWithForgeZone = () => {
  return (
    <div className="badge-container grow">
      <a href="" target="_blank" rel="noreferrer">
        <div className="badge">
          <Image
            src={forgeLogo}
            className="logo"
            priority
            alt="forge zone logo"
          />
          <p>build with forge zone</p>
        </div>
      </a>
    </div>
  );
};

export default BuildWithForgeZone;
