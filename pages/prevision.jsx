import { Box, Typography } from '@mui/material';
import { Layout } from '../components/layouts';

const Prevision = () => {
  // const { productosDisponibles } = useContext(ProductosContext);
  // const Prevision = productosDisponibles.filter(
  //   (producto) => producto.category === 'Prevision'
  // );
  return (
    <Layout>
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="h6">Prevision</Typography>
      </Box>
      {/* <ItemList productos={Prevision} /> */}
    </Layout>
  );
};

export default Prevision;
