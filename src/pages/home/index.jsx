/* eslint-disable no-unused-vars */
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Header from "~/components/Header";
import {
  BoxFlex,
  BoxFlexCenter,
  BoxFlexColumn,
  BoxImage,
} from "~/styles/globalStyle";
import imagePhone1 from "~/assets/phone1.png";

const HomePage = () => {
  return (
    <Box sx={{ background: "#10033F" }}>
      <Container>
        <Box sx={{position:'relative'}}>
        <Header />
          <BoxFlexCenter>
            <BoxFlexColumn sx={{ gap: "20px" }}>
              <Typography variant="h3" fontWeight={600}>
                Charge & Earn
              </Typography>
              <Typography fontSize={"18px"} fontWeight={400}>
                You can get started with your marketing automation in a few
                minutesand you can send email newsletter with your audienceYou
                can get started with your marketing automation in a few{" "}
              </Typography>
              <BoxFlex>
                <Button variant="contained">
                  <Typography variant="subtitle2">Explore Now</Typography>
                </Button>
                <Button variant="contained">
                  <Typography variant="subtitle2">Get early Access</Typography>
                </Button>
              </BoxFlex>
            </BoxFlexColumn>
            <BoxFlex>
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  top: "0",
                  height: "80%",
                  width: "50%",
                  background: 'linear-gradient(359deg, #8738EB 15.94%, rgba(135, 56, 235, 0.00) 109.56%)',
                  borderBottomRightRadius: "40%",
                  borderBottomLeftRadius: "40%",
                }}
              ></Box>

              <BoxFlexCenter sx={{position:'relative', left:'-10%'}}>
                <BoxImage
                  sx={{
                    width: "100%",
                    // aspectRatio:3/4
                  }}
                >
                  <img src={imagePhone1} />
                </BoxImage>
              </BoxFlexCenter>
            </BoxFlex>
          </BoxFlexCenter>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
