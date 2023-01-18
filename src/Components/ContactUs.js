import { Button, TextField } from "@mui/material";
import React from "react";
import BottomNav from "./BottomNav";

const ContactUs = () => {
  return (
    <>
      <div
        style={{
          marginRight: "15%",
          marginLeft: "15%",
          marginTop: "30px",
          border: "1px solid black",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "30%",
              marginLeft: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ textTransform: "uppercase" }}>get in touch</h1>
            <p style={{ width: "300px", textAlign: "center" }}>
              Please complete the form and we will get back to you
            </p>
          </div>
          <div
            style={{
              borderRight: "1px solid black",
              height: "250px",
              position: "absolute",
              left: "40%",
            }}
          ></div>
          <div
            style={{
              marginLeft: "10%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginRight: "10%",
            }}
          >
            <label style={{ marginTop: "20px" }}>Name</label>
            <TextField
              id="outlined-multiline-flexible"
              label="Enter Your Name"
              sx={{ width: "600px" }}
            />
            <label style={{ marginTop: "20px" }}>Email</label>
            <TextField
              id="outlined-multiline-flexible"
              label="Enter Your Email"
            />
            <label style={{ marginTop: "20px" }}>Mobile No.</label>
            <TextField
              id="outlined-multiline-flexible"
              label="Enter Your Number"
              style={{ marginBottom: "20px" }}
            />
            <Button variant="contained" sx={{ marginBottom: "20px" }}>
              Register Now
            </Button>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default ContactUs;
