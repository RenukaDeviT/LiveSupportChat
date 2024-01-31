import { Container, Grid, styled } from "@mui/material";
import LeoraBackground from "ui/assets/images/LeoraBackground.png";
import Logo from "ui/assets/images/Leora-Logo-Blue.png";
import ErrorImage from "ui/assets/images/Error-Image.png";
import React from "react";

const ErrorLoader = ({ children }: { children: React.ReactElement }) => (
    <Root>
      <Container className="Background-image">
          <Grid item xs={12} md={6} className="Grid-style">
            <div className="imageContainer">
              <img className="image" src={ErrorImage} alt="Logo" />
              <p className="red"><b>Oops, Failed!</b></p>
            </div>
            <div className="content">{children}</div>
            <div className="logoContainer">
              <img className="logo" src={Logo} alt="Logo" />
            </div>
          </Grid> 
      </Container>
    </Root>
  );

export default ErrorLoader;

const Root = styled("main")(({ theme }) => ({
  backgroundColor: "#212242",
  color: "#fff",
  overflow: "hidden",
  "& .Background-image": {
    backgroundImage: `url(${LeoraBackground})`,
  },
  "& .MuiContainer-root": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    maxWidth: "1280px"
  },
  "& .Grid-style": {
    width: "100%",
    alignSelf: "center",
    textAlign: "center",
    height: "100vh",
    paddingTop: "50px"
  },
  "& .logo": {
    width: "10rem",
    zIndex: 2,
    marginBottom: "2rem",
  },
  "& .image": {
    width: "10rem",
    zIndex: 2,
  },
  "& .imageContainer": {
    width: "100%",
  },
  "& .logoContainer": {
    width: "100%",
    justifyContent: "right",
    display: "flex",
    bottom: "0px",
    right: "20px",
    position: "fixed"
  },
  [theme.breakpoints.down("md")]: {
    "& .hide-sm": {
      display: "none",
    },
  },
  [theme.breakpoints.up("md")]: {
    "& .hide-md": {
      display: "none",
    },
  },
  "& .content": {
    fontSize: "14px", 
    color: "#000000",   
    fontFamily: `'LexendDeca', sans-serif`,
    lineHeight: `1.5rem`,
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: `1.5rem`,
    },
  },
  "& .red": {
    fontSize: "16px", 
    color: "#ff0000",
    fontFamily: `'LexendDeca', sans-serif`,
  }
}));
