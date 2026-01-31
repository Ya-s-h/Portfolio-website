import { Typography, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

interface ParapraghProps {
  children: ReactNode;
}

function Parapragh({ children }: ParapraghProps) {
  return (
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: "1rem", md: "1.1rem" },
        lineHeight: 1.8,
        color: "text.primary",
      }}
    >
      {children}
    </Typography>
  );
}

export default Parapragh;
