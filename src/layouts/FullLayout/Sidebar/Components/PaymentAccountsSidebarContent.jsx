
import React,{ useState } from 'react';
import { ListItem } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import {ExpandLess, ExpandMore} from "@material-ui/icons/";
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { List } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
const PaymentAccountsSidebarContent = ({navigate,pathname,activeColor,inactiveColor,inactiveTextColor,activeTextColor}) => {
  const [openPaymentAccountsDropdown,setPaymentAccountsDropdownOpen] = useState(false);
  const handlePaymentAccountsDropdownOpen = ()=>{
    setPaymentAccountsDropdownOpen(!openPaymentAccountsDropdown);
  }
  return (
    <>
    <ListItem 
        onClick={handlePaymentAccountsDropdownOpen}
        button>
          <ListItemIcon>
            <ViewModuleIcon />
          </ListItemIcon>
          <ListItemText primary="Payment Accounts" />
          {handlePaymentAccountsDropdownOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPaymentAccountsDropdown} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/paymentaccount/list' ? activeColor : inactiveColor, 
              color:  pathname !== '/paymentaccount/list' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/paymentaccount/list')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/paymentaccount/balancesheet' ? activeColor : inactiveColor, 
              color:  pathname !== '/paymentaccount/balancesheet' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/paymentaccount/balancesheet')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Balance Sheet" />
            </ListItem>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/paymentaccount/trialbalance' ? activeColor : inactiveColor, 
              color:  pathname !== '/paymentaccount/trialbalance' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/paymentaccount/trialbalance')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Trial Balance" />
            </ListItem>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/paymentaccount/cashflow' ? activeColor : inactiveColor, 
              color:  pathname !== '/paymentaccount/cashflow' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/paymentaccount/cashflow')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Cash Flow" />
            </ListItem>
            <ListItem 
              button 
              style={{ 
              backgroundColor: pathname === '/paymentaccount/Report' ? activeColor : inactiveColor, 
              color:  pathname !== '/paymentaccount/Report' ? inactiveTextColor : activeTextColor,paddingLeft: "4em"}}
              onClick={()=> {return navigate('/paymentaccount/Report')}}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              <ListItemText primary="Report" />
            </ListItem>
          </List>
        </Collapse>
    </>
  );
};

export default PaymentAccountsSidebarContent;