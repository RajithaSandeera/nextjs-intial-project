'use client';

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { add } from "@/store/cartSlice";

const ProductViewComponent = ({ product }) => {

  const dispatch = useDispatch();
  const cartValueView = useSelector((state) => state.cart);
  const handleCart = (product) => {
    dispatch(add(product))

  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          fontSize: "34px",
          fontFamily: "fantasy"
        }}
      >
        Product View
      </div>
      import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '2rem', paddingRight: '4rem' }}>
        <div style={{ marginRight: '1rem' }}>
          <ShoppingCartIcon sx={{ fontSize: '48px' }} />
        </div>
        <span style={{ fontSize: '24px', fontWeight: 'bold', alignSelf: 'center' }}>
          {cartValueView?.length}
        </span>
      </div>


      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{
            justifyContent: 'center'

          }}
        >
          {product &&
            product.length > 0 &&
            product.map((values, index) => (
              <Grid
                key={index}
                item
                xs={6}
                sm={3}
                md={3}
                style={{
                  padding: "20px",
                  margin: "4px",
                  display: "flex",
                  flexDirection: "column",
                  // alignContent:'center',
                  border: '3px solid red',
                  padding: '2px',
                  alignItems: 'center'
                }}
              >
                <div
                  style={{
                    marginBottom: "10px",
                    fontWeight: "bold",
                    fontSize: '2rem'
                  }}
                >
                  {values.title}
                </div>
                <img
                  src={values.images[1]}
                  width="220px"
                  style={{ border: "2px solid red" }}
                  alt={`Product ${index}`}
                />
                <div style={{ marginTop: "10px" }}>
                  {values.description}
                </div>
                <div style={{ marginTop: "20px" }}>
                  {values.brand}

                </div>
                <Button
                  style={{ padding: '8px', border: '1px solid black', borderRadius: '0.5rem', backgroundColor: '#e6555a', color: 'black' }} onClick={() => handleCart(values)}>Add to Cart</Button>

              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProductViewComponent;
