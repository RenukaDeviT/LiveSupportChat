import { Container, Grid, styled } from "@mui/material";
import LeoraBackground from "ui/assets/images/LeoraBackground.png";
import Logo from "ui/assets/images/Leora-Logo-Blue.png";
import React from "react";

const SplashLoader = ({ children }: { children: React.ReactElement }) => (
    <Root>
      <Container className="Background-image">
        <Grid item xs={12} md={6} className="Grid-style">
            <div className="content">{children}</div>
            <div className="logoContainer">
              <div>
              <img className="logo" src={Logo} alt="Logo" />
              </div>
            </div>
        </Grid>
      </Container>
    </Root>
  );

export default SplashLoader;

const Root = styled("main")(({ theme }) => ({
  backgroundColor: "#212242",
  color: "#fff",
  overflow: "hidden",
  "& .Background-image": {
    backgroundImage: `url(${LeoraBackground})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`
  },
  "& .MuiContainer-root": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    position: "relative",
    maxWidth: "1280px",
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
    },
    [theme.breakpoints.down("md")]: {
      bottom: "85px",
      left: "75px",
    },
  },
  "& .imageContainer": {
    position: "relative",
  },
  "& .Grid-style": {
    width: "100%",
    alignSelf: "center",
    textAlign: "center",
    height: "100vh",
  },
  "& .logoContainer": {
    width: "100%",
    justifyContent: "end",
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
    fontSize: `14px`,    
    fontFamily: `'LexendDeca', sans-serif`,
    lineHeight: `3rem`,
    height: `85%`,
    alignContent: `center`,
    display: `grid`,
    [theme.breakpoints.down("md")]: {
      fontSize: `14px`,
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
