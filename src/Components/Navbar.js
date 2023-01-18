import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Logo from "../assests/rubixe-favicon.png";
import MiddleImage from "./MiddleImage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Navbar = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={Logo} alt="logo" width={"100px"} />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "2.5rem",
                        letterSpacing: "5px",
                      }}
                    >
                      Rubixe
                    </span>
                    <hr style={{ marginTop: "0px" }} />
                    <span style={{ fontSize: "10px" }}>
                      Disruptive Technologies At Work
                    </span>
                  </div>
                </div>
              </Typography>
              <Button color="inherit" style={{ fontSize: "1rem" }}>
                Home
              </Button>
              <Button color="inherit" style={{ fontSize: "1rem" }}>
                Services
              </Button>
              <Button color="inherit" style={{ fontSize: "1rem" }}>
                Products
              </Button>
              <Button color="inherit" style={{ fontSize: "1rem" }}>
                AI Internship
              </Button>
              <Button color="inherit" style={{ fontSize: "1rem" }}>
                Career
              </Button>
              <Button color="inherit" style={{ fontSize: "1rem" }}>
                Blog
              </Button>
              <Button color="inherit" style={{ fontSize: "1rem" }}>
                About
              </Button>
              <Button color="inherit" style={{ fontSize: "1rem" }}>
                Contact us
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
      <MiddleImage />
    </>
  );
};
export default Navbar;
