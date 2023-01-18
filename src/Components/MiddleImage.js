import React from "react";
import Image from "../assests/Image.png";
import WhoWeAre from "./WhoWeAre";

const MiddleImage = () => {
  return (
    <div>
      <img src={Image} alt="" width={"100%"} style={{ marginTop: "5px" }} />
      <WhoWeAre />
    </div>
  );
};

export default MiddleImage;
