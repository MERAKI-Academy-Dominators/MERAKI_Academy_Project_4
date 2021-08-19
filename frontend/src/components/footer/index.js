import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "fontsource-roboto";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Box>
        <Container>
          <Grid container spacing="5">
            <Grid item xs={12} sm={4}>
              <Box
                borderBottom={1}
                style={{ fontSize: "1rem", fontWeight: "bold" }}
              >
                Help
              </Box>
              <Box my={-1} mb={-3}>
                <Link
                  to="/"
                  color="inherit"
                  style={{ fontSize: "0.8rem", cursor: "pointer" }}
                >
                  Support
                </Link>
              </Box>
              <Box my={-1} mb={-3}>
                <Link
                  to="/"
                  color="inherit"
                  style={{ fontSize: "0.8rem", cursor: "pointer" }}
                >
                  Contact us
                </Link>
              </Box>
              <Box my={-1} mb={-3}>
                <Link
                  to="/"
                  color="inherit"
                  style={{ fontSize: "0.8rem", cursor: "pointer" }}
                >
                  Terms of Service
                </Link>
              </Box>
              <Box my={-1} mb={-3}>
                <Link
                  to="/"
                  color="inherit"
                  style={{ fontSize: "0.8rem", cursor: "pointer" }}
                >
                  Cookies Policy
                </Link>
              </Box>
              <Box my={-1} mb={-3}>
                <Link
                  to="/"
                  color="inherit"
                  style={{ fontSize: "0.8rem", cursor: "pointer" }}
                >
                  Data Policy
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box
                borderBottom={1}
                style={{ fontSize: "1rem", fontWeight: "bold" }}
              >
                Account
              </Box>
              <Box my={-1} mb={-3}>
                <Link
                  to="/"
                  color="inherit"
                  style={{ fontSize: "0.8rem", cursor: "pointer" }}
                >
                  Account
                </Link>
              </Box>
              <Box my={-1} mb={-3}>
                <Link
                  href="/Login"
                  color="inherit"
                  style={{ fontSize: "0.8rem", cursor: "pointer" }}
                >
                  Log In
                </Link>
              </Box>
              <Box my={-1} mb={-3}>
                <Link
                  href="/"
                  color="inherit"
                  style={{ fontSize: "0.8rem", cursor: "pointer" }}
                >
                  Register
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box
                borderBottom={1}
                style={{ fontSize: "1rem", fontWeight: "bold" }}
              >
                Donate
              </Box>
              <Box my={-1} mb={-3}>
                <Link
                  href="/WhoCanGiveBlood"
                  color="inherit"
                  style={{ fontSize: "0.8rem", cursor: "pointer" }}
                >
                  Frequently Asked
                </Link>
              </Box>
              <Box my={-1} mb={-3}>
                <Link
                  href="/Register"
                  color="inherit"
                  style={{ fontSize: "0.8rem", cursor: "pointer" }}
                >
                  Find Blood
                </Link>
              </Box>
              <Box my={-1} mb={-3}>
                <Link
                  to="/"
                  color="inherit"
                  style={{ fontSize: "0.8rem", cursor: "pointer" }}
                >
                  Donation Process
                </Link>
              </Box>
              <Box my={-1} mb={-3}>
                <Link
                  href="https://www.save.life/corona"
                  color="inherit"
                  style={{ fontSize: "0.8rem", cursor: "pointer" }}
                >
                  Corona Virus Live Tracker
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            pr={35}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: "0.8rem",
            }}
          >
            <Link color="inherit" href="https://www.facebook.com">
              <FacebookIcon style={{ cursor: "pointer" }} />
            </Link>

            <Link color="inherit" href="https://www.twitter.com">
              <TwitterIcon style={{ cursor: "pointer" }} />
            </Link>

            <Link color="inherit" href="https://www.instagram.com">
              <InstagramIcon style={{ cursor: "pointer" }} />
            </Link>
            <Link color="inherit" href="https://www.youtube.com">
              <YouTubeIcon style={{ cursor: "pointer" }} />
            </Link>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "0.8rem",
            }}

            borderTop={1}
          >
            <br />
            Copyright: © 2021 Dominators. All Rights Reserved
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
