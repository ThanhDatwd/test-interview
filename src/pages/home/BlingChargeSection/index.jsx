/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { BoxFlexColumnCenter, BoxImage } from "~/styles/globalStyle";
import blingBox from "~/assets/blingBox.svg";
import logoLarge from "~/assets/logoLarge.svg";

const BlingChargeSectionHomePage = () => {
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const section = sectionRef.current;
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        console.log(`Section  is in view.`);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box ref={sectionRef} sx={{ position: "relative" }}>
      <BoxImage>
        <img src={blingBox} />
      </BoxImage>
      <BoxFlexColumnCenter
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          gap: "30px",
        }}
      >
        <BoxImage sx={{ width: "50%", height: "50%" }}>
          <img src={logoLarge} alt="" />
        </BoxImage>
        <BoxFlexColumnCenter
          sx={{
            display: { xs: "none", lg: "flex" },
          }}
        >
          <Typography variant="h2">Just Charge and Earn</Typography>
          <Typography variant="h6" fontWeight={400} textAlign={"center"}>
            You can get started with your marketing automation in a few
            minutesand you can send email newsletter with your audienceYou can
            get started with your marketing automation in a few{" "}
          </Typography>
        </BoxFlexColumnCenter>
      </BoxFlexColumnCenter>
    </Box>
  );
};

export default BlingChargeSectionHomePage;
