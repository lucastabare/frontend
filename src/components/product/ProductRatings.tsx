import { Stack, Typography, Rating } from '@mui/material';
import type { Rating as RatingType } from '../../interfaces/types';

export default function ProductRatings({
  ratingAvg, ratings,
}:{ ratingAvg:number; ratings: RatingType[] }) {
  return (
    <Stack spacing={0.5} sx={{ mt: 2 }}>
      <Typography variant="subtitle2">Opiniones del producto</Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Rating value={ratingAvg ?? 0} precision={0.1} readOnly />
        <Typography variant="body2">{ratingAvg?.toFixed(1) ?? '0.0'}</Typography>
        <Typography variant="caption" color="text.secondary">({ratings?.length ?? 0} opiniones)</Typography>
      </Stack>
    </Stack>
  );
}
