import { Stack, Skeleton } from '@mui/material';

export function ProductAttributesSkeleton() {
  return (
    <Stack spacing={0.75} sx={{ mt: 2 }}>
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} variant="text" width={`${80 - i * 8}%`} />
      ))}
    </Stack>
  );
}