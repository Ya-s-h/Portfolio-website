import { Typography, Box, Grid, useTheme, Container } from "@mui/material";
import homeLogo from "../assets/home-main.svg";
import Particle from "./Particle";
import Type from "./Type";

function Intro() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        py: 4,
      }}
      id="home"
    >
      <Particle />

      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid columnSpacing={{ xs: 12, md: 7 }}>
            <Box sx={{ textAlign: "left" }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 4,
                  fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 700,
                  color: "text.primary",
                }}
              >
                Hi There! <span>👋🏻</span>
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  mb: 4,
                  fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 700,
                  color: "text.primary",
                }}
              >
                I'm
                <strong className="main-name"> Yash Aggarwal</strong>
              </Typography>

              <Box sx={{ py: 6, textAlign: "left" }}>
                <Type />
              </Box>
            </Box>
          </Grid>

          <Grid
            columnSpacing={{ xs: 12, md: 5 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={homeLogo}
              alt="home pic"
              style={{
                maxHeight: "450px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Intro;
