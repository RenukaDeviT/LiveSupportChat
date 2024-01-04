import { Container, Grid, styled } from "@mui/material";
import LeoraMeditating from "ui/assets/images/Leora-meditating.png";
import CloudTop from "ui/assets/images/Cloud-top.png";
import CloudMiddle from "ui/assets/images/Cloud-middle.png";
import Logo from "ui/assets/images/Logo.png";
import React from "react";

const SplashLoader = ({ children }: { children: React.ReactElement }) => (
    <Root>
      <Container>
        <Grid container alignContent="center">
          <Grid
            item
            xs={12}
            md={6}
            alignSelf="center"
            textAlign="center"
            className="imageContainer"
          >
            <img
              className="leoraImage floating"
              src={LeoraMeditating}
              alt="leora"
            />
            <img className="top hide-sm hide-md" src={CloudTop} alt="Logo" />
            <img className="middle " src={CloudMiddle} alt="Logo" />
          </Grid>
          <Grid item xs={12} md={6} >
            <div className="logoContainer">
              <img className="logo" src={Logo} alt="Logo" />
            </div>
            <div className="content">{children}</div>
          </Grid>
        </Grid>
      </Container>
    </Root>
  );

export default SplashLoader;

const Root = styled("main")(({ theme }) => ({
  backgroundColor: "#212242",
  color: "#fff",
  "& .MuiContainer-root": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    position: "relative",
    [theme.breakpoints.down("md")]: {      
      top: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "0px",
    },
  },
  "& .leoraImage": {
    maxWidth: "100%",
    width: "20rem",
    position: "relative",
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
      width: "7.5rem",
      right: "100px",
    },
  },
  "& .logo": {
    width: "10rem",
    zIndex: 2,
    [theme.breakpoints.up("md")]: {
      left: "9%",
    position: "relative",
    },
    [theme.breakpoints.down("md")]: {
      bottom: "85px",
      left: "75px",
    position: "relative",
    },
  },
  "& .imageContainer": {
    position: "relative",
  },
  "& .logoContainer": {
    width: "100%",
    justifyContent: "center",
    display: "flex",
    position: "relative",
  },
  "& .top": {
    position: "absolute",
    top: "10px",
    right: "128px",
    maxWidth: "100%",
  },
  "& .middle": {
    position: "absolute",
    left: "5%",
    bottom: "10px",
    [theme.breakpoints.down("md")]: {
      bottom: "50px",
      maxWidth: "25%",
      left: "23%",
    },
    [theme.breakpoints.down("sm")]: {
      bottom: "50px",
      maxWidth: "50%",
      left: "0%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .hide-sm": {
      display: "none",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .hide-md": {
      display: "none",
    },
  },
  "& .content": {
    fontSize: `2rem`,    
    fontFamily: `'Poppins', sans-serif`,
    lineHeight: `3rem`,
    [theme.breakpoints.down("md")]: {
      fontSize: `1rem`,
      lineHeight: `1.2rem`,
    },
  },
  "& .yellow": {
    color: "#f8cf0a",
  },
  // write floating animation styles here
  "& .floating": {
    animation: `floatAnimation 6s ease-in-out infinite`,
  },
}));
