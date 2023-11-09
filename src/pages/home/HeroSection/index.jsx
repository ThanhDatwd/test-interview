import { Box, Button, Typography } from "@mui/material";
import {
  BoxFlex,
  BoxFlexCenter,
  BoxFlexColumn,
  BoxImage,
} from "~/styles/globalStyle";
import imagePhone1 from "~/assets/phone1.png";
import ball1 from "~/assets/ball1.svg";
import ball2 from "~/assets/ball2.svg";
const HeroSectionHomePage = () => {
  return (
    <BoxFlexCenter>
      <BoxFlexColumn sx={{ gap: "20px" }}>
        <Typography variant="h2">Charge & Earn</Typography>
        <Typography variant="h6" fontWeight={300}>
          You can get started with your marketing automation in a few minutesand
          you can send email newsletter with your audienceYou can get started
          with your marketing automation in a few{" "}
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
            background:
              "linear-gradient(359deg, #8738EB 15.94%, rgba(135, 56, 235, 0.00) 109.56%)",
            borderBottomRightRadius: "40%",
            borderBottomLeftRadius: "40%",
          }}
        ></Box>

        <BoxFlexCenter sx={{ position: "relative", left: "-10%" }}>
          <BoxImage sx={{ position: "absolute", bottom: "20%", left: "-20%" }}>
            <img src={ball1} alt="" />
          </BoxImage>
          <BoxImage sx={{ position: "absolute", right: "-30%", top: "20%" }}>
            <img src={ball2} alt="" />
          </BoxImage>
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
  );
};

export default HeroSectionHomePage;
