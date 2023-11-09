/* eslint-disable no-unused-vars */
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { BoxFlexColumnCenter, BoxImage } from "~/styles/globalStyle";
import imageAdapter6 from "~/assets/images/imageAdapter6.png";
import ButtonOutlined from "~/components/CustomUi/ButtonOutlined";
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
        <Typography variant="h3" textAlign={'center'}>Chose your adapter</Typography>
        <Grid container spacing={{xs:'100px', lg:"0"}}>
          {listAdapter.map((item, index) => {
            return (
              <Grid item lg={4} sx={12} key={index}>
                <BoxImage sx={{ width: "100%" }}>
                  <img src={item.image} alt="" />
                </BoxImage>
              </Grid>
            );
          })}
        </Grid>
        <ButtonOutlined variant="contained" sx={{ borderColor: "#ffff" }}>
          <Typography>Explore Now</Typography>
        </ButtonOutlined>
      </BoxFlexColumnCenter>
    </Box>
  );
};

export default AdapterSectionHomePage;
