import { useContext } from 'react';
import Link from 'next/link';
import {
  Box,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  SwipeableDrawer,
  IconButton,
} from '@mui/material';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPersonCane } from '@fortawesome/free-solid-svg-icons';

import { UIContext } from '../../context/ui';
import { useAuth } from '../../context/auth';
import { BarChart } from '@mui/icons-material';

type item = {
  text: string;
  icon: React.ReactNode;
  url: string;
};

const pages: item[] = [
  {
    text: 'Simulador',
    icon: <BarChart />,
    url: '/simulador',
  },
  {
    text: 'Mis tips favoritos',
    icon: <CheckBoxOutlinedIcon />,
    url: '/mis-tips-favoritos',
  },
  {
    text: 'Inicio',
    icon: <HomeOutlinedIcon />,
    url: '/',
  },
];

const categories: item[] = [
  {
    text: 'Ahorro',
    icon: <FontAwesomeIcon icon={faPiggyBank} />,
    url: '/ahorro',
  },
  {
    text: 'Inversión',
    icon: <FontAwesomeIcon icon={faMoneyBillTrendUp} />,
    url: '/inversion',
  },
  {
    text: 'Vivienda',
    icon: <FontAwesomeIcon icon={faHouse} />,
    url: '/vivienda',
  },
  {
    text: 'Previsión',
    icon: <FontAwesomeIcon icon={faPersonCane} />,
    url: '/prevision',
  },
];

export const Sidebar = () => {
  const { user, signout } = useAuth();
  const { sidemenuOpen, closeSidemenu, openSidemenu } = useContext(UIContext);
  // const iOS =
  //   typeof navigator !== "undefined" &&
  //   /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      anchor="left"
      open={sidemenuOpen}
      onClose={closeSidemenu}
      onOpen={openSidemenu}
      // disableBackdropTransition={!iOS}
      // disableDiscovery={iOS}
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Box
            sx={{
              padding: '1rem',
              display: 'flex',
              justifyContent: 'center',
              flexGrow: 2,
            }}
          >
            <Typography variant="h6">Menú</Typography>
          </Box>
          <IconButton onClick={closeSidemenu}>
            <ArrowBackIosNewOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider />
        <List>
          <br />
          {categories.map((category, index) => (
            <Link href={category.url} key={index}>
              <ListItem onClick={closeSidemenu}>
                <ListItemIcon>{category.icon}</ListItemIcon>
                <ListItemText primary={category.text} />
              </ListItem>
            </Link>
          ))}
          <br />
          <Divider />
          <br />

          {pages.map((page, index) => {
            return (
              <Link href={page.url} key={index}>
                <ListItem onClick={closeSidemenu}>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.text} />
                </ListItem>
              </Link>
            );
          })}
          {user && (
            <>
              <ListItem
                onClick={() => {
                  closeSidemenu();
                  signout();
                }}
              >
                <ListItemIcon>
                  <LogoutOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Cerrar sesión" />
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};