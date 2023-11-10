import { Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  BoxFlexCenter,
  BoxFlexEnd,
  BoxFlexSpaceBetween,
  BoxImage,
  HeaderWrapper,
  LightDarkModeBox,
  NavItem,
} from "~/styles/globalStyle";
import { useColorScheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import NavDisplayMobile from "./NavMobile";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const navList = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "How to buy",
    route: "/how-to-buy",
  },
  {
    title: "Pogs",
    route: "/pogs",
  },
  {
    title: "Help",
    route: "/help",
  },
  {
    title: "Contact us",
    route: "/contact",
  },
];
const Header = () => {
  const location = useLocation();
  const { mode, setMode } = useColorScheme();
  const [isActiveHeader, setIsActiveHeader] = useState(false);
  const [isOpenNavMobile, setIsOpenNavMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsActiveHeader(true);
      return;
    }
    setIsActiveHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <HeaderWrapper className={isActiveHeader ? "active" : ""}>
      <Container>
        <BoxFlexSpaceBetween>
          <BoxImage sx={{ height: "36px" }}>
            <img src={mode === "dark" ? "/logoDark.svg" : "/logoLight.svg"} />
          </BoxImage>
          <BoxFlexEnd sx={{ display: { xs: "none", lg: "flex" } }}>
            {navList.map((item, index) => {
              return (
                <NavItem
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
            <LightDarkModeBox>
              {mode === "light" ? (
                <DarkModeIcon onClick={() => setMode("dark")} />
              ) : (
                <LightModeIcon onClick={() => setMode("light")} />
              )}
            </LightDarkModeBox>
          </BoxFlexEnd>

          <MenuIcon
            onClick={() => setIsOpenNavMobile(!isOpenNavMobile)}
            sx={{ display: { xs: "block", lg: "none" } }}
          />
        </BoxFlexSpaceBetween>
        <NavDisplayMobile
          isOpenNavMobile={isOpenNavMobile}
          setIsOpenNavMobile={setIsOpenNavMobile}
          navList={navList}
        />
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
