import React from "react";
import Card from "../assests/Card.png";
import ContactUs from "./ContactUs";

const TechForTeens = () => {
  return (
    <div>
      <div>
        <img src={Card} alt="" width={"100%"} />
        <ContactUs />
      </div>
    </div>
  );
};

export default TechForTeens;
