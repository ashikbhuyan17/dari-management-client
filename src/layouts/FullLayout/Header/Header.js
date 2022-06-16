/* eslint-disable */

import React from 'react';
//import { Link } from 'react-router-dom';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';

import PersonAdd from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';
import Logout from '@material-ui/icons/Logout';

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Avatar,
  Divider,
  ListItemIcon,
} from '@material-ui/core';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import userimg from '../../../assets/images/users/user.jpg';
import { useNavigate } from 'react-router';

const Header = (props) => {
  const navigate = useNavigate();
  const logOut = ()=>{
    handleClose4();
    MySwal.fire({
      title: 'Sure you want to leave?',
      showCancelButton: true,
      confirmButtonText: 'Leave',
      cancelButtonText: `Stay`,
    }).then(async(result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate('/login');
      } else if (result.isDenied) {}
    })
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [posAnchorEl, setPOSAnchorEl] = React.useState(null);

  const handlePOSClick = (event) => {
    setPOSAnchorEl(event.currentTarget);
  };

  const handlePOSClose = () => {
    setPOSAnchorEl(null);
  };

  // 4
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  // 5
  const [anchorEl5, setAnchorEl5] = React.useState(null);

  const handleClick5 = (event) => {
    setAnchorEl5(event.currentTarget);
  };

  const handleClose5 = () => {
    setAnchorEl5(null);
  };

  return (
    <AppBar sx={props.sx} elevation={0} className={props.customClass}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: 'none',
              xs: 'inline',
            },
          }}
        >
          <MenuOutlinedIcon width="20" height="20" />
        </IconButton>
        <IconButton
          aria-label="menu"
          color="inherit"
          aria-controls="dd-menu"
          aria-haspopup="true"
          onClick={handleClick5}
        >
          <AddToPhotosOutlinedIcon />
        </IconButton>
        <Menu
          id="dd-menu"
          anchorEl={anchorEl5}
          keepMounted
          open={Boolean(anchorEl5)}
          onClose={handleClose5}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          sx={{
            '& .MuiMenu-paper': {
              width: '250px',
              right: 0,
              top: '70px !important',
            },
          }}
        >
          <MenuItem onClick={handleClose5}>
            <Avatar
              sx={{
                width: '35px',
                height: '35px',
              }}
            />
            <Box
              sx={{
                ml: 2,
              }}
            >
              Create User
            </Box>
          </MenuItem>
          <MenuItem onClick={handleClose5}>
            <Avatar
              sx={{
                width: '35px',
                height: '35px',
              }}
            />
            <Box
              sx={{
                ml: 2,
              }}
            >
              Manage Users
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose5}>
            <StorefrontOutlinedIcon width="20" height="20" />
            <Box
              sx={{
                ml: 2,
              }}
            >
              Create Shop
            </Box>
          </MenuItem>
          <MenuItem onClick={handleClose5}>
            <StorefrontOutlinedIcon width="20" height="20" />

            <Box
              sx={{
                ml: 2,
              }}
            >
              Manage Shops
            </Box>
          </MenuItem>
        </Menu>
        <Box flexGrow={1} />
        {/* ------------------------------------------- */}
        {/* POS Dropdown */}
        {/* ------------------------------------------- */}
        <IconButton
          aria-label="menu"
          color="inherit"
          aria-controls="pos-menu"
          aria-haspopup="true"
          onClick={handlePOSClick}
        >
          <CreditCardOutlinedIcon width="20" height="20" />
        </IconButton>
        <Menu
          id="pos-menu"
          anchorEl={posAnchorEl}
          keepMounted
          open={Boolean(posAnchorEl)}
          onClose={handlePOSClose}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          sx={{
            '& .MuiMenu-paper': {
              width: '200px',
              right: 0,
              top: '70px !important',
            },
          }}
        >
          <MenuItem onClick={handleClose}>Create POS</MenuItem>
          <MenuItem onClick={handleClose}>Recent Transactions</MenuItem>
          <MenuItem onClick={handleClose}>Product List</MenuItem>
          <MenuItem onClick={handleClose}>Add Product </MenuItem>
        </Menu>
        {/* ------------------------------------------- */}
        {/* POS Dropdown */}
        {/* ------------------------------------------- */}
        {/* ------------------------------------------- */}
        {/* Notifications Dropdown */}
        {/* ------------------------------------------- */}
        <IconButton
          aria-label="menu"
          color="inherit"
          aria-controls="notification-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <NotificationsNoneOutlinedIcon width="20" height="20" />
        </IconButton>
        <Menu
          id="notification-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          sx={{
            '& .MuiMenu-paper': {
              width: '200px',
              right: 0,
              top: '70px !important',
            },
          }}
        >
          <MenuItem onClick={handleClose}>Action</MenuItem>
          <MenuItem onClick={handleClose}>Action Else</MenuItem>
          <MenuItem onClick={handleClose}>Another Action</MenuItem>
        </Menu>
        {/* ------------------------------------------- */}
        {/* End Notifications Dropdown */}
        {/* ------------------------------------------- */}
        {/* ------------------------------------------- */}
        {/* Profile Dropdown */}
        {/* ------------------------------------------- */}
        <Box
          sx={{
            width: '1px',
            backgroundColor: 'rgba(0,0,0,0.1)',
            height: '25px',
            ml: 1,
          }}
        ></Box>
        <Button
          aria-label="menu"
          color="inherit"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick4}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Avatar
              src={
                'data:image/png;base64,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'
              }
              alt={userimg}
              sx={{
                width: '30px',
                height: '30px',
              }}
            />
          </Box>
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl4}
          keepMounted
          open={Boolean(anchorEl4)}
          onClose={handleClose4}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          sx={{
            '& .MuiMenu-paper': {
              width: '250px',
              right: 0,
              top: '70px !important',
            },
          }}
        >
          <MenuItem onClick={handleClose4}>
            <Avatar
              sx={{
                width: '35px',
                height: '35px',
              }}
            />
            <Box
              sx={{
                ml: 2,
              }}
            >
              My account
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose4}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose4}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={logOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
