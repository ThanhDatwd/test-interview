import { Box, Typography } from "@mui/material";
import {
  BoxFlex,
  BoxFlexCenter,
  BoxFlexColumn,
  BoxImage,
} from "~/styles/globalStyle";
import imagePhone1 from "~/assets/images/phone1.png";
import ball1 from "~/assets/ball1.svg";
import ball2 from "~/assets/ball2.svg";
import ButtonOutlined from "~/components/CustomUi/ButtonOutlined";
import ButtonContained from "~/components/CustomUi/ButtonContained";
const HeroSectionHomePage = () => {
  return (
    <BoxFlexCenter sx={{ height: "100vh", flexWrap:'wrap-reverse', gap:0 }}>
      <BoxFlexColumn
        sx={{
          width:{sm:'100%', lg:'50%'},
          gap: "20px",
          animation: "animationContent .5s linear ",
          "@keyframes animationContent": {
            "0%": {
              opacity:0,
              transform: "translateX(-100%)",
            },
            "50%": {
              opacity:0.5,
              transform: "translateX(-50%)",
            },
            "100%": {
              opacity:1,
              transform: "translateX(0%)",
            },
          },
        }}
      >
        <Typography variant="h2" textAlign={{xs:'center',lg:"left"}}>Charge & Earn</Typography>
        <Typography variant="h6" fontWeight={300}>
          You can get started with your marketing automation in a few minutesand
          you can send email newsletter with your audienceYou can get started
          with your marketing automation in a few{" "}
        </Typography>
        <BoxFlex justifyContent={{xs:"center", lg:'flex-start'}}>
          <ButtonContained>
            <Typography >Explore Now</Typography>
          </ButtonContained>
          <ButtonOutlined>
            <Typography>Get early Access</Typography>
          </ButtonOutlined>
        </BoxFlex>
      </BoxFlexColumn>
      <BoxFlex sx={{
         width:{sm:'100%', lg:'50%'},
      }}>
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: "0",
            height: "80%",
            width: "50%",
            background:
              "linear-gradient(359deg, #8738EB 15.94%, rgba(135, 56, 235, 0.00) 109.56%)",
            borderBottomRightRadius: "40%",
            borderBottomLeftRadius: "40%",
            display:{xs:'none',lg:'block'}
          }}
        ></Box>

        <BoxFlexCenter sx={{ position: "relative", left: "-10%" }}>
          <BoxImage
            sx={{
              position: "absolute",
              bottom: "20%",
              left:'-20%',
              // left: {xs:0,lg:"-20%"},
              animation: "animationBall1 2.5s linear infinite",
              "@keyframes animationBall1": {
                "0%": {
                  bottom: "20%",
                },
                "50%": {
                  bottom: "25%",
                },
                "100%": {
                  bottom: "20%",
                },
              },
            }}
          >
            <img src={ball1} alt="" />
          </BoxImage>
          <BoxImage
            sx={{
              position: "absolute",
              right: "0%",
              top: "0%",
              transform: "translateX(50%)",
              animation: "animationBall2 2s linear infinite",
              "@keyframes animationBall2": {
                "0%": {
                  top: 0,
                },
                "50%": {
                  top: " 20px",
                },
                "100%": {
                  top: 0,
                },
              },
            }}
          >
            <img src={ball2} alt="" />
          </BoxImage>
          <BoxImage
            sx={{
              position: "relative",
              zIndex: 100,
              width: "80%",
              animation: "animationPhone1 .5s linear ",
              "@keyframes animationPhone1": {
                "0%": {
                  opacity:0,
                  width: "0%",
                  // transform: "translateY(20px)",
                },
                "50%": {
                  opacity:0.5,
                  width: "50%",
                  // transform: "translateY(40px)",
                },
                "100%": {
                  opacity:1,
                  width: "100%",
                  // transform: "translateY(50px)",
                },
              },
            }}
          >
            <img src={imagePhone1} />
          </BoxImage>
        </BoxFlexCenter>
      </BoxFlex>
    </BoxFlexCenter>
  );
};

export default HeroSectionHomePage;
