// import { Roboto } from 'next/font/google';
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#10033F",
          contrastText: "#ffff",
        },
        secondary: {
          main: "#8738EB",
          contrastText: "#ffff",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "yellow",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#10033F",
          contrastText: "#ffff",
        },
        secondary: {
          main: "#FCFCFC",
          contrastText: "#ffff",
        },
        text: {
          primary: "red",
          secondary: "green",
        },
      },
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
