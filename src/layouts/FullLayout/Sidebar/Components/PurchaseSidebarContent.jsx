
import React,{ useState } from 'react';
import { ListItem } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import {ExpandLess, ExpandMore} from "@material-ui/icons/";
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { List } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
const PurchaseSidebarContent = ({navigate,pathname,activeColor,inactiveColor,inactiveTextColor,activeTextColor}) => {
  const [openPurchaseDropdown,setPurchaseDropdownOpen] = useState(false);
  const handlePurchaseDropdownOpen = ()=>{
    setPurchaseDropdownOpen(!openPurchaseDropdown);
  }
  return (
    <>
    <ListItem 
        onClick={handlePurchaseDropdownOpen}
        button>
          <ListItemIcon>
            <ViewModuleIcon />
          </ListItemIcon>
          <ListItemText primary="Purchase" />
          {handlePurchaseDropdownOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPurchaseDropdown} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/purchase/list' ? activeColor : inactiveColor, 
              color:  pathname !== '/purchase/list' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/purchase/list')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="List Purchase" />
            </ListItem>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/purchase/create' ? activeColor : inactiveColor, 
              color:  pathname !== '/purchase/create' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/purchase/create')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Add Purchase" />
            </ListItem>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/purchase/return' ? activeColor : inactiveColor, 
              color:  pathname !== '/purchase/return' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/purchase/return')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Purchase Return List" />
            </ListItem>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/purchase/category' ? activeColor : inactiveColor, 
              color:  pathname !== '/purchase/category' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/purchase/category')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Purchase Category" />
            </ListItem>
          </List>
        </Collapse>
    </>
  );
};

export default PurchaseSidebarContent;