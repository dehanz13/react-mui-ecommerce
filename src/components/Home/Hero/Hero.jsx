import React from "react";
import {
  Container,
  Typography,
  CssBaseline,
  Button,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Hero = () => {
  const classes = useStyles();

  return (
    <section id="hero" className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item className={classes.heroTitle}>
          <Typography variant="h1" style={{ fontWeight: "800" }}>
            SALE
          </Typography>
        </Grid>
        <Grid item className={classes.heroDescription}>
          <Typography variant="h5">UP TO 40% OFF</Typography>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/products"
            className={classes.ctaButton}
            size="large"
            type="button"
            variant="outlined"
            // color="primary"
          >
            <Typography variant="h5">SHOP NOW</Typography>
          </Button>
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
