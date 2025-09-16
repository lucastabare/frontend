import { Stack, Skeleton } from '@mui/material';

export function PorductSellerSkeleton() {
  return (
    <Stack spacing={1} sx={{ mt: 2 }}>
      <Skeleton variant="text" width="50%" />
      <Skeleton variant="text" width="30%" />
      <Skeleton variant="text" width="40%" />
    </Stack>
  );
}