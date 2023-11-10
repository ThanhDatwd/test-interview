/* eslint-disable no-unused-vars */
import { styled, Box } from "@mui/material";

export const AppWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  overflowX: "hidden",
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
  boxShadow: "0px -2px 10px -6px rgba(0,0,0,0.5)",

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
// HEADER
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  padding: "20px 0px",
  position: "relative",
  zIndex: 10000,
}));

export const NavItem = styled(Box)(({ theme }) => ({
  borderRadius: "16px",
  padding: "8px 16px",
  minWidth: "100px",
  transition: "all .3s linear",
  cursor: "pointer",
  "&.active": {
    background: theme.palette.secondary.main,
  },
  "&:hover": {
    background: theme.palette.secondary.main,
  },
}));
export const NavMobile = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: "-100%",
  bottom: 0,
  padding: "0 20px",

  height: "100vh",
  width: "80vw",
  zIndex: 1000,
  opacity: 0,
  transition: "all .3s linear",
  background: theme.palette.primary.main,
  boxShadow: "6px -2px 10px -6px rgba(0,0,0,0.5)",
  "&.active": {
    opacity: 1,
    left: 0,
  },
}));
export const NavMobileHeader = styled(Box)(({ theme }) => ({
  padding: "20px 0",
  width: "100%",
  borderBottom: "1px solid",
  borderColor: theme.palette.secondary.main,
}));
export const LightDarkModeBox = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: "pointer",
  background: theme.palette.secondary.main,

  // // display: "block",
  // background: "#ebebeb",
  // overflow: "hidden",
  // boxShadow:
  //   "inset 0px 5px 15px rgba(0,0,0,0.4), inset 0px -5px 15px rgba(255,255,255,0.4)",
  // cursor: "pointer",
}));
