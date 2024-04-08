import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const ProductViewComponent = ({ product }) => {
  console.log("products", product);

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
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ 
              justifyContent:'center'

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
                  }}
                >
                  <div style={{ marginBottom: "10px" }}>{values.title}</div>
                  <img
                    src={values.images[1]}
                    width="220px"
                    style={{ border: "2px solid red" }}
                    alt={`Product ${index}`}
                  />
                  <div style={{ marginTop: "10px" }}>
                    {values.description}
                  </div>
                </Grid>
              ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default ProductViewComponent;
