import { Stack, Skeleton } from '@mui/material';

export function ProductBreadcrumbSkeleton() {
  return (
    <Stack direction="row" spacing={1} sx={{ px: 2, py: 1 }}>
      <Skeleton variant="text" width={80} />
      <Skeleton variant="text" width={8} />
      <Skeleton variant="text" width={120} />
      <Skeleton variant="text" width={8} />
      <Skeleton variant="text" width={220} />
    </Stack>
  );
}