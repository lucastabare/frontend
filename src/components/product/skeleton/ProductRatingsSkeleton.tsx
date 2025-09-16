import { Stack, Skeleton } from '@mui/material';

export function ProductRatingsSkeleton() {
  return (
    <Stack spacing={1} sx={{ mt: 2 }}>
      <Skeleton variant="text" width="30%" />
      {[...Array(3)].map((_, i) => (
        <Skeleton key={i} variant="text" width={`${90 - i * 10}%`} />
      ))}
    </Stack>
  );
}