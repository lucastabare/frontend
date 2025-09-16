import { Box, Typography, Card, CardContent } from '@mui/material';
import type { Product } from '../../interfaces/types';
import Price from '../ui/Price';

export default function ProductSponsored({ items }: { items: Product[] }) {
  if (!items?.length) return null;
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>Publicidad</Typography>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 1 }}>
        {items.map(p => (
          <Card key={p.id} variant="outlined" sx={{ minWidth: 220, flex: '0 0 auto' }}>
            <img src={p.thumbnail || p.pictures?.[0]?.url} alt={p.title}
                 style={{ width:'100%', aspectRatio:'1/1', objectFit:'cover' }} />
            <CardContent>
              <Typography variant="body2" noWrap>{p.title}</Typography>
              <Price price={p.price} currency={p.currency} freeShipping={p.shipping?.free_shipping ?? false} />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
