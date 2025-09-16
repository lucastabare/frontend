import { Dialog, DialogContent, Box, IconButton, Grid } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import type { Picture } from '../../../interfaces/types';

type Props = {
  open: boolean;
  pics: Picture[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onPick: (idx: number) => void;
  hover: boolean;
  origin: string;
  onEnter: () => void;
  onLeave: () => void;
  onMove: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export default function ViewerDialog({
  open,
  pics,
  index,
  onClose,
  onPrev,
  onNext,
  onPick,
  hover,
  origin,
  onEnter,
  onLeave,
  onMove,
}: Props) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogContent dividers sx={{ p: { xs: 1.5, md: 2 }, position: 'relative' }}>
        <Box
          sx={{
            position: 'relative',
            bgcolor: '#000',
            borderRadius: 1,
            overflow: 'hidden',
            height: { xs: '60vh', md: '70vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          onMouseMove={onMove}
        >
          <img
            src={pics[index].url}
            alt={`viewer-${index + 1}`}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              display: 'block',
              transform: hover ? 'scale(1.2)' : 'scale(1)',
              transformOrigin: origin,
              transition: 'transform 120ms ease-out',
            }}
          />
          <IconButton
            onClick={onPrev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 8,
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.9)',
              '&:hover': { bgcolor: 'rgba(255,255,255,1)' },
            }}
            aria-label="Anterior"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={onNext}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 8,
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.9)',
              '&:hover': { bgcolor: 'rgba(255,255,255,1)' },
            }}
            aria-label="Siguiente"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {pics.length > 1 && (
          <Grid container spacing={1} sx={{ mt: 1 }}>
            {pics.map((p, idx) => (
              <Grid key={p.id ?? idx} size={{xs:3, sm:2, md:1}}>
                <Box
                  onClick={() => onPick(idx)}
                  sx={{
                    borderRadius: 1,
                    border: idx === index ? '2px solid #3483FA' : '1px solid #e0e0e0',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                >
                  <img src={p.url} alt={`thumb-modal-${idx + 1}`} style={{ width: '100%', height: 68, objectFit: 'cover', display: 'block' }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  );
}
