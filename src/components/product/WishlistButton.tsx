import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function WishlistButton() {
  const [touch, setTouch] = useState(false);
  return (
    <Tooltip title={touch ? 'Quitar de favoritos' : 'Agregar a favoritos'}>
      <IconButton onClick={() => setTouch(e => !e)} aria-label="wishlist" size="small">
        {touch ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
      </IconButton>
    </Tooltip>
  );
}
