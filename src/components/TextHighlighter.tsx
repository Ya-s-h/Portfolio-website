import { Typography, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
interface TextHighlighterProps {
  htmlComponent?: React.ElementType;
  children: ReactNode;
}

function TextHighlighter({
  htmlComponent = "span",
  children,
}: TextHighlighterProps) {
  const theme = useTheme();
  return (
    <Typography
      component={htmlComponent}
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
