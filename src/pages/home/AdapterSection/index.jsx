/* eslint-disable no-unused-vars */
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { BoxFlexColumnCenter, BoxImage } from "~/styles/globalStyle";
import imageAdapter1 from "~/assets/images/imageAdapter1.png";
import imageAdapter6 from "~/assets/images/imageAdapter6.png";
import ButtonOutlined from "~/components/CustomUi/ButtonOutlined";
const listAdapter = [
  {
    image: imageAdapter1,
  },
  {
    image: imageAdapter1,
  },
  {
    image: imageAdapter1,
  },
  {
    image: imageAdapter1,
  },
  {
    image: imageAdapter1,
  },
  {
    image: imageAdapter1,
  },
];
const AdapterSectionHomePage = () => {
  return (
    <Box>
      <BoxFlexColumnCenter>
        <Typography variant="h3" textAlign={"center"}>
          Chose your adapter
        </Typography>
        <Grid container spacing={{ lg: "50px", xs: "20px" }}>
          {listAdapter.map((item, index) => {
            return (
              <Grid item lg={4} xs={12} key={index}>
                <BoxImage sx={{ width: "100%" }}>
                  <img src={item.image} alt="" />
                </BoxImage>
              </Grid>
            );
          })}
        </Grid>
        <ButtonOutlined>
          <Typography>Explore Now</Typography>
        </ButtonOutlined>
      </BoxFlexColumnCenter>
    </Box>
  );
};

export default AdapterSectionHomePage;
