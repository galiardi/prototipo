import { Box, Typography } from '@mui/material';
import { Layout } from '../components/layouts';

const Vivienda = () => {
  // const { productosDisponibles } = useContext(ProductosContext);
  // const Vivienda = productosDisponibles.filter(
  //   (producto) => producto.category === 'Vivienda'
  // );
  return (
    <Layout>
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="h6">Vivienda</Typography>
      </Box>
      {/* <ItemList productos={Vivienda} /> */}
    </Layout>
  );
};

export default Vivienda;
