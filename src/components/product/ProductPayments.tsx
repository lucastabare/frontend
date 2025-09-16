import { Box, Stack, Typography, Chip, Avatar, Paper } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import type { PaymentMethod } from '../../interfaces/types';

const logo = (id: string) => {
  const map: Record<string, string> = {
    visa: 'https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg',
    master: 'https://http2.mlstatic.com/storage/logos-api-admin/9cf818e0-723a-11f0-a459-cf21d0937aeb-m.svg',
    amex: 'https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg',
    mercadopago: 'https://http2.mlstatic.com/storage/logos-api-admin/f3e8e940-f549-11ef-bad6-e9962bcd76e5-m.svg',
  };
  return map[id] || '';
};

export default function ProductPayments({ methods }: { methods: PaymentMethod[] }) {
  if (!methods?.length) return null;

  return (
    <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
        <CreditCardIcon fontSize="small" />
        <Typography variant="subtitle1">Medios de pago</Typography>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center" useFlexGap flexWrap="wrap">
        {methods.map(m => (
          <Stack key={m.id} direction="row" spacing={1} alignItems="center">
            <Avatar variant="rounded" src={logo(m.id)} alt={m.name} sx={{ width: 28, height: 18 }} />
            <Typography variant="body2">{m.name}</Typography>
            {!!m.installments?.length && (
              <Chip size="small" label={`${Math.max(...m.installments)} cuotas`} />
            )}
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
}
