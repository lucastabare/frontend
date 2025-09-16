import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import type { Product } from '../../interfaces/types';
import Price from '../ui/Price';
import { Grid } from '@mui/material';

export default function ProductRelated({ items }:{ items: Product[] }) {
  if (!items?.length) return null;
  return (
    <>
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Productos relacionados</Typography>
      <Grid container spacing={2}>
        {items.map(p => (
          <Grid key={p.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card variant="outlined">
              <CardActionArea component={Link} to={`/product/${p.id}`}>
                <img
                  src={p.thumbnail || p.pictures?.[0]?.url}
                  alt={p.title}
                  style={{ width:'100%', aspectRatio:'1/1', objectFit:'cover' }}
                />
                <CardContent>
                  <Typography variant="body2" noWrap>{p.title}</Typography>
                  <Price price={p.price} currency={p.currency} freeShipping={p.shipping?.free_shipping ?? false} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
