/* eslint-disable no-unused-vars */
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { BoxFlexColumnCenter, BoxImage } from "~/styles/globalStyle";
import imageAdapter6 from "~/assets/imageAdapter6.png";
const listAdapter = [
  {
    image: imageAdapter6,
  },
  {
    image: imageAdapter6,
  },
  {
    image: imageAdapter6,
  },
  {
    image: imageAdapter6,
  },
  {
    image: imageAdapter6,
  },
  {
    image: imageAdapter6,
  },
];
const AdapterSectionHomePage = () => {
  return (
    <Box>
      <BoxFlexColumnCenter>
        <Typography variant="h3">Chose your adapter</Typography>
        <Grid container>
          {listAdapter.map((item, index) => {
            return (
              <Grid item lg={4} key={index}>
                <BoxImage sx={{ width: "100%" }}>
                  <img src={item.image} alt="" />
                </BoxImage>
              </Grid>
            );
          })}
        </Grid>
        <Button variant="contained" sx={{ borderColor: "#ffff" }}>
          <Typography>Explore Now</Typography>
        </Button>
      </BoxFlexColumnCenter>
    </Box>
  );
};

export default AdapterSectionHomePage;
