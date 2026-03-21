import { GitHubCalendar } from "react-github-calendar";
import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useThemeMode } from "../themes/AppThemeProvider";

function Github() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 4,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        className="project-heading"
        sx={{ pb: "20px" }}
      >
        Days I Code
      </Typography>
      <GitHubCalendar
        username="Ya-s-h"
        blockSize={15}
        blockMargin={5}
        colorScheme={mode}
        fontSize={16}
      />
    </Box>
  );
}

export default Github;
