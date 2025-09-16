import { Button } from '@mui/material';

type Props = {
  title: string;
  color?: 'blue' | 'yellow' | 'neutral';
  active?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
};

export default function UIButton({
  title,
  color = 'blue',
  active = false,
  fullWidth,
  onClick,
  href,
  target,
  rel,
  disabled,
}: Props) {
  const palette =
    color === 'blue'
      ? { bg: '#3483FA', hover: '#2a6fdb', text: '#fff' }
      : color === 'yellow'
      ? { bg: '#FFE600', hover: '#f5d000', text: '#333' }
      : { bg: '#e5e7eb', hover: '#ddd', text: '#111' }; 
  return (
    <Button
      component={href ? 'a' : 'button'}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      fullWidth={!!fullWidth}
      disableElevation
      disabled={disabled}
      sx={{
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 1.5,
        px: 2,
        py: 1.25,
        bgcolor: active ? palette.hover : palette.bg,
        color: palette.text,
        '&:hover': { bgcolor: palette.hover },
      }}
    >
      {title}
    </Button>
  );
}
