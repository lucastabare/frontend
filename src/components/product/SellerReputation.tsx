import { Box, Chip, Divider, LinearProgress, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import type { Seller } from '../../interfaces/types';

function repColor(rep?: string) {
  switch (rep) {
    case 'green': return 'success';
    case 'yellow': return 'warning';
    case 'orange': return 'warning';
    case 'red': return 'error';
    default: return 'default';
  }
}

function repPercent(rep?: string) {
  switch (rep) {
    case 'green': return 95;
    case 'yellow': return 60;
    case 'orange': return 40;
    case 'red': return 20;
    default: return 50;
  }
}

export default function SellerReputation({ seller }: { seller: Seller }) {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>Vendido por</Typography>
      <Typography variant="body1" fontWeight={600}>{seller.nickname}</Typography>
      <Stack direction="row" spacing={1} alignItems="center" mt={1}>
        <Chip size="small" color={repColor(seller.reputation)} label={`Reputación ${seller.reputation || '-'}`} />
        <Stack direction="row" spacing={0.5} alignItems="center">
          <StarIcon fontSize="small" color="warning" />
          <Typography variant="body2">{seller.rating_average?.toFixed(1) ?? '-'}</Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">• {seller.sales} ventas</Typography>
      </Stack>
      <Box mt={1}>
        <LinearProgress variant="determinate" value={repPercent(seller.reputation)} />
      </Box>
      <Divider sx={{ my: 1.5 }} />
      <Typography variant="body2" color="text.secondary">
        Compra protegida, tenés devolución si no es lo que esperabas.
      </Typography>
    </Box>
  );
}
