import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Button from "@mui/material/Button";

import Pay from "./../Pay/Pay";
import MyOrders from "./../MyOrders/MyOrders";
import Review from "./../Review/Review";
import useAuth from "./../../../hooks/useAuth";

import AdminRoute from "./../../Login/AdminRoute/AdminRoute";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import DashboardHomeUser from "./../DashBoardHomeUser/DashboardHomeUser";
import DashBoardHomeAdmin from "./../DashBoardHomeAdmin/DashBoardHomeAdmin";
import ManageAllOrders from "./../ManageAllOrders/ManageAllOrders";

import ManageProducts from "./../ManageProducts/ManageProducts";

import AddAVehicle from "./../AddAVehicle/AddAVehicle";

const drawerWidth = 200;

function Dashboard(props) {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);
   let { path, url } = useRouteMatch();
   const { admin, logout } = useAuth();
   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const drawer = (
      <div>
         <Toolbar />
         <Divider />
         {admin ? (
            <Box>
               <Link
                  style={{ textDecoration: "none" }}
                  to={`${url}/manageAllOrders`}
               >
                  <Button color="inherit">Manage All Orders</Button>
               </Link>
               <Link
                  style={{ textDecoration: "none" }}
                  to={`${url}/addproduct`}
               >
                  <Button color="inherit">Add A Product</Button>
               </Link>
               <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
                  <Button color="inherit">Make Admin</Button>
               </Link>
               <Link
                  style={{ textDecoration: "none" }}
                  to={`${url}/manageProducts`}
               >
                  <Button color="inherit">Manage Products</Button>
               </Link>
               <Link to={`${url}`} style={{ textDecoration: "none" }}>
                  <Button onClick={logout} color="inherit">
                     Log Out
                  </Button>
               </Link>
            </Box>
         ) : (
            <Box>
               <Link style={{ textDecoration: "none" }} to="/moreVehicles">
                  <Button color="inherit">Explore Vehicles</Button>
               </Link>

               <br />
               <Link to={`${url}/pay`} style={{ textDecoration: "none" }}>
                  <Button color="inherit">Pay</Button>
               </Link>
               <br />
               <Link to={`${url}/myorders`} style={{ textDecoration: "none" }}>
                  <Button color="inherit">My Orders</Button>
               </Link>
               <br />
               <Link to={`${url}/review`} style={{ textDecoration: "none" }}>
                  <Button color="inherit">Review</Button>
               </Link>
               <br />
               <Link to={`${url}`} style={{ textDecoration: "none" }}>
                  <Button onClick={logout} color="inherit">
                     Log Out
                  </Button>
               </Link>
            </Box>
         )}
      </div>
   );

   const container =
      window !== undefined ? () => window().document.body : undefined;

   return (
      <Box sx={{ display: "flex" }}>
         <CssBaseline />
         <AppBar
            position="fixed"
            sx={{
               width: { sm: `calc(100% - ${drawerWidth}px)` },
               ml: { sm: `${drawerWidth}px` },
            }}
         >
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" noWrap component="div">
                  Dashboard
               </Typography>
            </Toolbar>
         </AppBar>
         <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
         >
            <Drawer
               container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                     boxSizing: "border-box",
                     width: drawerWidth,
                  },
               }}
            >
               {drawer}
            </Drawer>
            <Drawer
               variant="permanent"
               sx={{
                  display: { xs: "none", sm: "block" },
                  "& .MuiDrawer-paper": {
                     boxSizing: "border-box",
                     width: drawerWidth,
                  },
               }}
               open
            >
               {drawer}
            </Drawer>
         </Box>
         <Box
            component="main"
            sx={{
               flexGrow: 1,
               p: 3,
               width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
         >
            <Toolbar />

            <Switch>
               <AdminRoute path={`${path}/manageAllOrders`}>
                  <ManageAllOrders></ManageAllOrders>
               </AdminRoute>
               <AdminRoute path={`${path}/addproduct`}>
                  <AddAVehicle></AddAVehicle>
               </AdminRoute>
               <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
               </AdminRoute>
               <AdminRoute path={`${path}/manageProducts`}>
                  <ManageProducts></ManageProducts>
               </AdminRoute>

               <Route exact path={`${path}`}>
                  {admin ? (
                     <Box>
                        {" "}
                        <DashBoardHomeAdmin></DashBoardHomeAdmin>
                     </Box>
                  ) : (
                     <Box>
                        <DashboardHomeUser></DashboardHomeUser>
                     </Box>
                  )}
               </Route>

               <Route exact path={`${path}/pay`}>
                  <Pay></Pay>
               </Route>
               <Route exact path={`${path}/myorders`}>
                  <MyOrders></MyOrders>
               </Route>
               <Route exact path={`${path}/review`}>
                  <Review></Review>
               </Route>
               <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
               </AdminRoute>
            </Switch>
         </Box>
      </Box>
   );
}

Dashboard.propTypes = {
   /**
    * Injected by the documentation to work in an iframe.
    * You won't need it on your project.
    */
   window: PropTypes.func,
};

export default Dashboard;
