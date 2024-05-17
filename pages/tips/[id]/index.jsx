import { useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Grid, Paper, Divider } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import { CopyToast } from '../../../components/ui';
import { Layout } from '../../../components/layouts';
import { Svg } from '../../../components/ui';
import { relative } from 'path';
import { FavoritesContext } from '../../../context/favorites';
import { TipsContext } from '../../../context/tips';
import { UIContext } from '../../../context/ui';
import { useAuth } from '../../../context/auth';

const pages = {
  ahorro: 'ahorro',
  inversión: 'inversion',
  vivienda: 'vivienda',
  previsión: 'prevision',
};

export default function TipPage() {
  const router = useRouter();
  const id = router.query.id;
  // dynamic import. TipContext expone cada tip individualmente por id
  const { [id]: tip = {} } = useContext(TipsContext);
  const { title, description, category, date } = tip;
  const { showCopyToast } = useContext(UIContext);
  const { user } = useAuth();
  const { favorites } = useContext(FavoritesContext);

  const share = () => {
    const { href } = new URL(location.href);
    if (navigator.share) {
      navigator.share({ url: href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showCopyToast(true);
    }
  };
  return (
    <>
      <Head>
        <meta property="og:title" content={tip.title} />
        <meta
          property="og:url"
          content={`https://ftips.vercel.app/tips/${id}`}
        />
        <meta property="og:image" content={'/billtrendup.svg'} />
      </Head>
      <Layout>
        <Box sx={{ width: '90%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper sx={{ padding: '1rem', marginTop: '1rem' }}>
                <Grid container spacing={0}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'left',
                    }}
                  >
                    <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
                    <Divider />
                    <Box sx={{ paddingY: '1rem' }}>
                      <Typography textAlign={'justify'}>
                        {description}
                      </Typography>
                    </Box>
                    <Divider />

                    {/* <Typography sx={{ fontSize: '0.8rem' }} color="text.secondary">
              categoría: {category}
            </Typography> */}
                    <Box display={'flex'} justifyContent={'space-between'}>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share" onClick={share}>
                          <ShareIcon />
                        </IconButton>
                      </CardActions>
                      <CardActions>
                        <Link href={`/${pages[category]}`}>
                          <Typography
                            sx={{ fontSize: '0.8rem' }}
                            color="text.secondary"
                          >
                            Ver mas tips de {category}
                          </Typography>
                        </Link>
                      </CardActions>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
}
