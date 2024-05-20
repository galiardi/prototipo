import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Layout } from '../../components/layouts';

const Simulador = () => {
  const [historicalIPC, setHistoricalIPC] = useState([]);
  const [generalIPC, setGeneralIPC] = useState([]);

  console.log(historicalIPC);

  const getAnnualAverageInflation = (ipcSerie) => {
    if (!ipcSerie.length) return 0;
    const firstIPCIndex = ipcSerie.length % 12;
    const trimedIPCSerie = ipcSerie.slice(firstIPCIndex);
    const filteredIPCSerie = trimedIPCSerie.filter((ipc, i) => i % 12 === 0);

    const sum = filteredIPCSerie.reduce((acc, el) => acc + Number(el.value), 0);
    const averageInflation = sum / filteredIPCSerie.length;
    return averageInflation;
  };

  console.log(getAnnualAverageInflation(generalIPC));

  useEffect(() => {
    (async () => {
      const { data, error } = await getEconomicIndicators();
      if (error) return console.log(error);
      setHistoricalIPC(data.historicalIPC.Obs);
      setGeneralIPC(data.generalIPC.Obs);
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
