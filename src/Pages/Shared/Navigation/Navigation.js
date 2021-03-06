import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const Navigation = () => {
   const { user, logout } = useAuth();
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar enableColorOnDark position="static">
            <Toolbar>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2, my: 2 }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
               ></Typography>
               <Link
                  style={{
                     textDecoration: "none",
                     color: "white",
                  }}
                  to="/home"
               >
                  <Button color="inherit">Home</Button>
               </Link>
               <Link
                  style={{
                     textDecoration: "none",
                     color: "white",
                  }}
                  to="/moreVehicles"
               >
                  <Button color="inherit">More Vehicles</Button>
               </Link>

               {user?.email ? (
                  <Box>
                     <NavLink
                        style={{ textDecoration: "none", color: "white" }}
                        to="/dashboard"
                     >
                        <Button color="inherit">Dashboard</Button>
                     </NavLink>
                     <a
                        href=""
                        style={{ textDecoration: "none", color: "white" }}
                     >
                        <span
                           style={{
                              textDecoration: "none",
                              color: "white",
                              textWeight: "0.9em",
                           }}
                        >
                           {user?.displayName}
                        </span>{" "}
                        <Button
                           style={{ textDecoration: "none", color: "white" }}
                           onClick={logout}
                           color="inherit"
                        >
                           Logout
                        </Button>{" "}
                     </a>
                  </Box>
               ) : (
                  <NavLink
                     style={{ textDecoration: "none", color: "white" }}
                     to="/login"
                  >
                     <Button color="inherit">Login</Button>
                  </NavLink>
               )}
            </Toolbar>
         </AppBar>
      </Box>
   );
};

export default Navigation;
