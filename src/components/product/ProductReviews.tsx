import { useMemo, useState } from 'react';
import {
  Box, Typography, Rating, Stack, LinearProgress, Divider, Button, Avatar, Paper
} from '@mui/material';
import type { Product } from '../../interfaces/types';

export default function ProductReviews({ product }: { product: Product }) {
  const [limit, setLimit] = useState(3);
  const ratings = product.ratings || [];

  const avg = product.rating_avg || (ratings.length
    ? ratings.reduce((s, r) => s + (r.stars || 0), 0) / ratings.length
    : 0);

  const dist = useMemo(() => {
    const d = [0,0,0,0,0];
    ratings.forEach(r => d[(r.stars || 0) - 1] = d[(r.stars || 0) - 1] + 1);
    return d; // index 0 -> 1 estrella, …, index 4 -> 5
  }, [ratings]);

  if (!ratings.length) return null;

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>Opiniones sobre el producto</Typography>

      <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 2 }}>
        <Stack alignItems="center" minWidth={120}>
          <Typography variant="h3" lineHeight={1}>{avg.toFixed(1)}</Typography>
          <Rating value={avg} precision={0.1} readOnly />
          <Typography variant="caption" color="text.secondary">{ratings.length} calificaciones</Typography>
        </Stack>

        <Stack spacing={.5} sx={{ flex: 1 }}>
          {[5,4,3,2,1].map(stars => {
            const total = ratings.length || 1;
            const count = dist[stars-1] || 0;
            const p = Math.round((count/total)*100);
            return (
              <Stack key={stars} direction="row" spacing={1} alignItems="center">
                <Typography width={24} variant="caption">{stars}</Typography>
                <LinearProgress variant="determinate" value={p} sx={{ flex: 1, height: 6, borderRadius: 4 }} />
                <Typography width={32} variant="caption" textAlign="right">{p}%</Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Stack spacing={1.5}>
        {ratings.slice(0, limit).map((r, i) => (
          <Paper key={i} variant="outlined" sx={{ p: 1.5 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar sx={{ width: 28, height: 28 }}>{(r.user || '?')[0]}</Avatar>
              <Typography variant="body2" fontWeight={600}>{r.user}</Typography>
              <Rating size="small" value={r.stars} readOnly />
              {r.date && <Typography variant="caption" color="text.secondary">· {r.date}</Typography>}
            </Stack>
            {r.comment && <Typography variant="body2" sx={{ mt: .5 }}>{r.comment}</Typography>}
          </Paper>
        ))}
      </Stack>

      {ratings.length > limit && (
        <Button sx={{ mt: 1 }} onClick={() => setLimit(l => l + 5)}>Ver más opiniones</Button>
      )}
    </Box>
  );
}
