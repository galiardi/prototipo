import { Box, Typography } from '@mui/material';
import { Layout } from '../../components/layouts';
import { Form, Chart } from '../../components/ui/simulator';

const Simulador = () => {
  return (
    <Layout>
      <Box>
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
