import { useState } from 'react';
import { Stack, Button, Snackbar, Alert } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import type { Product } from '../../interfaces/types';

export default function ProductActions({ product }: { product: Product }) {
  const [toast, setToast] = useState<string | null>(null);

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          startIcon={<FlashOnIcon />}
          onClick={() => setToast('Redirigiendo a compra inmediata…')}
        >
          Comprar ahora
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<ShoppingCartIcon />}
          onClick={() => setToast(`"${product.title}" agregado al carrito`)}
        >
          Agregar al carrito
        </Button>
      </Stack>

      <Snackbar
        open={!!toast}
        autoHideDuration={2500}
        onClose={() => setToast(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setToast(null)} severity="success" variant="filled">
          {toast}
        </Alert>
      </Snackbar>
    </>
  );
}
