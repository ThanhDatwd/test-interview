/* eslint-disable no-unused-vars */
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { BoxFlex, BoxFlexColumn, BoxImage } from "~/styles/globalStyle";
import imagePhone2 from "~/assets/imagePhone2.png";
import iconPlug from "~/assets/icons/iconPlug.svg";
import iconSaveMoney from "~/assets/icons/iconSaveMoney.svg";
import iconBuy from "~/assets/icons/iconBuy.svg";
const ProductInfoSectionHomePage = () => {
  return (
    <Box>
      <Grid container>
        <Grid item lg={6}>
          <BoxImage sx={{ width: "100%" }}>
            <img src={imagePhone2} alt="" />
          </BoxImage>
        </Grid>
        <Grid item lg={6}>
          <BoxFlexColumn sx={{ gap: "40px" }}>
            <BoxFlexColumn>
              <Typography variant="h3" fontWeight={700}>
                Let your charger make money for you
              </Typography>
              <Typography variant="h6" fontWeight={400}>
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </Typography>
            </BoxFlexColumn>
            <BoxFlexColumn sx={{ gap: "20px" }}>
              <Typography variant="h5" fontWeight={400}>
                Leverage on your Blingcharge charger and create a stern of
                passive income at no cost.
              </Typography>
              <BoxFlex>
                <BoxImage>
                  <img src={iconBuy} alt="" />
                </BoxImage>
                <Typography variant="h5" fontWeight={400}>
                  Buy NFT adapter or take NFT 5W___{" "}
                </Typography>
              </BoxFlex>
              <BoxFlex>
                <BoxImage>
                  <img src={iconPlug} alt="" />
                </BoxImage>
                <Typography variant="h5" fontWeight={400}>
                  Sạc nhanh 30w
                </Typography>
              </BoxFlex>
              <BoxFlex>
                <BoxImage>
                  <img src={iconPlug} alt="" />
                </BoxImage>
                <Typography variant="h5" fontWeight={400}>
                  Ưu dãi bất ngờ{" "}
                </Typography>
              </BoxFlex>
            </BoxFlexColumn>
          </BoxFlexColumn>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductInfoSectionHomePage;
