import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Layout } from '../../components/layouts';

const Simulador = () => {
  const [historicalIPC, setHistoricalIPC] = useState([]);
  const [generalIPC, setGeneralIPC] = useState([]);

  useEffect(() => {
    getEconomicIndicators();
  }, []);

  const getEconomicIndicators = async () => {
    try {
      const response = await fetch('/api/economic-indicators');
      const { data, error } = await response.json();
      if (error) console.log(error);
      console.log(data);
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
