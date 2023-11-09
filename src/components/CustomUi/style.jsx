import { styled, Button } from "@mui/material";

export const ButtonStyled = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  width: "100%",
  minWidth: "0px",
  cursor: "pointer",
  borderRadius: "10px",
  outline: "none",
  textTransform: "capitalize",
  //   background: theme.palette.primaryLight.lighter,
  transition: "0.5s ease all",
  fontSize: 12,
  fontWeight: 500,
  padding: "10px",

  "&:focus": {
    outline: "none",
  },

  "&:hover": {
    // background: theme.palette.primary.light,
    // color: theme.palette.primaryLight.lighter,
    boxShadow: "0px 3px 6px rgba(13, 16, 45, 0.3)",
    borderColor: theme.palette.primary.light,
  },

  // '&:disabled': {
  //   border: 0,
  //   outline: 0,
  //   color: 'inherit',
  // },
  "& img": {
    height: "38px",
    width: "38px",
    borderRadius: "5px",
    marginRight: "10px",
  },
}));
