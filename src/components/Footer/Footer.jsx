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
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import useStyles from "./styles";
import Newsletter from "../Home/Newsletter/Newsletter";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  const classes = useStyles();

  return (
    <section id="footer" className={classes.grow}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          justify="center"
          // className={classes.footerContainer}
        >
          <Grid item>
            <Typography
              variant="h6"
              className={classes.title}
              style={{ fontWeight: "500" }}
            >
              &copy; 2021 Danniel's Store
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;
