/* eslint-disable no-unused-vars */
import { styled, Box } from "@mui/material";

export const HomePageWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
}));
export const HeroSectionContentText = styled(Box)(({ theme }) => ({
  padding: "20px 0px",
  position: "relative",
  zIndex: 10000,
}));
export const BoxSlideWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "30px",
  background: "black",
  position: "relative",
  borderRadius: "16px",
}));

// CSS HEROSECTION
export const styleAnimationContentTextHeroSection = {
  animation: "animationContent .5s linear ",
  "@keyframes animationContent": {
    "0%": {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    "50%": {
      opacity: 0.5,
      transform: "translateX(-50%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0%)",
    },
  },
};
export const styleAnimationBall1HeroSection = {
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
};

export const styleAnimationBall2HeroSection = {
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
};
export const styleAnimationPhoneHeroSection = {
  animation: "animationPhone1 .5s linear ",
  "@keyframes animationPhone1": {
    "0%": {
      opacity: 0,
      width: "0%",
      // transform: "translateY(20px)",
    },
    "50%": {
      opacity: 0.5,
      width: "50%",
      // transform: "translateY(40px)",
    },
    "100%": {
      opacity: 1,
      width: "80%",
      // transform: "translateY(50px)",
    },
  },
};
// CSS PRODUCT INFO

export const styleAnimationPhoneProducInfoSection = {
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
};
export const styleAnimationContentTextProductInfoSection = {
  opacity: 0,
  "&.activeAnimation": {
    opacity: 1,
    animation: "animationPhone3 3s linear ",
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
};
export const styleAnimationPhoneFutureProducInfoSection = {
  opacity: 0,
  "&.activeAnimation": {
    opacity: 1,
    animation: "animationPhone4 3s linear  ",
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
};
