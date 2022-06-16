
import React,{ useState } from 'react';
import { ListItem } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import {ExpandLess, ExpandMore} from "@material-ui/icons/";
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { List } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
const ExpenseSidebarContent = ({navigate,pathname,activeColor,inactiveColor,inactiveTextColor,activeTextColor}) => {
  const [openExpenseDropdown,setExpenseDropdownOpen] = useState(false);
  const handleExpenseDropdownOpen = ()=>{
    setExpenseDropdownOpen(!openExpenseDropdown);
  }
  return (
    <>
    <ListItem 
        onClick={handleExpenseDropdownOpen}
        button>
          <ListItemIcon>
            <ViewModuleIcon />
          </ListItemIcon>
          <ListItemText primary="Expenses" />
          {handleExpenseDropdownOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openExpenseDropdown} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/expense/list' ? activeColor : inactiveColor, 
              color:  pathname !== '/expense/list' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/expense/list')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/expense/create' ? activeColor : inactiveColor, 
              color:  pathname !== '/expense/create' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/expense/create')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Add" />
            </ListItem>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/expense/categories' ? activeColor : inactiveColor, 
              color:  pathname !== '/expense/categories' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/expense/categories')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Expense Categories" />
            </ListItem>
          </List>
        </Collapse>
    </>
  );
};

export default ExpenseSidebarContent;