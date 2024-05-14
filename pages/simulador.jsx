import { Box, Typography } from '@mui/material';
import { Layout } from '../components/layouts';

const Simulador = () => {
  // const { productosDisponibles } = useContext(ProductosContext);
  // const Simulador = productosDisponibles.filter(
  //   (producto) => producto.category === 'Simulador'
  // );
  return (
    <Layout>
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="h6">Simulador</Typography>
      </Box>
      {/* <ItemList productos={Simulador} /> */}
    </Layout>
  );
};

export default Simulador;
