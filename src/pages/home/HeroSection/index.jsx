import { Typography } from "@mui/material";
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
import {
  BoxUiHeroSection,
  styleAnimationBall1HeroSection,
  styleAnimationBall2HeroSection,
  styleAnimationContentTextHeroSection,
  styleAnimationPhoneHeroSection,
} from "~/styles/homeStyle";
const HeroSectionHomePage = () => {
  return (
    <BoxFlexCenter sx={{ height: "100vh", flexWrap: "wrap-reverse", gap: 0 }}>
      {/* SIDE  RIGHT  */}
      <BoxFlexColumn
        sx={{
          width: { sm: "100%", lg: "50%" },
          gap: "20px",
          ...styleAnimationContentTextHeroSection,
        }}
      >
        <Typography variant="h2" textAlign={{ xs: "center", lg: "left" }}>
          Charge & Earn
        </Typography>
        <Typography variant="h6" fontWeight={300} textAlign={{ xs: "justify", sm: "left" }}>
          You can get started with your marketing automation in a few minutesand
          you can send email newsletter with your audienceYou can get started
          with your marketing automation in a few{" "}
        </Typography>
        <BoxFlex justifyContent={{ xs: "center", lg: "flex-start" }}>
          <ButtonContained>
            <Typography>Explore Now</Typography>
          </ButtonContained>
          <ButtonOutlined>
            <Typography>Get early Access</Typography>
          </ButtonOutlined>
        </BoxFlex>
      </BoxFlexColumn>
      <BoxFlex
        sx={{
          width: { sm: "100%", lg: "50%" },
        }}
      >
        <BoxUiHeroSection sx={{ display: { xs: "none", lg: "block" } }} />
        {/* SIDE LEFT */}
        <BoxFlexCenter sx={{ position: "relative", left: "-10%", top: "80px" }}>
          <BoxImage sx={styleAnimationBall1HeroSection}>
            <img src={ball1} alt="" />
          </BoxImage>
          <BoxImage sx={styleAnimationBall2HeroSection}>
            <img src={ball2} alt="" />
          </BoxImage>
          <BoxImage sx={styleAnimationPhoneHeroSection}>
            <img src={imagePhone1} />
          </BoxImage>
        </BoxFlexCenter>
      </BoxFlex>
    </BoxFlexCenter>
  );
};

export default HeroSectionHomePage;
