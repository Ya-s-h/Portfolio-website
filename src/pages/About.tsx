import { Box, Container, Typography, useTheme, Grid } from "@mui/material";
import TextHighlighter from "../components/TextHighlighter";
import Parapragh from "../components/Paragraph";
import Github from "../components/Github";
interface AboutProps {
  activities?: string[];
}

/**
 * About Component - Professional Background Page
 *
 * Displays personal and professional information with a profile image.
 * Activities are customizable through props with a default list provided.
 */
function About({
  activities = ["Playing Games", "Reading Comics", "Web Development"],
}: AboutProps) {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 4,
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 700,
            background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Know who I'M
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{ alignItems: "center" }}
          direction={"row"}
        >
          {/* Left Side: Content */}
          <Grid columnSpacing={{ xs: 12, md: 6 }} size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {/* Intro */}
              <Parapragh>
                Hi Everyone, I am
                <TextHighlighter>Yash Aggarwal</TextHighlighter> from
                <TextHighlighter>India</TextHighlighter>.
              </Parapragh>

              {/* Current Role */}
              <Parapragh>
                Currently
                <TextHighlighter>
                  Analyst 3 at Ernst and Young LLP
                </TextHighlighter>{" "}
                specializing in
                <TextHighlighter>enterprise automation</TextHighlighter> and
                <TextHighlighter>backend engineering</TextHighlighter>.
              </Parapragh>

              {/* Technical Expertise */}
              <Parapragh>
                Expert in
                <TextHighlighter>Python</TextHighlighter>,
                <TextHighlighter>MongoDB</TextHighlighter> and
                <TextHighlighter>ElasticSearch</TextHighlighter>, focused on
                building
                <TextHighlighter>fast data systems</TextHighlighter> and{" "}
                <TextHighlighter>reliable scraping pipelines</TextHighlighter>.
              </Parapragh>

              {/* Previous Experience */}
              <Parapragh>
                Previously a{" "}
                <TextHighlighter>
                  software developer at Lyxel Labs
                </TextHighlighter>
                , where I worked on
                <TextHighlighter>
                  real-world backend systems
                </TextHighlighter>{" "}
                and developed a
                <TextHighlighter>chatbot from scratch</TextHighlighter> that
                handles multiple chats, maintains
                <TextHighlighter>chat history</TextHighlighter> and
                <TextHighlighter>conversation context</TextHighlighter>.
              </Parapragh>

              {/* Activities Section */}
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: "text.primary",
                  }}
                >
                  Apart from coding, some other activities that I love to do!
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {activities.map((activity, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: theme.palette.secondary.main,
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "0.95rem", md: "1.05rem" },
                          color: "text.primary",
                        }}
                      >
                        {activity}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* Right Side: Image */}
          <Grid columnSpacing={{ xs: 12, md: 6 }} size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="/src/assets/about.png"
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: `0 4px 20px rgba(0, 173, 181, 0.2)`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 8px 30px rgba(0, 173, 181, 0.3)`,
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Github />
    </Container>
  );
}

export default About;
