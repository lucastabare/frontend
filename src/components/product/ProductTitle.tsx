import { Typography, Stack } from '@mui/material';

export default function ProductTitle({ title, condition, sold }:{
  title: string; condition: string; sold: number;
}) {
  return (
    <Stack spacing={0.5}>
      <Typography variant="body2" color="text.secondary">
        Estado: {condition} · Vendidos: {sold}
      </Typography>
      <Typography variant="h5">{title}</Typography>
    </Stack>
  );
}
