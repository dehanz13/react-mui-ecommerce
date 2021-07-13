import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => (
          <TextField {...field} fullWidth label={label} required={required} />
        )}
        // as={TextField}
        control={control}
        // fullWidth
        name={name}
        defaultValue=""
        // label={label}
        // required={required}
      />
    </Grid>
  );
};

export default FormInput;
