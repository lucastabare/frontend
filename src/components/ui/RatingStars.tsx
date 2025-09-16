import { Rating, Box, Typography } from '@mui/material';

export default function RatingStars({ value, count }:{ value:number; count?:number }) {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Rating value={value} precision={0.1} readOnly />
      {typeof count === 'number' && <Typography variant="body2" color="text.secondary">({count})</Typography>}
    </Box>
  );
}
