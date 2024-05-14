import { Box, Typography } from '@mui/material';
import { Svg } from './Svg';

export const Logo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '2rem',
      }}
    >
      <Svg src="/logo.svg" height={56} width={56} />
      <Typography sx={{ fontFamily: 'Sacramento' }}>tiendita nomada</Typography>
    </Box>
  );
};
