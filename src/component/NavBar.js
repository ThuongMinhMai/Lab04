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
import { Link } from "react-router-dom";
import { UserAuth } from "./AuthContext";
import { Tooltip, Avatar } from "@mui/material";
const pages = ["Home", "About", "News", "Contact"];

function ResponsiveAppBar() {
  const { user, logOut } = UserAuth();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [activeTab, setActiveTab] = React.useState("Home");
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleTabClick = (page) => {
    setActiveTab(page); // Update the active tab when a tab is clicked
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="static"
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: "100%",
        minHeight: "75px",
        zIndex: "998",
        background: "linear-gradient(to right, #3b5998, #9b59b6)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar >
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleTabClick(page)}>
                  <Typography
                    className="tab"
                    textAlign="center"
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: page === activeTab ? "white" : "#b1b5b3",
                      display: "block",
                      textDecoration: "none",
                    }}
                    component={Link} // Add Link component
                    to={
                      page.toLowerCase() === "home"
                        ? "/"
                        : `/${page.toLowerCase()}`
                    }
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to="/">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img
                src="assets/logo.png"
                style={{
                  width: "250px",
                  height: "90px",
                  display: { xs: "flex", md: "none" },
                }}
              ></img>
            </div>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleTabClick(page)}
                sx={{
                  my: 2,
                  mx:5,
                  color: page === activeTab ? "white" : "#b1b5b3",
                  display: "block",
                }}
                component={Link} // Add Link component
                to={
                  page.toLowerCase() === "home" ? "/" : `/${page.toLowerCase()}`
                }
              >
                {page}
              </Button>
            ))}
            
          </Box>
          {user?.displayName ? (
            <div>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.email} src={user.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link to="/create" style={{ textDecoration: "none" }}>
                      Create
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center" onClick={handleSignOut}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Sign in
              </Button>
            </Link>
          )}
        </Toolbar>
         
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
