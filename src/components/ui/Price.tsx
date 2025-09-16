import { Stack, Typography, Chip } from '@mui/material';

function formatPrice(value: number, currency: string) {
  try {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency }).format(value);
  } catch {
    return `${currency} ${value}`;
  }
}

export default function Price({
  price, currency, freeShipping,
}:{ price: number; currency: string; freeShipping: boolean }) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography variant="h4" fontWeight={500}>{formatPrice(price, currency)}</Typography>
      {freeShipping && <Chip size="small" color="success" label="Envío gratis" />}
    </Stack>
  );
}
