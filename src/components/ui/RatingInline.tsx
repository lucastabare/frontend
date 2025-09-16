import { Stack, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

type Props = {
  value: number;
  count?: number;
  size?: 'small' | 'medium';
  color?: string;         
  rounded?: boolean;      
};

const srOnly = {
  position: 'absolute' as const,
  width: 1, height: 1, padding: 0, overflow: 'hidden',
  clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' as const, border: 0, margin: -1,
};

export default function RatingInline({
  value,
  count = 0,
  size = 'small',
  color = '#3483FA',
  rounded = true,
}: Props) {
  const display = (Number.isFinite(value) ? value : 0).toFixed(1);
  const stars = rounded ? Math.round(value) : Math.max(0, Math.min(5, Math.floor(value)));
  const starPx = size === 'small' ? 18 : 22;

  return (
    <Stack direction="row" spacing={0.75} alignItems="center">
      <Typography variant="body2">{display}</Typography>

      <Stack direction="row" spacing={0.2} alignItems="center">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            sx={{ fontSize: starPx, color: i < stars ? color : '#E0E0E0' }}
          />
        ))}
      </Stack>

      <Typography variant="body2" color="text.secondary">
        ({count})
      </Typography>

      <Box sx={srOnly} aria-live="polite">
        {`Calificación ${display} de 5. ${count} opiniones.`}
      </Box>
    </Stack>
  );
}