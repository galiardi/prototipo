import { Box, Typography } from '@mui/material';

import { Logger, MainCarousel } from '../components/ui';
import { useAuth } from '../context/auth';
import { Layout } from '../components/layouts';

const Home = () => {
  const { user } = useAuth();

  return (
    <Layout>
      {!user && (
        <Box sx={{ margin: '1.5rem 0 2rem 0' }}>
          {' '}
          <Logger />
        </Box>
      )}
      <MainCarousel />
      <Box display="flex" justifyContent="center">
        <Typography
          sx={{
            margin: '2rem',
            fontFamily: '',
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          - Tips financieros -
        </Typography>
      </Box>
    </Layout>
  );
};

export default Home;
