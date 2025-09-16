import { Box, Stack, Typography, Chip } from '@mui/material';
import type { Seller } from '../../interfaces/types';

function repColor(rep: string) {
  switch (rep) {
    case 'green': return 'success';
    case 'yellow': return 'warning';
    case 'red': return 'error';
    default: return 'default';
  }
}

export default function ProductSeller({ seller }:{ seller: Seller }) {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle2" gutterBottom>Vendedor</Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="body2">{seller.nickname}</Typography>
        <Chip size="small" color={repColor(seller.reputation) as any} label={seller.reputation} />
      </Stack>
      <Typography variant="caption" color="text.secondary">
        {seller.city} · {seller.sales} ventas · {seller.rating_average} ★
      </Typography>
    </Box>
  );
}
