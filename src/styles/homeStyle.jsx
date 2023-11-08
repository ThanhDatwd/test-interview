/* eslint-disable no-unused-vars */
import { styled, Box } from "@mui/material";


export const HeaderWrapper = styled(Box)(({ theme }) => ({
   padding:'20px 0px',
   position:'relative',
   zIndex:10000
  }));
export const NavItem = styled(Box)(({ theme }) => ({
  borderRadius: "16px",
  padding: "8px 16px",
  minWidth: "100px",
  "&.active": {
    background: theme.palette.secondary.main,
  },
  "&:hover": {
    background:theme.palette.secondary.main,
  },
}));
