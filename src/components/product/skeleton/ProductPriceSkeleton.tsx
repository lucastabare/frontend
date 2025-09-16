import { Stack, Skeleton } from '@mui/material';

export function ProductPriceSkeleton() {
  return (
    <Stack spacing={1} sx={{ my: 2 }}>
      <Skeleton variant="text" width="60%" height={38} />
      <Skeleton variant="rectangular" width={140} height={32} />
    </Stack>
  );
}