/* eslint-disable no-unused-vars */
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { BoxFlex, BoxFlexColumn, BoxImage } from "~/styles/globalStyle";
import imagePhone2 from "~/assets/images/imagePhone2.png";
import iconPlug from "~/assets/icons/iconPlug.svg";
import iconSaveMoney from "~/assets/icons/iconSaveMoney.svg";
import iconBuy from "~/assets/icons/iconBuy.svg";
import tesss from "~/assets/icons/tessss.svg";
import {
  styleAnimationContentTextProductInfoSection,
  styleAnimationPhoneFutureProducInfoSection,
  styleAnimationPhoneProducInfoSection,
} from "~/styles/homeStyle";

const phoneFutures = [
  {
    icon: iconBuy,
    title: "Buy NPC adapter or take NPC 5W",
  },
  {
    icon: iconPlug,
    title: " Supper charge with 30w",
  },
  {
    icon: iconSaveMoney,
    title: "Save 100$ when buy it at store",
  },
];
const ProductInfoSectionHomePage = () => {
  const sectionRef = useRef(null);
  const [isShowAnimation, setIsShowAnimation] = useState(false);

  const handleScroll = () => {
    const section = sectionRef.current;
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        console.log(`Section  is in view.`);
        setIsShowAnimation(true);
        return;
      }
      setIsShowAnimation(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box ref={sectionRef}>
      <Grid container>
        <Grid item lg={6} sm={12}>
          <BoxImage
            className={isShowAnimation ? "activeAnimation" : ""}
            sx={styleAnimationPhoneProducInfoSection}
          >
            <img src={imagePhone2} alt="" />
          </BoxImage>
        </Grid>
        <Grid item lg={6} sm={12}>
          <BoxFlexColumn sx={{ gap: "40px" }}>
            <BoxFlexColumn
              className={isShowAnimation ? "activeAnimation" : ""}
              sx={styleAnimationContentTextProductInfoSection}
            >
              <Typography
                variant="h3"
                fontWeight={700}
                textAlign={{ xs: "center", sm: "left" }}
              >
                Let your charger make money for you
              </Typography>
              <Typography
                variant="h6"
                fontWeight={400}
                textAlign={{ xs: "justify", sm: "left" }}
              >
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </Typography>
            </BoxFlexColumn>
            <BoxFlexColumn sx={{ gap: "20px" }}>
              <Typography
                textAlign={{ xs: "justify", sm: "left" }}
                variant="h5"
                fontWeight={400}
                className={isShowAnimation ? "activeAnimation" : ""}
                sx={styleAnimationContentTextProductInfoSection}
              >
                Leverage on your Blingcharge charger and create a stern of
                passive income at no cost.
              </Typography>
              {phoneFutures.map((item, index) => {
                return (
                  <BoxFlex
                    key={index}
                    className={isShowAnimation ? "activeAnimation" : ""}
                    sx={{
                      ...styleAnimationPhoneFutureProducInfoSection,
                      animationDelay: "0.4s",
                    }}
                  >
                    <BoxFlex
                      sx={{
                        width: "max-content",
                        display: { xs: "none", lg: "block" },
                      }}
                    >
                      <BoxImage sx={{ width: "80px" }}>
                        <img src={item.icon} alt="" />
                      </BoxImage>
                    </BoxFlex>
                    <Typography variant="h5" fontWeight={400}>
                      {item.title}
                    </Typography>
                  </BoxFlex>
                );
              })}
            </BoxFlexColumn>
          </BoxFlexColumn>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductInfoSectionHomePage;
