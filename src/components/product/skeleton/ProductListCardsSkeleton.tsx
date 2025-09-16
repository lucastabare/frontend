import { Grid, Card, CardContent, Skeleton } from '@mui/material';

export function ProductListCardsSkeleton({ count = 4 }: { count?: number }) {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: count }).map((_, i) => (
        <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
          <Card variant="outlined">
            <Skeleton variant="rectangular" width="100%" height={180} />
            <CardContent>
              <Skeleton variant="text" width="90%" />
              <Skeleton variant="text" width="60%" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}