import React from "react";
import { Typography, CssBaseline } from "@material-ui/core";

import useStyles from "./styles";

const About = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.content}>
        <div className={classes.toolbar}>
          <Typography variant="h2">About SECTION</Typography>
        </div>
      </div>
    </>
  );
};

export default About;
