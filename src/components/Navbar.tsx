import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { useThemeMode } from "../themes/AppThemeProvider";
import { useNavigate } from "react-router-dom";
import { TypographyVariant } from "@mui/material";

interface NavbarProps {
  Name: string;
  navbarItems: string[];
}

function getSocialLinks(): React.ReactNode {
  const socialLinks = [
    { link: "https://github.com/Ya-s-h", icon: GitHubIcon },
    {
      link: "https://www.linkedin.com/in/yash-aggarwal-76a2851ba",
      icon: LinkedInIcon,
    },
  ];

  return socialLinks.map((e, idx) => {
    const Icon = e.icon;
    return (
      <IconButton
        key={idx}
        color="inherit"
        href={e.link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          transition: "opacity 0.3s ease",
          "&:hover": { opacity: 0.8 },
        }}
      >
        <Icon />
      </IconButton>
    );
  });
}

function getPortfolioName(Name: string) {
  const PortfolioNameConfig = [
    {
      htmlComponent: "h6",
      display: { xs: "none", md: "flex" },
      fontSize: "1.3rem",
    },
    {
      htmlComponent: "h5",
      display: { xs: "flex", md: "none" },
      fontSize: "1.1rem",
    },
  ];
  return PortfolioNameConfig.map((e, idx) => {
    const variant = e.htmlComponent as TypographyVariant;
    const displaySx = e.display;
    return (
      <Typography
        key={idx}
        variant={variant}
        noWrap
        component="a"
        href="/"
        sx={{
          display: displaySx,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".15rem",
          color: "inherit",
          textDecoration: "none",
          fontSize: e.fontSize,
        }}
      >
        {Name}
      </Typography>
    );
  });
}
/**
 * ResponsiveAppBar Component - Portfolio Navigation
 *
 * A professional responsive navigation bar for portfolio websites:
 * - Desktop (md+): Displays portfolio name/logo and horizontal navigation menu
 * - Mobile (xs): Collapses navigation into a hamburger menu
 * - Includes smooth transitions and professional styling
 */
function ResponsiveAppBar({ Name, navbarItems }: NavbarProps) {
  // Router navigation hook
  const navigate = useNavigate();

  // State for mobile navigation menu - anchors the dropdown position
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  // Get theme mode and toggle function from context
  const { mode, toggleTheme } = useThemeMode();

  // Opens the mobile navigation menu
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  // Closes the mobile navigation menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Navigate to a page and close mobile menu
  const handleNavigation = (page: string) => {
    navigate(`/${page.toLowerCase()}`);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Left Section: GitHub and LinkedIn Social Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {getSocialLinks()}
          </Box>

          {/* Center Section: Portfolio Name with Icon */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Portfolio Logo/Icon */}
            <CodeIcon
              sx={{ display: { xs: "flex", md: "flex" }, mr: 1, fontSize: 28 }}
            />

            {/* Portfolio Name - visible on desktop */}
            {getPortfolioName("Yash Aggarwal")}
          </Box>

          {/* Right Section: Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {/* Mobile Menu: Hamburger icon that opens dropdown on small screens */}
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* Dropdown menu containing navigation links for mobile view */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navbarItems.map((page) => (
                <MenuItem key={page} onClick={() => handleNavigation(page)}>
                  <Typography
                    sx={{ textAlign: "center" }}
                    fontFamily={"cursive"}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Right Section: Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {/* Theme Toggle Button */}
            <IconButton
              onClick={toggleTheme}
              sx={{
                transition: "opacity 0.3s ease",
                "&:hover": { opacity: 0.8 },
              }}
              color="inherit"
              title={
                mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {mode === "dark" ? <LightbulbOutlinedIcon /> : <LightbulbIcon />}
            </IconButton>

            {/* Desktop Navigation: Displays all navigation links horizontally */}
            {navbarItems.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigation(page)}
                sx={{
                  mx: 1,
                  color: "inherit",
                  display: "block",
                  fontSize: "0.95rem",
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 0.8,
                  },
                  fontFamily: "cursive",
                  cursor: "pointer",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
