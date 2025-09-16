import { Box, Stack, Typography, Paper } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ALink from '../ui/ALink';
import type { PaymentMethod } from '../../interfaces/types';

const logos: Record<string, string> = {
  visa: 'https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg',
  master: 'https://http2.mlstatic.com/storage/logos-api-admin/9cf818e0-723a-11f0-a459-cf21d0937aeb-m.svg',
  amex: 'https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg',
  oca: 'https://http2.mlstatic.com/storage/logos-api-admin/7b3369e0-0b6c-11ee-9f9f-2b1a666f0a2f-m.svg',
  naranja: 'https://http2.mlstatic.com/storage/logos-api-admin/7a8d6a80-0b6c-11ee-8a9d-99a4b6fb5b5a-m.svg',
  cabal: 'https://http2.mlstatic.com/storage/logos-api-admin/3a2c9c90-0b6d-11ee-8d55-8f8c7ad94f0a-m.svg',
  visa_debit: 'https://http2.mlstatic.com/storage/logos-api-admin/941d3f40-0b6d-11ee-8d55-8f8c7ad94f0a-m.svg',
  master_debit: 'https://http2.mlstatic.com/storage/logos-api-admin/0b5e9f60-0b6e-11ee-9f9f-2b1a666f0a2f-m.svg',
  maestro: 'https://http2.mlstatic.com/storage/logos-api-admin/1a2ae710-0b6e-11ee-8d55-8f8c7ad94f0a-m.svg',
  rapipago: 'https://http2.mlstatic.com/storage/logos-api-admin/16caa2f0-f54b-11ef-bad6-e9962bcd76e5-m.svg',
  pagofacil: 'https://http2.mlstatic.com/storage/logos-api-admin/12f7d7f0-f54b-11ef-bad6-e9962bcd76e5-m.svg',
  abitab: 'https://http2.mlstatic.com/storage/logos-api-admin/0fd6a6b0-f54b-11ef-bad6-e9962bcd76e5-m.svg',
  mercadopago: 'https://http2.mlstatic.com/storage/logos-api-admin/f3e8e940-f549-11ef-bad6-e9962bcd76e5-m.svg',
};

const CREDIT_IDS = new Set(['visa','master','amex','oca','naranja','cabal']);
const DEBIT_IDS  = new Set(['visa_debit','master_debit','maestro']);
const CASH_IDS   = new Set(['rapipago','pagofacil','abitab']);

const getId = (pm: PaymentMethod) =>
  (pm.id || pm.name || '').toLowerCase().replace(/\s+/g, '_');

const onlyIds = (set: Set<string>, methods: PaymentMethod[]) =>
  methods.map(getId).filter(id => set.has(id) && logos[id]);

const LogoRow = ({ ids }: { ids: string[] }) => {
  if (!ids.length) return null;
  return (
    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" sx={{ mt: 1, mb: 2 }}>
      {ids.map(id => (
        <Box
          key={id}
          component="img"
          src={logos[id]}
          alt={id}
          sx={{ height: 20, width: 'auto', display: 'block' }}
        />
      ))}
    </Stack>
  );
};

export default function ProductPayments({ methods }: { methods: PaymentMethod[] }) {
  if (!methods?.length) return null;

  const maxInstallments = Math.max(
    0,
    ...methods.map(m => (Array.isArray(m.installments) ? Math.max(...m.installments) : 0))
  );

  const creditIds = onlyIds(CREDIT_IDS, methods);
  const debitIds  = onlyIds(DEBIT_IDS, methods);
  const cashIds   = onlyIds(CASH_IDS, methods);

  return (
    <Paper sx={{boxShadow: 'none'}}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>Medios de pago</Typography>

      {!!maxInstallments && (
        <Box
          sx={{
            bgcolor: '#00a650',
            color: '#fff',
            px: 1.5,
            py: 1,
            borderRadius: 1,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            mb: 2,
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          <CreditCardIcon fontSize="small" />
          ¡Paga en hasta {maxInstallments} cuotas sin interés!
        </Box>
      )}

      {!!creditIds.length && (
        <Box sx={{ mb: 1.5 }}>
          <Typography variant="subtitle2">Tarjetas de crédito</Typography>
          <Typography variant="caption" color="text.secondary">
            ¡Cuotas sin interés con bancos seleccionados!
          </Typography>
          <LogoRow ids={creditIds} />
        </Box>
      )}

      {!!debitIds.length && (
        <Box sx={{ mb: 1.5 }}>
          <Typography variant="subtitle2">Tarjetas de débito</Typography>
          <LogoRow ids={debitIds} />
        </Box>
      )}

      {!!cashIds.length && (
        <Box sx={{ mb: 0.5 }}>
          <Typography variant="subtitle2">Efectivo</Typography>
          <LogoRow ids={cashIds} />
        </Box>
      )}

      <ALink to="#" title="Conoce otros medios de pago" fontSize={12} />
    </Paper>
  );
}
