import { Box, Grid, Typography } from "@mui/material";
import {
  BoxFlexColumn,
  BoxFlexColumnCenter,
  BoxImage,
} from "~/styles/globalStyle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import image1 from "~/assets/image1.png";
import { BoxSlideWrapper } from "~/styles/homeStyle";
const SlideSectionHomePage = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <BoxFlexColumn sx={{ gap: "24px" }}>
        <BoxFlexColumnCenter sx={{ gap: "16px" }}>
          <Typography variant="h3">How to bling charge</Typography>
          <Typography variant="h6" textAlign={"center"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </BoxFlexColumnCenter>

        <BoxSlideWrapper>
          <Swiper
            cssMode={true}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            keyboard={true}
            modules={[Autoplay, Pagination, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Grid container columnSpacing={"40px"}>
                <Grid item lg={5}>
                  <BoxImage>
                    <img src={image1} alt="" />
                  </BoxImage>
                </Grid>
                <Grid item lg={7}>
                  <BoxFlexColumn sx={{ padding: "50px 0" }}>
                    <Typography variant="h4" fontWeight={600}>
                      NFT to the bone makes you collect project 3D
                    </Typography>
                    <Typography variant="h6" fontWeight={400}>
                      We are a community based collection project featuring 3D
                      and NFT artwork. Cool 3D from me and comes in all kinds of
                      evil shape traits and sizes with a few surprises along the
                      way
                    </Typography>
                  </BoxFlexColumn>
                </Grid>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid container columnSpacing={"40px"}>
                <Grid item lg={5}>
                  <BoxImage>
                    <img src={image1} alt="" />
                  </BoxImage>
                </Grid>
                <Grid item lg={7}>
                  <BoxFlexColumn sx={{ padding: "50px 0" }}>
                    <Typography variant="h4" fontWeight={600}>
                      NFT to the bone makes you collect project 3D
                    </Typography>
                    <Typography variant="h6" fontWeight={400}>
                      We are a community based collection project featuring 3D
                      and NFT artwork. Cool 3D from me and comes in all kinds of
                      evil shape traits and sizes with a few surprises along the
                      way
                    </Typography>
                  </BoxFlexColumn>
                </Grid>
              </Grid>
            </SwiperSlide>
          </Swiper>
        </BoxSlideWrapper>
      </BoxFlexColumn>
    </Box>
  );
};
export default SlideSectionHomePage;
