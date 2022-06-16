
import React,{ useState } from 'react';
import { ListItem } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import {ExpandLess, ExpandMore} from "@material-ui/icons/";
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { List } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
const InventorySidebarContent = ({navigate,pathname,activeColor,inactiveColor,inactiveTextColor,activeTextColor}) => {
  const [openProductDropdown,setProductDropdownOpen] = useState(false);
  const handleProductDropdownOpen = ()=>{
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
          <ListItemText primary="Inventory" />
          {handleProductDropdownOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProductDropdown} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/rawmaterial/create' ? activeColor : inactiveColor, 
              color:  pathname !== '/rawmaterial/create' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/rawmaterial/create')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Raw Materials" />
            </ListItem>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/generalitems/create' ? activeColor : inactiveColor, 
              color:  pathname !== '/generalitems/create' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/generalitems/create')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="General Items" />
            </ListItem>
          </List>
        </Collapse>
    </>
  );
};

export default InventorySidebarContent;