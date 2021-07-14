import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";

import Products from "../components/Products/Products";
import useStyles from "./styles";

const ProductPage = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Box className={classes.box}> */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography
          variant="h3"
          align="center"
          justifyContent="center"
          alignItems="center"
          className={classes.title}
        >
          Our Products
        </Typography>
      </Box>
      <div className={classes.productsSection}>
        <Products products={products} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};

export default ProductPage;
