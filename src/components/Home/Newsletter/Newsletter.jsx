import React from "react";
import {
  Container,
  Typography,
  CssBaseline,
  Button,
  Grid,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

import FormInput from "./FormInput";
import useStyles from "./styles";

const Newsletter = () => {
  const classes = useStyles();
  const methods = useForm();

  const handleSubmit = () => {
    console.log("Your email has been submitted!");
  };
  return (
    <section id="info_section" className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h5" style={{ fontWeight: "800" }}>
              SIGN UP FOR OUR EMAILS
            </Typography>
          </Grid>
          <Grid item>
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
        {/* <FormProvider {...methods}>
          <form onSubmit={handleSubmit}>
            <Grid container style={{ display: "flex" }}>
              <FormInput name="email" label="Email" />
              <Button
                component={Link}
                to="/products"
                className={classes.ctaButton}
                size="small"
                type="button"
                variant="outlined"
              >
                <Typography variant="body1">SHOP NOW</Typography>
              </Button>
            </Grid>
          </form>
        </FormProvider> */}
      </Grid>
    </section>
  );
};

export default Newsletter;
