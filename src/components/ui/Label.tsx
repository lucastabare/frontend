// src/components/ui/Label.tsx
import * as React from 'react';
import {
  Chip,
  Stack,
  Typography,
  type SxProps,
  type Theme,
} from '@mui/material';

type LabelProps = {
  text: string;
  icon?: React.ReactElement;
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  size?: 'small' | 'medium';
  variant?: 'filled' | 'outlined';
  onClick?: () => void;
  sx?: SxProps<Theme>;
};

export default function Label({
  text,
  icon,
  color = 'default',
  size = 'small',
  variant = 'outlined',
  onClick,
  sx,
}: LabelProps) {
  return (
    <Chip
      label={text}
      icon={icon}
      color={color}
      size={size}
      variant={variant}
      onClick={onClick}
      sx={sx}
    />
  );
}

type LabelValueProps = {
  label: string;
  value?: React.ReactNode;
  children?: React.ReactNode; // alternativa a value
  wrap?: boolean; // si querés permitir multi-línea en el valor
  sx?: SxProps<Theme>;
};

/**
 * Fila "Label: Valor" para detalles/atributos.
 * Ej: <LabelValue label="Marca" value="Samsung" />
 */
export function LabelValue({
  label,
  value,
  children,
  wrap = false,
  sx,
}: LabelValueProps) {
  return (
    <Stack
      direction="row"
      alignItems="baseline"
      gap={1}
      sx={sx}
      flexWrap={wrap ? 'wrap' : 'nowrap'}
    >
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ textTransform: 'uppercase', letterSpacing: 0.4 }}
      >
        {label}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          whiteSpace: wrap ? 'normal' : 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
      >
        {value ?? children}
      </Typography>
    </Stack>
  );
}
