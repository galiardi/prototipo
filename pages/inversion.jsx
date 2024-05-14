import { Box, Typography } from '@mui/material';
import { Layout } from '../components/layouts';

const Inversion = () => {
  // const { productosDisponibles } = useContext(ProductosContext);
  // const Inversion = productosDisponibles.filter(
  //   (producto) => producto.category === 'Inversion'
  // );
  return (
    <Layout>
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="h6">Inversion</Typography>
      </Box>
      {/* <ItemList productos={Inversion} /> */}
    </Layout>
  );
};

export default Inversion;
