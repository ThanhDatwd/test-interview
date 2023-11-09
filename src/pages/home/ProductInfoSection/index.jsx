/* eslint-disable no-unused-vars */
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { BoxFlex, BoxFlexColumn, BoxImage } from "~/styles/globalStyle";
import imagePhone2 from "~/assets/images/imagePhone2.png";
import iconPlug from "~/assets/icons/iconPlug.svg";
import iconSaveMoney from "~/assets/icons/iconSaveMoney.svg";
import iconBuy from "~/assets/icons/iconBuy.svg";
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
      <Grid container >
        <Grid item lg={6} sm={12}>
          <BoxImage
            className={isShowAnimation ? "activeAnimation" : ""}
            sx={{
              width: "0%",
              "&.activeAnimation": {
                width: "100%",
                animation: "animationPhone2 .5s linear ",
                "@keyframes animationPhone2": {
                  "0%": {
                    opacity: 0,
                    width: "0%",
                  },
                  "50%": {
                    opacity: 0.5,
                    width: "50%",
                  },
                  "100%": {
                    opacity: 1,
                    width: "100%",
                  },
                },
              },
            }}
          >
            <img src={imagePhone2} alt="" />
          </BoxImage>
        </Grid>
        <Grid item lg={6} sm={12}>
          <BoxFlexColumn
            sx={{
              gap: "40px",
            }}
          >
            <BoxFlexColumn
              className={isShowAnimation ? "activeAnimation" : ""}
              sx={{
                opacity: 0,
                "&.activeAnimation": {
                  opacity: 1,
                  animation: "animationPhone3 .5s linear ",
                  "@keyframes animationPhone3": {
                    "0%": {
                      opacity: 0,
                    },
                    "50%": {
                      opacity: 0.5,
                    },
                    "100%": {
                      opacity: 1,
                    },
                  },
                },
              }}
            >
              <Typography variant="h3" fontWeight={700} textAlign={{xs:"center",sm:'left'}}>
                Let your charger make money for you
              </Typography>
              <Typography variant="h6" fontWeight={400} textAlign={{xs:'justify',sm:'left'}}>
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </Typography>
            </BoxFlexColumn>
            <BoxFlexColumn sx={{ gap: "20px" }}>
              <Typography
              textAlign={{xs:'center',sm:'left'}}
                variant="h5"
                fontWeight={400}
                className={isShowAnimation ? "activeAnimation" : ""}
                sx={{
                  opacity: 0,
                  "&.activeAnimation": {
                    opacity: 1,
                    animation: "animationPhone4 .5s linear  ",
                    // animationDelay:'0.1s',
                    "@keyframes animationPhone4": {
                      "0%": {
                        opacity: 0,
                      },
                      "50%": {
                        opacity: 0.5,
                      },
                      "100%": {
                        opacity: 1,
                      },
                    },
                  },
                }}
              >
                Leverage on your Blingcharge charger and create a stern of
                passive income at no cost.
              </Typography>
              <BoxFlex
                className={isShowAnimation ? "activeAnimation" : ""}
                sx={{
                  opacity: 0,
                  "&.activeAnimation": {
                    opacity: 1,
                    animation: "animationPhone4 .5s linear  ",
                    animationDelay:'0.4s',
                    "@keyframes animationPhone4": {
                      "0%": {
                        opacity: 0,
                      },
                      "50%": {
                        opacity: 0.5,
                      },
                      "100%": {
                        opacity: 1,
                      },
                    },
                  },
                }}
              >
                <BoxImage>
                  <img src={iconBuy} alt="" />
                </BoxImage>
                <Typography variant="h5" fontWeight={400}>
                  Buy NFT adapter or take NFT 5W___{" "}
                </Typography>
              </BoxFlex>
              <BoxFlex
                className={isShowAnimation ? "activeAnimation" : ""}
                sx={{
                  opacity: 0,
                  "&.activeAnimation": {
                    opacity: 1,
                    animation: "animationPhone4 .5s linear  ",
                    animationDelay:'0.6s',
                    "@keyframes animationPhone4": {
                      "0%": {
                        opacity: 0,
                      },
                      "50%": {
                        opacity: 0.5,
                      },
                      "100%": {
                        opacity: 1,
                      },
                    },
                  },
                }}
              >
                <BoxImage>
                  <img src={iconPlug} alt="" />
                </BoxImage>
                <Typography variant="h5" fontWeight={400}>
                  Sạc nhanh 30w
                </Typography>
              </BoxFlex>
              <BoxFlex
                className={isShowAnimation ? "activeAnimation" : ""}
                sx={{
                  opacity: 0,
                  "&.activeAnimation": {
                    opacity: 1,
                    animation: "animationPhone4 .5s linear  ",
                    animationDelay:'0.8s',
                    "@keyframes animationPhone4": {
                      "0%": {
                        opacity: 0,
                      },
                      "50%": {
                        opacity: 0.5,
                      },
                      "100%": {
                        opacity: 1,
                      },
                    },
                  },
                }}
              >
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
