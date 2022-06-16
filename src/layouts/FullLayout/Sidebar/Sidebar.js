/* eslint-disable */

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { SidebarWidth } from "../../../assets/global/Theme-variable";
import LogoIcon from "../Logo/LogoIcon";
import { DashboardOutlined, ExpandLess, ExpandMore } from "@material-ui/icons/";
import Collapse from "@material-ui/core/Collapse";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import ProductSidebarContent from "./Components/ProductSidebarContent";
import PurchaseSidebarContent from "./Components/PurchaseSidebarContent";
import ExpenseSidebarContent from "./Components/ExpenseSidebarContent";
import ReportsSidebarContent from "./Components/ReportsSidebarContent";
import InventorySidebarContent from "./Components/InventorySidebarContent";
const Sidebar = (props) => {
  const navigate = useNavigate();
  const checkIsLoggedIn = async () => {
    if (!localStorage.getItem("accessToken")) navigate("/login");
  };
  useEffect(() => {
    checkIsLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { pathname } = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const activeColor = "rgb(26, 151, 245)";
  const inactiveColor = "#fff";
  const activeTextColor = "#fff";
  const inactiveTextColor = "#000";
  const [openUserDropdown, setUserDropdownOpen] = useState(false);
  const handleUserDropdownOpen = () => {
    setUserDropdownOpen(!openUserDropdown);
  };
  const [openContactsDropdown, setContactsDropdownOpen] = useState(false);
  const handleContactsDropdownOpen = () => {
    setContactsDropdownOpen(!openContactsDropdown);
  };
  const navigateTo = (url) => {
    navigate(`${url}`);
  };
  const SidebarContent = (
    <Box sx={{ p: 3, height: "calc(100vh - 40px)" }}>
      <Link to="/">
        <Box
          sx={{
            display: "flex",
            alignItems: "Center",
            justifyContent: "center",
          }}
        >
          {/* <LogoIcon /> */}
          <img
            src="https://res.cloudinary.com/chiranswe/image/upload/v1633716259/desha_logo-removebg-preview_xf8sec.png"
            width="40"
          />
        </Box>
      </Link>

      <Box>
        <List
          sx={{
            mt: 4,
          }}
        >
          {!localStorage.getItem("role") ? (
            <></>
          ) : localStorage.getItem("role").toLowerCase() === "admin" ||
            localStorage.getItem("role").toLowerCase() === "cashier" ||
            localStorage.getItem("role").toLowerCase() === "accountant" ||
            localStorage.getItem("role").toLowerCase() === "stockmanager" ? (
            <ListItem
              style={{
                backgroundColor:
                  pathname === "/dashboards/home" ? activeColor : inactiveColor,
                color:
                  pathname !== "/dashboards/home"
                    ? inactiveTextColor
                    : activeTextColor,
              }}
              onClick={() => {
                return navigate("/dashboards/home");
              }}
              button
            >
              <ListItemIcon>
                <DashboardOutlined />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          ) : (
            <></>
          )}
          {!localStorage.getItem("role") ? (
            <></>
          ) : localStorage.getItem("role").toLowerCase() === "admin" ||
            localStorage.getItem("role").toLowerCase() === "cashier" ? (
            // <ListItem
            //   style={{
            //     backgroundColor:
            //       pathname === "/pos" ? activeColor : inactiveColor,
            //     color:
            //       pathname !== "/pos" ? inactiveTextColor : activeTextColor,
            //   }}
            //   onClick={() => {
            //     return navigate("/pos");
            //   }}
            //   button
            // >
            //   <ListItemIcon>
            //     <DashboardOutlined />
            //   </ListItemIcon>
            //   <ListItemText primary="POS" />
            // </ListItem>
            <></>
          ) : (
            <></>
          )}

          {/* Inventory/Products sections */}
          {!localStorage.getItem("role") ? (
            <></>
          ) : localStorage.getItem("role").toLowerCase() === "admin" ||
            localStorage.getItem("role").toLowerCase() === "accountant" ||
            localStorage.getItem("role").toLowerCase() === "stockmanager" ? (
            <ProductSidebarContent
              navigate={navigateTo}
              pathname={pathname}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              inactiveTextColor={inactiveTextColor}
              activeTextColor={activeTextColor}
            />
          ) : (
            <></>
          )}

          {/* User management section */}
          {/* {!localStorage.getItem("role") ? (
            <></>
          ) : localStorage.getItem("role").toLowerCase() === "admin" ? (
            <>
              <ListItem onClick={handleUserDropdownOpen} button>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="User Management" />
                {handleUserDropdownOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openUserDropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem
                    button
                    style={{
                      backgroundColor:
                        pathname === "/user-list" ? activeColor : inactiveColor,
                      color:
                        pathname !== "/user-list"
                          ? inactiveTextColor
                          : activeTextColor,
                      paddingLeft: "4em",
                    }}
                    onClick={() => {
                      return navigate("/user-list");
                    }}
                  >
                    <ListItemIcon>
                      <ArrowRightAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                  </ListItem>
                 
                </List>
              </Collapse>
            </>
          ) : (
            <></>
          )}
 */}


          

          {/* Contacts Section */}
          {/* {!localStorage.getItem("role") ? (
            <></>
          ) : localStorage.getItem("role").toLowerCase() === "admin" ||
            localStorage.getItem("role").toLowerCase() === "accountant" ||
            localStorage.getItem("role").toLowerCase() === "cashier" ? (
            <>
              <ListItem onClick={handleContactsDropdownOpen} button>
                <ListItemIcon>
                  <PermContactCalendarIcon />
                </ListItemIcon>
                <ListItemText primary="Contacts" />
                {handleContactsDropdownOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openContactsDropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {localStorage.getItem("role").toLowerCase() === "admin" ||
                  localStorage.getItem("role").toLowerCase() ===
                    "accountant" ? (
                    <ListItem
                      button
                      style={{
                        backgroundColor:
                          pathname === "/suppliers"
                            ? activeColor
                            : inactiveColor,
                        color:
                          pathname !== "/suppliers"
                            ? inactiveTextColor
                            : activeTextColor,
                        paddingLeft: "4em",
                      }}
                      onClick={() => {
                        return navigate("/suppliers");
                      }}
                    >
                      <ListItemIcon>
                        <ArrowRightAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="Suppliers" />
                    </ListItem>
                  ) : (
                    <></>
                  )}
                  <ListItem
                    button
                    style={{
                      backgroundColor:
                        pathname === "/customers" ? activeColor : inactiveColor,
                      color:
                        pathname !== "/customers"
                          ? inactiveTextColor
                          : activeTextColor,
                      paddingLeft: "4em",
                    }}
                    onClick={() => {
                      return navigate("/customers");
                    }}
                  >
                    <ListItemIcon>
                      <ArrowRightAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Customers" />
                  </ListItem>
                </List>
              </Collapse>
            </>
          ) : (
            <></>
          )} */}

          {/* Purchase Section */}
          {!localStorage.getItem("role") ? (
            <></>
          ) : localStorage.getItem("role").toLowerCase() === "admin" ||
            localStorage.getItem("role").toLowerCase() === "accountant" ? (
            <PurchaseSidebarContent
              navigate={navigateTo}
              pathname={pathname}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              inactiveTextColor={inactiveTextColor}
              activeTextColor={activeTextColor}
            />
          ) : (
            <></>
          )}
          {/* Expense Section */}
          {!localStorage.getItem("role") ? (
            <></>
          ) : localStorage.getItem("role").toLowerCase() === "admin" ||
            localStorage.getItem("role").toLowerCase() === "accountant" ? (
            <ExpenseSidebarContent
              navigate={navigateTo}
              pathname={pathname}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              inactiveTextColor={inactiveTextColor}
              activeTextColor={activeTextColor}
            />
          ) : (
            <></>
          )}
          {/* Inventory Section */}
          {!localStorage.getItem("role") ? (
            <></>
          ) : localStorage.getItem("role").toLowerCase() === "admin" ||
            localStorage.getItem("role").toLowerCase() === "accountant" ||
            localStorage.getItem("role").toLowerCase() === "stockmanager" ||
            localStorage.getItem("role").toLowerCase() === "cashier" ? (
            <InventorySidebarContent
              navigate={navigateTo}
              pathname={pathname}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              inactiveTextColor={inactiveTextColor}
              activeTextColor={activeTextColor}
            />
          ) : (
            <></>
          )}
          {/* Reports Section */}
          {!localStorage.getItem("role") ? (
            <></>
          ) : localStorage.getItem("role").toLowerCase() === "admin" ||
            localStorage.getItem("role").toLowerCase() === "accountant" ||
            localStorage.getItem("role").toLowerCase() === "cashier" ? (
            <ReportsSidebarContent
              navigate={navigateTo}
              pathname={pathname}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              inactiveTextColor={inactiveTextColor}
              activeTextColor={activeTextColor}
            />
          ) : (
            <></>
          )}
        </List>
      </Box>
    </Box>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={props.isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: SidebarWidth,
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      PaperProps={{
        sx: {
          width: SidebarWidth,
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

export default Sidebar;
