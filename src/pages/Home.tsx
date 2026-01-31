import { Box, Container, Typography, useTheme } from "@mui/material";
import TextHighlighter from "../components/TextHighlighter";
import Parapragh from "../components/Paragraph";

/**
 * Home Component - Landing Page
 *
 * Displays a professional introduction focused on backend engineering with highlighted
 * keywords that adapt to the current theme using secondary color.
 */
function Home() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          py: 4,
          textAlign: "left",
        }}
      >
        {/* Main Greeting */}
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 700,
            color: theme.palette.secondary.main,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          }}
        >
          Hi, I'm Yash Aggarwal
        </Typography>

        {/* Introduction Section */}
        <Box
          sx={{
            maxWidth: "900px",
            mb: 4,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* Professional Identity */}
          <Parapragh>
            I'm a <TextHighlighter>backend-focused engineer</TextHighlighter>{" "}
            specializing in{" "}
            <TextHighlighter>enterprise automation</TextHighlighter> and{" "}
            <TextHighlighter>scalable systems</TextHighlighter>. I build robust{" "}
            <TextHighlighter>APIs</TextHighlighter>,{" "}
            <TextHighlighter>data pipelines</TextHighlighter>, and{" "}
            <TextHighlighter>automation solutions</TextHighlighter>.
          </Parapragh>

          {/* Technical Stack */}
          <Parapragh>
            My technical stack includes{" "}
            <TextHighlighter>Python</TextHighlighter>,{" "}
            <TextHighlighter>JavaScript</TextHighlighter>, and{" "}
            <TextHighlighter>MongoDB</TextHighlighter>. I've spent considerable
            time optimizing{" "}
            <TextHighlighter>data retrieval performance</TextHighlighter> with a
            strong focus on <TextHighlighter>performance</TextHighlighter> and{" "}
            <TextHighlighter>reliability</TextHighlighter>.
          </Parapragh>

          {/* Previous Experience */}
          <Parapragh>
            At <TextHighlighter>Lyxel Labs</TextHighlighter>, I architected and
            built backend systems, and developed a{" "}
            <TextHighlighter>chatbot from scratch</TextHighlighter> that managed
            chat history, conversation context, and multi-user interactions.
          </Parapragh>

          {/* Current Focus */}
          <Parapragh>
            I'm currently exploring practical applications of{" "}
            <TextHighlighter>AI</TextHighlighter> and{" "}
            <TextHighlighter>automation</TextHighlighter> using tools like{" "}
            <TextHighlighter>LangChain</TextHighlighter> and{" "}
            <TextHighlighter>MCP</TextHighlighter>.
          </Parapragh>
        </Box>

        {/* Call to Action */}
        <Typography
          variant="h5"
          sx={{
            mt: 4,
            color: theme.palette.secondary.main,
            fontWeight: 700,
            fontSize: { xs: "1.1rem", md: "1.5rem" },
          }}
        >
          Let's build scalable solutions together!
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
