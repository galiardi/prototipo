import { useContext } from 'react';
import Image from 'next/image';
import { Box, Typography, Grid } from '@mui/material';
import { Layout } from '../components/layouts';
import { Tip } from '../components/ui';
import { TipsContext } from '../context/tips';
import { FavoritesContext } from '../context/favorites';

const Inversion = () => {
  const { tips } = useContext(TipsContext);
  const tipsFiltered = tips.filter((tip) => tip.category === 'inversion');
  const { favorites } = useContext(FavoritesContext);

  return (
    <Layout>
      <Box sx={{ paddingBottom: '0.5rem' }}>
        <Typography variant="h6">Inversión</Typography>
      </Box>
      <Box marginBottom={'1rem'}>
        <Image
          src={'/images/inversion.webp'}
          width={150}
          height={150}
          alt=""
          style={{ borderRadius: '100%' }}
        />
      </Box>
      <Box sx={{ width: '90%' }}>
        <Grid container spacing={2}>
          {tipsFiltered.map((tip, i) => {
            return (
              <Tip key={i} tip={tip} isFavorite={favorites.includes(tip.id)} />
            );
          })}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Inversion;
