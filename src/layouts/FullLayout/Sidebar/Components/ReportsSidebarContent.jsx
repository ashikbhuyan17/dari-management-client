
import React, { useState } from 'react';
import { ListItem } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore } from "@material-ui/icons/";
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { List } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
const ReportsSidebarContent = ({ navigate, pathname, activeColor, inactiveColor, inactiveTextColor, activeTextColor }) => {
  const [openReportDropdown, setReportDropdownOpen] = useState(false);
  const handleReportDropdownOpen = () => {
    setReportDropdownOpen(!openReportDropdown);
  }
  return (
    <>
      <ListItem
        onClick={handleReportDropdownOpen}
        button>
        <ListItemIcon>
          <ViewModuleIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
        {handleReportDropdownOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openReportDropdown} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            style={{
              backgroundColor: pathname === '/report/purchase' ? activeColor : inactiveColor,
              color: pathname !== '/report/purchase' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
            }}
            onClick={() => { return navigate('/report/purchase') }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Purchase Report" />
          </ListItem>
          <ListItem
            button
            style={{
              backgroundColor: pathname === '/report/animal' ? activeColor : inactiveColor,
              color: pathname !== '/report/animal' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
            }}
            onClick={() => { return navigate('/report/animal') }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Animal Report" />
          </ListItem>
          {/* <ListItem
            button
            style={{
              backgroundColor: pathname === '/report/general-item/increase' ? activeColor : inactiveColor,
              color: pathname !== '/report/general-item/increase' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
            }}
            onClick={() => { return navigate('/report/general-item/increase') }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="General Item Increase" />
          </ListItem>
          <ListItem
            button
            style={{
              backgroundColor: pathname === '/report/general-item/stock/adjustment' ? activeColor : inactiveColor,
              color: pathname !== '/report/general-item/stock/adjustment' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
            }}
            onClick={() => { return navigate('/report/general-item/stock/adjustment') }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="General Item Stock Adjustment" />
          </ListItem>
          <ListItem
            button
            style={{
              backgroundColor: pathname === '/report/daily/sales' ? activeColor : inactiveColor,
              color: pathname !== '/report/daily/sales' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
            }}
            onClick={() => { return navigate('/report/daily/sales') }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Daily Sales Report" />
          </ListItem>
          <ListItem
            button
            style={{
              backgroundColor: pathname === '/report/sales/list' ? activeColor : inactiveColor,
              color: pathname !== '/report/sales/list' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
            }}
            onClick={() => { return navigate('/report/sales/list') }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Sales List" />
          </ListItem>
          <ListItem
            button
            style={{
              backgroundColor: pathname === '/report/item/sales' ? activeColor : inactiveColor,
              color: pathname !== '/report/item/sales' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
            }}
            onClick={() => { return navigate('/report/item/sales') }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Item Sales Report" />
          </ListItem>
          <ListItem
            button
            style={{
              backgroundColor: pathname === '/report/item/sales/list' ? activeColor : inactiveColor,
              color: pathname !== '/report/item/sales/list' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
            }}
            onClick={() => { return navigate('/report/item/sales/list') }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Item Sales List" />
          </ListItem>
          <ListItem
            button
            style={{
              backgroundColor: pathname === '/report/profit' ? activeColor : inactiveColor,
              color: pathname !== '/report/profit' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
            }}
            onClick={() => { return navigate('/report/profit') }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Profit Report" />
          </ListItem>
          <ListItem
            button
            style={{
              backgroundColor: pathname === '/report/activity-log' ? activeColor : inactiveColor,
              color: pathname !== '/report/activity-log' ? inactiveTextColor : activeTextColor, paddingLeft: "4em"
            }}
            onClick={() => { return navigate('/report/activity-log') }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Activity Log" />
          </ListItem> */}
        </List>
      </Collapse>
    </>
  );
};

export default ReportsSidebarContent;