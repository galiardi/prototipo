import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Layout } from '../../components/layouts';

const Simulador = () => {
  useEffect(() => {
    (async () => {
      const { data, error } = await getEconomicIndicators();
      if (error) return console.log(error);
      console.log(data);
    })();
  }, []);

  const getEconomicIndicators = async () => {
    try {
      const response = await fetch('/api/economic-indicators');
      const { data, error } = await response.json();
      return { data, error };
    } catch (e) {
      console.log(e);
      return;
    }
  };
  return (
    <Layout>
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="h6">Simulador</Typography>
      </Box>
    </Layout>
  );
};

export default Simulador;
