/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import {
  BoxFlexCenter,
  BoxFlexColumn,
  BoxFlexEnd,
  BoxFlexSpaceBetween,
  BoxImage,
  LightDarkModeBox,
  NavItem,
  NavMobile,
  NavMobileHeader,
} from "~/styles/globalStyle";
import { useColorScheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const NavDisplayMobile = ({ isOpenNavMobile, setIsOpenNavMobile, navList }) => {
  const { mode, setMode } = useColorScheme();
  return (
    <NavMobile className={isOpenNavMobile ? "active" : ""}>
      <BoxFlexColumn>
        <NavMobileHeader>
          <BoxFlexSpaceBetween>
            <BoxImage sx={{ height: "26px" }}>
              <img src={mode === "dark" ? "/logoDark.svg" : "/logoLight.svg"} />
            </BoxImage>
            <CloseIcon onClick={() => setIsOpenNavMobile(false)} />
          </BoxFlexSpaceBetween>
        </NavMobileHeader>
        <BoxFlexColumn>
          {navList.map((item, index) => {
            return (
              <NavItem
                sx={{
                  width: "100%",
                }}
                key={index}
                className={location.pathname === item.route ? "active" : ""}
                onClick={() => {}}
              >
                <BoxFlexCenter>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {item.title}
                  </Typography>
                </BoxFlexCenter>
              </NavItem>
            );
          })}
        </BoxFlexColumn>
      </BoxFlexColumn>
      <BoxFlexEnd
        sx={{ position: "absolute", bottom: 0, left: 0, padding: "20px" }}
      >
        <LightDarkModeBox>
          {mode === "light" ? (
            <DarkModeIcon onClick={() => setMode("dark")} />
          ) : (
            <LightModeIcon onClick={() => setMode("light")} />
          )}
        </LightDarkModeBox>
      </BoxFlexEnd>
    </NavMobile>
  );
};

export default NavDisplayMobile;
