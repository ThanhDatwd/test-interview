/* eslint-disable no-unused-vars */
import { styled, Box } from "@mui/material";

export const HomePageWrapper = styled(Box)(({ theme }) => ({
   background: theme.palette.primary.main
}));
export const HeroSectionContentText = styled(Box)(({ theme }) => ({
  padding: "20px 0px",
  position: "relative",
  zIndex: 10000,
}));
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  padding: "20px 0px",
  position: "relative",
  zIndex: 10000,
}));

export const NavItem = styled(Box)(({ theme }) => ({
  borderRadius: "16px",
  padding: "8px 16px",
  minWidth: "100px",
  "&.active": {
    background: theme.palette.secondary.main,
  },
  "&:hover": {
    background: theme.palette.secondary.main,
  },
}));
export const BoxSlideWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "30px",
  background: "black",
  position: "relative",
  borderRadius: "16px",
}));
