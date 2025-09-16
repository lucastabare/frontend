import { useState } from 'react';
import { Box, Typography, Collapse, Button, Stack } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import type { Product } from '../../interfaces/types';

export default function ProductDescription({
  product,
  onOpenSpecs
}: { product: Product; onOpenSpecs?: () => void }) {
  const [open, setOpen] = useState(false);

  const shortTxt = product.description_short || product.description?.slice(0, 120) || '';
  const longTxt  = product.description_long  || product.description || '';

  return (
    <Box sx={{ mt: 2 }}>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: .5 }}>
        <InfoOutlinedIcon fontSize="small" />
        <Typography variant="subtitle1">Descripción</Typography>
      </Stack>

      <Typography variant="body2" color="text.secondary">{shortTxt}</Typography>

      <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
        <Button size="small" variant="text" onClick={() => setOpen(v => !v)} sx={{color: '#3483fa', textTransform: 'capitalize'}}>
          {open ? 'Ver menos' : 'Ver más'}
        </Button>
        <Button
          size="small"
          variant="text"
          startIcon={<ListAltOutlinedIcon />}
          onClick={onOpenSpecs}
          sx={{color: '#3483fa', textTransform: 'capitalize'}}
        >
          Ver características
        </Button>
      </Stack>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Typography variant="body2" sx={{ mt: 1, whiteSpace: 'pre-wrap' }}>
          {longTxt}
        </Typography>
      </Collapse>
    </Box>
  );
}
