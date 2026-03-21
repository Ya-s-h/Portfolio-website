import Typewriter from "typewriter-effect";
import { Typography } from "@mui/material";

function Type() {
  return (
    <Typography
      sx={{
        fontSize: { xs: "1.1rem", sm: "1.8rem", md: "2.4rem" },
        fontWeight: 700,
        color: "text.primary",
        fontFamily: "math",
      }}
    >
      <Typewriter
        options={{
          strings: [
            "Backend Engineer",
            "Automation Engineer",
            "Web Scraping",
            "Chatbot Systems",
            "LLM Integration",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </Typography>
  );
}

export default Type;
