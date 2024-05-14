import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Carousel from 'react-bootstrap/Carousel';
import { CopyToast } from '../../../components/ui';

import { ProductosContext } from '../../../context/productos';
import { Layout } from '../../../components/layouts';
import { AddButton, StockWarningModal } from '../../../components/ui';
import { Svg } from '../../../components/ui';
import { UIContext } from '../../../context/ui';
import { relative } from 'path';
import Head from 'next/head';

export default function ProductPage() {
  const router = useRouter();
  const id = router.query.id;

  // dynamic import. ProductContext exposes each product individually by id
  const { [id]: product = {} } = useContext(ProductosContext);

  const { showCopyToast } = useContext(UIContext);

  const {
    category,
    title,
    description,
    imageUrl,
    landscapeImgUrl,
    price,
    date,
  } = product;

  const share = () => {
    const { href } = new URL(location.href);
    console.log(href);
    if (navigator.share) {
      navigator.share({ url: href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showCopyToast(true);
    }
  };

  // const addToFavorites = () => {};

  return (
    <>
      <Head>
        {/* <meta name="description" content="" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`https://matute.vercel.app/${id}`} />
        <meta property="og:description" content={description} /> */}
        <meta property="og:image" content={imageUrl} />
      </Head>
      <Layout>
        <Card sx={{ width: '100%', position: 'relative' }}>
          <CardHeader
            avatar={<Svg width={48} height={48} src="/logo.svg" />}
            title={title}
            subheader={new Date(date).toLocaleDateString()}
          />
          <Carousel interval={null}>
            {[imageUrl, landscapeImgUrl].map((element, i) => {
              return (
                <Carousel.Item key={i}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={element}
                    alt={`imagen ${i + 1}`}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <br />
            <Typography variant="body1" color="text.secondary">
              ${price}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <AddButton itemData={product} goToCart />
          </CardActions>
          <CardActions disableSpacing>
            {/* <IconButton aria-label="add to favorites" onClick={addToFavorites}>
        <FavoriteIcon />
      </IconButton> */}
            <IconButton aria-label="share" onClick={share}>
              <ShareIcon />
            </IconButton>
          </CardActions>
          <CardActions>
            <Link href={`/${category}`}>
              <Typography variant="body2" color="text.secondary">
                Ver mas {category}
              </Typography>
            </Link>
          </CardActions>
          <Box sx={{ position: 'absolute', bottom: '1rem', right: '1rem' }}>
            <CopyToast />
          </Box>
        </Card>
        <StockWarningModal />
      </Layout>
    </>
  );
}
