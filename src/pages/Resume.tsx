import { Box, Container, Typography } from "@mui/material";
import resumePdf from "../assets/Resume-Yash_Aggarwal.pdf";

function Resume() {
  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: "80vh" }}>
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Resume
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          View or download the PDF directly below.
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          minHeight: "75vh",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <object
          data={resumePdf}
          type="application/pdf"
          width="100%"
          height="1346"
          aria-label="Resume PDF"
        >
          <p>
            It looks like your browser does not support embedded PDFs. You can
            download the resume here: <a href={resumePdf}>Download Resume</a>
          </p>
        </object>
      </Box>
    </Container>
  );
}

export default Resume;
