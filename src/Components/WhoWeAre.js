import React from "react";
import Image from "../assests/Lessonsbig13jan2023.jpg";
import TechForTeens from "./TechForTeens";
import WhereWeStarted from "./WhereWeStarted";

const WhoWeAre = () => {
  return (
    <>
      <div
        style={{
          marginRight: "15%",
          marginLeft: "15%",
          marginTop: "40px",
        }}
      >
        <h1>WHO WE ARE</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginTop: "25px",
              fontWeight: 800,
              lineHeight: "30px",
            }}
          >
            <p style={{ wordSpacing: "8px" }}>
              Rubixe<sup>TM</sup> is a global technology company specializing in
              disruptive technologies - Artificial Intelligence (AI), Machine
              Learning, Robotic Process Automation (RPA), BlockChain, and
              Internet of Things(IoT).
            </p>
            <p style={{ wordSpacing: "8px", marginTop: "20px" }}>
              Rubixe<sup>TM</sup> mission is to anable businesses to leverage
              the full potential of disruptive technologies and stay competative
              in the market, turning complex challenges into solutions,
              providing a strategic competitive advantage that are more
              efficient, effective and predictable
            </p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <div
              style={{
                width: "250px",
                height: "4px",
                backgroundColor: "palevioletred",
                marginBottom: "8px",
              }}
            ></div>
            <img
              src={Image}
              alt=""
              width={"400px"}
              style={{ marginBottom: 0 }}
            />
          </div>
        </div>
      </div>
      <WhereWeStarted />
      <TechForTeens/>
    </>
  );
};

export default WhoWeAre;
