/* eslint-disable no-unused-vars */
import { styled, Box } from "@mui/material";

export const AppWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  overflowX:'hidden'
  // background: theme.palette.primary.main,
}));

// CUSTOM BOX FLEX
export const BoxFlex = styled(Box)(({ theme }) => ({
  width: "100%",
  justifyContent: "flex-start",
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
export const BoxFlexCenter = styled(Box)(({ theme }) => ({
  width: "100%",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
export const BoxFlexEnd = styled(Box)(({ ...props }) => ({
  width: "100%",
  justifyContent: "flex-end",
  display: "flex",
  alignItems: "center",
  gap: `${props.gap ? props.gap : 10}px`,
}));
export const BoxFlexSpaceBetween = styled(Box)(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
export const BoxFlexColumn = styled(Box)(({ theme }) => ({
  width: "100%",
  justifyContent: "flex-start",
  flexDirection: "column",
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
}));
export const BoxFlexColumnSpaceBetween = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
  flexDirection: "column",
  display: "flex",
  alignItems: "flex-start",
}));
export const BoxFlexColumnCenter = styled(Box)(({ theme }) => ({
  width: "100%",
  justifyContent: "center",
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));
export const BoxFlexColumnEnd = styled(Box)(({ theme }) => ({
  width: "100%",
  justifyContent: "flex-start",
  flexDirection: "column",
  display: "flex",
  alignItems: "flex-end",
  gap: "10px",
}));
export const BoxImage = styled(Box)(({ theme }) => ({
  "& img": {
    width: "100%",
    height: "100%",
  },
}));
// CSS PHAN FOOTER
export const FooterWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  background: "rgba(255, 255, 255, 0.1)",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100px",
    height: "100px",
    // transform: "translate(50%,50%)",
    borrderRadus: "50%",
    background: "#BA68C8",
    filter: "blur(80px)",
    // background: "rgba(255, 255, 255, 0.1)",
    // filter: "blur(1px)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: "100px",
    height: "100px",
    // transform: "translate(50%,50%)",
    borrderRadus: "50%",
    background: "#1183E6",

    filter: "blur(80px)",
    // background: "rgba(255, 255, 255, 0.1)",
    // filter: "blur(1px)",
  },
}));
