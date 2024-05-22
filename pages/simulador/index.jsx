import { Box, Typography } from '@mui/material';
import { Layout } from '../../components/layouts';
import { Form, Chart } from '../../components/ui/simulator';
import { useGetAverageAnnualInflation } from '../../functions';

const Simulador = () => {
  console.log(useGetAverageAnnualInflation());

  return (
    <Layout>
      <Box sx={{ padding: '0rem' }}>
        <Typography variant="h6">Simulador</Typography>
      </Box>
      <Box>
        <Form />
      </Box>

      <div style={{ width: '100%' }}>
        <Chart />
      </div>
    </Layout>
  );
};

export default Simulador;
