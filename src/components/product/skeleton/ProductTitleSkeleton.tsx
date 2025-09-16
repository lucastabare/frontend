import { Stack, Skeleton } from '@mui/material';

export function ProductTitleSkeleton() {
  return (
    <Stack spacing={1} sx={{ mt: 1 }}>
      <Skeleton variant="text" width="80%" height={28} />
      <Skeleton variant="text" width="40%" />
    </Stack>
  );
}