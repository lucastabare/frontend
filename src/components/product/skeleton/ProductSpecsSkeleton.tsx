import { forwardRef } from 'react';
import { Box, Skeleton } from '@mui/material';

export const ProductSpecsSkeleton = forwardRef<HTMLDivElement>((_, ref) => (
  <Box ref={ref} sx={{ mt: 3 }}>
    <Skeleton variant="text" width="40%" height={28} />
    {[...Array(3)].map((_, i) => (
      <Skeleton key={i} variant="rectangular" width="100%" height={52} sx={{ my: 1 }} />
    ))}
  </Box>
));

ProductSpecsSkeleton.displayName = 'SpecsSkeleton';