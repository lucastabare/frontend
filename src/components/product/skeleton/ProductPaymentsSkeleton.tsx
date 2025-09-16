import { Stack, Skeleton } from '@mui/material';

export function ProductPaymentsSkeleton() {
  return (
    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
      {[...Array(3)].map((_, i) => (
        <Skeleton key={i} variant="rounded" width={90} height={28} />
      ))}
    </Stack>
  );
}
