import { useContext } from 'react';
import Link from 'next/link';
import {
  Paper,
  Grid,
  Typography,
  Divider,
  Box,
  CardActions,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import firebase from '../../firebase/client';
import { useAuth } from '../../context/auth';
import { UIContext } from '../../context/ui';
import { FavoritesContext } from '../../context/favorites';

const pages = {
  ahorro: 'ahorro',
  inversión: 'inversion',
  vivienda: 'vivienda',
  previsión: 'prevision',
};

const db = firebase.firestore();

export const Tip = ({ tip, isFavorite }) => {
  const { title, description, category, id, date } = tip;
  const { showCopyToast } = useContext(UIContext);
  const { user } = useAuth();
  const { favorites } = useContext(FavoritesContext);

  const share = () => {
    const { href } = new URL(location.href);
    if (navigator.share) {
      navigator.share({
        title: tip.title,
        text: tip.text,
        url: href,
      });
    } else {
      navigator.clipboard.writeText(
        `${tip.title}\n${tip.description}\n${href}`
      );
      showCopyToast(true);
    }
  };

  const changeFavoriteStatus = () => {
    const newFavorites = [...favorites];
    console.log(favorites);
    console.log(newFavorites);
    if (favorites.includes(tip.id)) {
      const idIndex = newFavorites.findIndex((e) => e === tip.id);
      newFavorites.splice(idIndex, 1);
    } else {
      newFavorites.push(tip.id);
    }
    db.collection('favoritesByUser')
      .doc(user.uid)
      .set({ favorites: newFavorites }, { merge: true });
  };
  return (
    <Grid item xs={12}>
      <Paper sx={{ padding: '0.5rem 1rem' }}>
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
            <Accordion style={{ boxShadow: 'none' }}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{description}</Typography>
              </AccordionDetails>
              <AccordionSummary></AccordionSummary>
            </Accordion>
            {/* <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
            <Divider />
            <Box sx={{ paddingY: '0.5rem' }}>
              <Typography>{description}</Typography>
            </Box> */}
            <Divider />

            <Box display={'flex'} justifyContent={'space-between'}>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={changeFavoriteStatus}
                >
                  {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
  );
};
