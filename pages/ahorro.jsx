import { Box, Typography } from '@mui/material';
import { Layout } from '../components/layouts';

const Ahorro = () => {
  // const { productosDisponibles } = useContext(ProductosContext);
  // const Ahorro = productosDisponibles.filter(
  //   (producto) => producto.category === 'Ahorro'
  // );
  return (
    <Layout>
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="h6">Ahorro</Typography>
      </Box>
      {/* <ItemList productos={Ahorro} /> */}
    </Layout>
  );
};

export default Ahorro;
