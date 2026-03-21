import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

/**
 * Projects Component - Portfolio Projects Page
 *
 * Displays a grid of projects with descriptions, technologies used,
 * and links to GitHub/live demos. Customize the projects array with your own work.
 */
function Projects() {
  const theme = useTheme();

  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Remote Intensive Care Application",
      description:
        "A web application built using Flask, HTML, CSS and JavaScript. Helps in online appointment booking, delivering medicine and comes with a Heart Rate Sensor. Mainly worked on the backend logic for this project.",
      image: "/src/assets/Projects/suicide.png",
      technologies: ["Flask", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/TeamRocketBalleBalle/RICA-Remastered",
    },
    {
      id: 2,
      title: "Riktionary",
      description:
        "A Java-based multiplayer game where players guess displayed images. The first player to guess correctly earns a point, and the first to reach 5 points wins the game.",
      image: "/src/assets/Projects/chatify.png",
      technologies: ["Java"],
      githubLink: "https://github.com/TeamRocketBalleBalle/Ricktionary",
    },
    {
      id: 3,
      title: "Twitch Watcher Discord Bot",
      description:
        "A Python-based Discord bot that listens for a specific command and starts a Docker container to monitor the RLCS stream and automatically claim available loot.",
      image: "/src/assets/Projects/codeEditor.png",
      technologies: ["Python", "Discord.py", "Docker"],
      githubLink: "https://github.com/Ya-s-h/twitch-watcher-discord-bot",
    },
    {
      id: 4,
      title: "Inventory Management System",
      description:
        "A MERN stack based inventory management system with multi-user authentication, hierarchical roles, CRUD activity logging, and automated low-stock email alerts using Nodemailer. Delivered end-to-end as a client-focused freelancing project by a team of four.",
      image: "/src/assets/Projects/codeEditor.png",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Nodemailer"],
    },
  ]);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 6,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Page Heading */}
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 700,
            background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Recent Works
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 6,
            color: "text.secondary",
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            maxWidth: "600px",
          }}
        >
          Here are a few projects I've worked on recently. Each represents a
          learning journey and technical challenge.
        </Typography>

        {/* Projects Grid */}
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid
              columnSpacing={{ xs: 12, md: 6 }}
              size={{ xs: 12, md: 6 }}
              key={project.id}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 0, 0, 0.02)",
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${theme.palette.divider}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 8px 24px ${
                      theme.palette.mode === "dark"
                        ? "rgba(0, 0, 0, 0.4)"
                        : "rgba(0, 0, 0, 0.1)"
                    }`,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: "cover",
                    padding: "20px !important",
                    opacity: 0.8,
                    borderRadius: "10px !important",
                  }}
                />
                <CardContent
                  sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "text.primary",
                      mb: 1,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 2,
                      lineHeight: 1.6,
                      flexGrow: 1,
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Technologies */}
                  <Box
                    sx={{ mb: 2, display: "flex", gap: 1, flexWrap: "wrap" }}
                  >
                    {project.technologies.map((tech) => (
                      <Typography
                        key={tech}
                        variant="caption"
                        sx={{
                          background: `${theme.palette.secondary.main}20`,
                          color: theme.palette.secondary.main,
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "12px",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>

                  {/* Action Buttons */}
                  <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
                    {project.githubLink && (
                      <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textTransform: "none",
                          color: "text.primary",
                          border: `1px solid ${theme.palette.divider}`,
                          "&:hover": {
                            background: `${theme.palette.secondary.main}20`,
                          },
                        }}
                      >
                        GitHub
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button
                        size="small"
                        startIcon={<OpenInNewIcon />}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textTransform: "none",
                          background: theme.palette.secondary.main,
                          color: theme.palette.secondary.contrastText,
                          "&:hover": {
                            opacity: 0.8,
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1rem",
            }}
          >
            Interested in collaborating? Let's connect!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Projects;
