/* eslint-disable no-unused-vars */
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Header from "~/components/Header";
import HeroSectionHomePage from "./HeroSection";
import SlideSectionHomePage from "./SlideSection";
import AdapterSectionHomePage from "./AdapterSection";
import ProductInfoSectionHomePage from "./ProductInfoSection";
import { BoxFlexColumn } from "~/styles/globalStyle";

const HomePage = () => {
  return (
    <Box sx={{ background: "#10033F" }}>
      <Container>
        <Box sx={{ position: "relative" }}>
          <Header />
          <HeroSectionHomePage />
        </Box>
        <BoxFlexColumn sx={{ gap: "100px" }}>
          <SlideSectionHomePage />
          <AdapterSectionHomePage />
          <ProductInfoSectionHomePage />
        </BoxFlexColumn>
      </Container>
    </Box>
  );
};

export default HomePage;
