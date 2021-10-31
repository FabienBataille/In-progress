import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './menuBurger.css';
import { Avatar, Button, ListItemText, Menu, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { useState } from 'react';

function MenuBurger() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItemsList = [
    {
      name: 'Accueil',
      key: 1,
      link: '/',
      icon: <HomeIcon />,
    },
    {
      name: 'Connexion',
      key: 2,
      link: '/connection',
      icon: <PersonIcon />,
    },
    {
      name: 'Discussion',
      key: 3,
      link: 'comment',
      icon: <ChatOutlinedIcon />,
    },
  ];
  return (
    <div className="MenuBurger">
      <Button
        id="basic-button"
        className="logoBurger"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" sx={{ color: 'white' }} />
      </Button>
      <Menu
        id="basic-menu"
        className="menuList"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItemsList.map((item) => {
          return (
            <MenuItem className="MenuItem" key={item.key} onClick={handleClose}>
              <Avatar sx={{ marginRight: '1rem' }}>{item.icon}</Avatar>
              <Link className="listItemText" to={item.link}>
                <ListItemText primary={item.name} />
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}

export default MenuBurger;
