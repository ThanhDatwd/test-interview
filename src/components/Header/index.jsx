import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  BoxFlexCenter,
  BoxFlexEnd,
  BoxFlexSpaceBetween,
  BoxImage,
} from "~/styles/globalStyle";
import { HeaderWrapper, NavItem } from "~/styles/homeStyle";
const navList = [
  {
    title: "Home",
    route: "/home",
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
  return (
    <HeaderWrapper>
      <BoxFlexSpaceBetween>
        <BoxImage
          sx={{
            height: "36px",
          }}
        >
          <img src="/logoHeader.png" />
        </BoxImage>
        <BoxFlexEnd gap={"0px"}>
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
        </BoxFlexEnd>
      </BoxFlexSpaceBetween>
    </HeaderWrapper>
  );
};

export default Header;
