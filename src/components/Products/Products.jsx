import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import usestyles from "./styles";

// const products = [
//   {
//     id: 1,
//     name: "Shoes",
//     description: "Running shoes.",
//     price: "$100",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7ZufwC7zkgjpyfJmaasX2SqEgZdGfal4SQ&usqp=CAU",
//   },
//   {
//     id: 2,
//     name: "Shirt",
//     description: "Graphic T-Shirt.",
//     price: "$70",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgR6bkLqhmRv_1ytAmMMViL6zD6KAhPfaIw&usqp=CAU",
//   },
//   {
//     id: 3,
//     name: "Shirt",
//     description: "Graphic T-Shirt.",
//     price: "$70",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5252wW-dNVSFilA0mMiGGieaZ2bEYSbdm5w_jjTBPmrhuy20bjt-Hd5wdgTTVDkxaw_av70&usqp=CAc",
//   },
//   {
//     id: 4,
//     name: "Shirt",
//     description: "Graphic T-Shirt.",
//     price: "$70",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKlpeu2m5NmvG0rrUzBdVESwf9KzvEmhgE_wltl0kde78MY7EWRe72FxZuEQTnaExTrMi6XQ&usqp=CAc",
//   },
//   {
//     id: 5,
//     name: "Shirt",
//     description: "Graphic T-Shirt.",
//     price: "$70",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3doUOIJsvNCBwxWYXtbHAaKXXV5dKh2jtPX6f5R-2g6FzR3B5fmlLox90E3ejX9UetAdfp5VZ&usqp=CAc",
//   },
//   {
//     id: 6,
//     name: "Shirt",
//     description: "Graphic T-Shirt.",
//     price: "$70",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFnxm8974VOVED6ifwwT4TBRtwXRcE0BeBwg1qYP556b6318PN0f88sjYJaV5jV4WmWisoxMC&usqp=CAc",
//   },
//   {
//     id: 7,
//     name: "Jacket",
//     description: "Graphic Hoodie.",
//     price: "$120",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjuFwo1CXPl2X1z3OY3Kbk1vye1QTT33yHQ&usqp=CAU",
//   },
//   {
//     id: 8,
//     name: "Jacket",
//     description: "Graphic Hoodie.",
//     price: "$120",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFnPNYrXceufviaAkwiNrOx_lNCYzxjdfHSiK51ZbuF-Os7Z1BDMrtzUetenF1oFdIAli2uY&usqp=CAc",
//   },
//   {
//     id: 9,
//     name: "Jacket",
//     description: "Graphic Hoodie.",
//     price: "$120",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsuHD4Re7dzVHqbbpkUspb8nvcQsLpQxitmw&usqp=CAU",
//   },
//   {
//     id: 10,
//     name: "Jacket",
//     description: "Graphic Hoodie.",
//     price: "$120",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHlvVfIcOm8RwV8T_8R9_C69j2F0pZaScog&usqp=CAU",
//   },
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = usestyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
