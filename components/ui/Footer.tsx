import Link from 'next/link';
import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Box,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer = () => {
  return (
    <Box
      style={{
        position: 'sticky',
        bottom: 0,
        width: '100%',
        zIndex: 10,
      }}
    >
      <Divider />
      <BottomNavigation>
        <BottomNavigationAction
          LinkComponent={Link}
          href={`https://wa.me/56953295712/?text=Hola,%20te%20escribo%20desde%20https://tienditanomada.vercel.app`}
          icon={<WhatsAppIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};
