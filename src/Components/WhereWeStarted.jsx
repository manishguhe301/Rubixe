import React from "react";

const WhereWeStarted = () => {
  return (
    <div
      style={{
        marginTop: "60px",
        backgroundColor: "palevioletred",
        height: "200px",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <div style={{ marginRight: "15%", marginLeft: "15%" }}>
        <h1 style={{ textTransform: "uppercase" }}>Where We Started</h1>
        <p style={{ marginTop: "25px", fontWeight: 800, lineHeight: "30px" }}>
          We started in 2015, With a passionate team who want to bring
          game-changing solutions through disrupting technologies. We expertise
          in delivering enterprise-level solutions in the field of Artificial
          Intelligence (AI), Cyber Security, Robotic Process Automation (RPA),
          Internet of Things (IoT), and BlockChain technology.{" "}
        </p>
      </div>
    </div>
  );
};

export default WhereWeStarted;
