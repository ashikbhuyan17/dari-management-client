
import React, { useState } from 'react';
import { ListItem } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore } from "@material-ui/icons/";
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { List } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
const ProductSidebarContent = ({ navigate, pathname, activeColor, inactiveColor, inactiveTextColor, activeTextColor }) => {
  const [openProductDropdown, setProductDropdownOpen] = useState(false);
  const handleProductDropdownOpen = () => {
    setProductDropdownOpen(!openProductDropdown);
  }
  return (
    <>
      <ListItem
        onClick={handleProductDropdownOpen}
        button>
        <ListItemIcon>
          <ViewModuleIcon />
        </ListItemIcon>
        <ListItemText primary="Animal" />
        {handleProductDropdownOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openProductDropdown} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            style={{
              backgroundColor: pathname === '/product/list' ? activeColor : inactiveColor,
              color: pathname !== '/product/list' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
            }}
            onClick={() => { return navigate('/product/list') }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Animal List" />
          </ListItem>
          {localStorage.getItem("role").toLowerCase() === "stockmanager" ? (<></>) : (
            <>
              {/* <ListItem
                button
                style={{
                  backgroundColor: pathname === '/product/create' ? activeColor : inactiveColor,
                  color: pathname !== '/product/create' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
                }}
                onClick={() => { return navigate('/product/create') }}>
                <ListItemIcon>
                  <ArrowRightAltIcon />
                </ListItemIcon>
                <ListItemText primary="Recipe List" />
              </ListItem> */}
              {/* <ListItem
                button
                style={{
                  backgroundColor: pathname === '/product/variations' ? activeColor : inactiveColor,
                  color: pathname !== '/product/variations' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
                }}
                onClick={() => { return navigate('/product/variations') }}>
                <ListItemIcon>
                  <ArrowRightAltIcon />
                </ListItemIcon>
                <ListItemText primary="Vat" />
              </ListItem> */}
              {/* <ListItem
                button
                style={{
                  backgroundColor: pathname === '/product/units' ? activeColor : inactiveColor,
                  color: pathname !== '/product/units' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
                }}
                onClick={() => { return navigate('/product/units') }}>
                <ListItemIcon>
                  <ArrowRightAltIcon />
                </ListItemIcon>
                <ListItemText primary="Units" />
              </ListItem> */}
              <ListItem
                button
                style={{
                  backgroundColor: pathname === '/product/categories' ? activeColor : inactiveColor,
                  color: pathname !== '/product/categories' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
                }}
                onClick={() => { return navigate('/product/categories') }}>
                <ListItemIcon>
                  <ArrowRightAltIcon />
                </ListItemIcon>
                <ListItemText primary="Categories" />
              </ListItem>
            </>)}
        </List>
      </Collapse>
    </>
  );
};

export default ProductSidebarContent;