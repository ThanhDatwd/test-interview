import { Container, Grid, Typography } from "@mui/material";
import {
  BoxFlex,
  BoxFlexColumn,
  BoxImage,
  FooterWrapper,
} from "~/styles/globalStyle";
import iconFacebook from "~/assets/icons/iconFacebook.svg";
import iconTwitter from "~/assets/icons/iconTwitter.svg";
import iconInstagram from "~/assets/icons/iconInstagram.svg";

const Footer = () => {
  return (
    <FooterWrapper py={4}>
      <Container>
        <Grid container>
          <Grid item lg={4}>
            <BoxFlexColumn>
              <BoxImage>
                <img src="/logoHeader.png" />
              </BoxImage>
              <Typography variant="h6" fontWeight={400}>
                Various kinds of NFT that are trending the trend will be reset
                and every week creator will show NFT
              </Typography>
            </BoxFlexColumn>
          </Grid>
          <Grid item lg={8} container>
            <Grid item lg={4}>
              <BoxFlexColumn>
                <Typography variant="subtitle" fontWeight={600}>
                  Categories
                </Typography>
                <Typography variant="subtitle">Art</Typography>
                <Typography variant="subtitle">Collections</Typography>
                <Typography variant="subtitle">Domain Name</Typography>
                <Typography variant="subtitle">Creator NFT</Typography>
              </BoxFlexColumn>
            </Grid>
            <Grid item lg={4}>
              <BoxFlexColumn>
                <Typography variant="subtitle" fontWeight={600}>
                  Contact us
                </Typography>
                <Typography variant="subtitle">Platform Status</Typography>
                <Typography variant="subtitle">Custumer services</Typography>
                <Typography variant="subtitle">Partner</Typography>
                <Typography variant="subtitle">Privacy policy</Typography>
              </BoxFlexColumn>
            </Grid>
            <Grid item lg={4}>
              <BoxFlexColumn>
                <Typography variant="subtitle" fontWeight={600}>
                  Get in touch
                </Typography>
                <Typography variant="subtitle">
                  Indonesia Jl. Griya Permata Hijau no D1 Sukabumi Utara 543881
                </Typography>
                <BoxFlex>
                  <BoxImage>
                    <img src={iconFacebook} alt="" />
                  </BoxImage>
                  <BoxImage>
                    <img src={iconTwitter} alt="" />
                  </BoxImage>
                  <BoxImage>
                    <img src={iconInstagram} alt="" />
                  </BoxImage>
                </BoxFlex>
              </BoxFlexColumn>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
