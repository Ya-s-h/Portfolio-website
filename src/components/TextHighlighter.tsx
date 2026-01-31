import { Typography, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

interface TextHighlighterProps {
  children: ReactNode;
}

function TextHighlighter({ children }: TextHighlighterProps) {
  const theme = useTheme();
  return (
    <Typography
      component="span"
      sx={{
        color: theme.palette.secondary.main,
        fontWeight: 700,
      }}
    >
      {" "}
      {children}
    </Typography>
  );
}
export default TextHighlighter;
