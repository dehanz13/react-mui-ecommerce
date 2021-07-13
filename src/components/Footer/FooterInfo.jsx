import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const FooterInfo = () => {
  const classes = useStyles();
  return (
    <section id="footer_info" className={classes.grow2}>
      <Container maxWidth="lg">
        <Grid container xs={12} justify="center">
          <Grid container item xs={4}>
            <Typography variant="h4" style={{ fontWeight: "500" }}>
              Commerce.js
            </Typography>
            <Grid container item xs={12}>
              <Grid item xs={5}>
                <a
                  href="https://commercejs.com/docs/"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant="body1" color="textSecondary">
                    Documentation
                  </Typography>
                </a>
              </Grid>
              <Grid item xs={5}>
                <a
                  href="https://commercejs.com/product/features/"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant="body1" color="textSecondary">
                    Features
                  </Typography>
                </a>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={5}>
                <a
                  href="https://commercejs.com/blog/introducing-commerce-js/"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant="body1" color="textSecondary">
                    About
                  </Typography>
                </a>
              </Grid>
              <Grid item xs={5}>
                <a
                  href="https://commercejs.com/docs/community/"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant="body1" color="textSecondary">
                    Community
                  </Typography>
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={4}>
            <Typography variant="h4" style={{ fontWeight: "500" }}>
              Follow us
            </Typography>
            <Grid container item xs={12}>
              <Grid item xs={4}>
                <a
                  href="https://twitter.com/dannielhansel"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant="body1" color="textSecondary">
                    Twitter
                  </Typography>
                </a>
              </Grid>
              <Grid item xs={4}>
                <a
                  href="https://commercejs.com/docs/"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant="body1" color="textSecondary">
                    Instagram
                  </Typography>
                </a>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={4}>
                <a
                  href="https://www.linkedin.com/in/dannielhansel/"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant="body1" color="textSecondary">
                    LinkedIn
                  </Typography>
                </a>
              </Grid>
              <Grid item xs={4}>
                <a
                  href="https://github.com/dehanz13"
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant="body1" color="textSecondary">
                    Github
                  </Typography>
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={4}>
            <Grid container item xs={12}>
              {/* <Newsletter /> */}
              <Grid
                item
                direction="column"
                justify="center"
                alignItems="center"
                xs={12}
              >
                <Grid item xs={12}>
                  <Typography variant="h5" style={{ fontWeight: "800" }}>
                    SIGN UP FOR OUR EMAILS
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" style={{ marginBottom: 20 }}>
                    Get can't-miss style news, before everybody else.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item style={{ display: "flex" }}>
                <TextField
                  id="email-signup"
                  variant="outlined"
                  fullWidth
                  placeholder="Email"
                />
                <Button
                  component={Link}
                  to="/"
                  className={classes.ctaButton}
                  size="small"
                  type="button"
                  variant="outlined"
                >
                  <Typography variant="body1">SUBMIT</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FooterInfo;
