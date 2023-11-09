/* eslint-disable no-unused-vars */
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Header from "~/components/Header";
import HeroSectionHomePage from "./HeroSection";
import SlideSectionHomePage from "./SlideSection";
import AdapterSectionHomePage from "./AdapterSection";
import ProductInfoSectionHomePage from "./ProductInfoSection";
import { BoxFlexColumn } from "~/styles/globalStyle";
import { HomePageWrapper } from "~/styles/homeStyle";
import BlingChargeSectionHomePage from "./BlingChargeSection";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Container>
        <Box sx={{ position: "relative" }}>
          <Header />
          <HeroSectionHomePage />
        </Box>
        <BoxFlexColumn sx={{ gap: "50px" }} py={"40px"}>
          <SlideSectionHomePage />
          <BlingChargeSectionHomePage/>
          <AdapterSectionHomePage />
          <ProductInfoSectionHomePage />
        </BoxFlexColumn>
      </Container>
    </HomePageWrapper>
  );
};

export default HomePage;
