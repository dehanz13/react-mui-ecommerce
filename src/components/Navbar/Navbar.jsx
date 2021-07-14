import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  useScrollTrigger,
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/store.png";
import useStyles from "./styles";
import ScrollChange from "./ScrollChange";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ScrollChange>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className={classes.title}
              color="inherit"
            >
              <img
                src={logo}
                alt="My Store"
                height="25px"
                className={classes.image}
              />
              Danniel's Store
            </Typography>
            <div className={classes.grow} />
            <Typography
              component={Link}
              to="/about"
              variant="h6"
              color="inherit"
              className={classes.navbarItem}
            >
              About
            </Typography>
            <Typography
              component={Link}
              to="/products"
              variant="h6"
              color="inherit"
              className={classes.navbarItem}
            >
              Products
            </Typography>
            {location.pathname !== "/cart" && (
              <div className={classes.button}>
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show cart items"
                  color="inherit"
                >
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </ScrollChange>
      <div className={classes.toolbarMargin} />
    </ThemeProvider>
  );
};

export default Navbar;
