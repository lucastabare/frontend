import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MAIN_H } from './constants';

type Props = {
  src: string;
  hover: boolean;
  origin: string;
  onEnter: () => void;
  onLeave: () => void;
  onMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onPrev: (e: React.MouseEvent) => void;
  onNext: (e: React.MouseEvent) => void;
  onOpen: () => void;
};

export default function MainImage({ src, hover, origin, onEnter, onLeave, onMove, onPrev, onNext, onOpen }: Props) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        bgcolor: '#fafafa',
        borderRadius: 1,
        overflow: 'hidden',
        minHeight: MAIN_H,
        cursor: 'zoom-in',
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      onClick={onOpen}
    >
      <img
        src={src}
        alt="main"
        style={{
          width: '100%',
          height: MAIN_H,
          objectFit: 'contain',
          display: 'block',
          transform: hover ? 'scale(1.6)' : 'scale(1)',
          transformOrigin: origin,
          transition: 'transform 120ms ease-out',
          willChange: 'transform',
        }}
      />
      <IconButton
        onClick={onPrev}
        size="small"
        sx={{
          position: 'absolute',
          top: '50%',
          left: 8,
          transform: 'translateY(-50%)',
          bgcolor: 'white',
          '&:hover': { bgcolor: 'white' },
        }}
        aria-label="Anterior"
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>
      <IconButton
        onClick={onNext}
        size="small"
        sx={{
          position: 'absolute',
          top: '50%',
          right: 8,
          transform: 'translateY(-50%)',
          bgcolor: 'white',
          '&:hover': { bgcolor: 'white' },
        }}
        aria-label="Siguiente"
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
