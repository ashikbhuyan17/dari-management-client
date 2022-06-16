
import React,{ useState } from 'react';
import { ListItem } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import {ExpandLess, ExpandMore} from "@material-ui/icons/";
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { List } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
const StockTransferSidebarContent = ({navigate,pathname,activeColor,inactiveColor,inactiveTextColor,activeTextColor}) => {
  const [openStockTransferDropdown,setStockTransferDropdownOpen] = useState(false);
  const handleStockTransferDropdownOpen = ()=>{
    setStockTransferDropdownOpen(!openStockTransferDropdown);
  }
  return (
    <>
    <ListItem 
        onClick={handleStockTransferDropdownOpen}
        button>
          <ListItemIcon>
            <ViewModuleIcon />
          </ListItemIcon>
          <ListItemText primary="Stock Transfers" />
          {handleStockTransferDropdownOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openStockTransferDropdown} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/stock-transfer/list' ? activeColor : inactiveColor, 
              color:  pathname !== '/stock-transfer/list' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/stock-transfer/list')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/stock-transfer/create' ? activeColor : inactiveColor, 
              color:  pathname !== '/stock-transfer/create' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/stock-transfer/create')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Add" />
            </ListItem>
          </List>
        </Collapse>
    </>
  );
};

export default StockTransferSidebarContent;