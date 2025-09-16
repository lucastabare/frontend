import { Stack } from '@mui/material';
import UIButton from '../ui/UIButton';
import type { Product } from '../../interfaces/types';

export default function ProductActions({ product }: { product: Product }) {
  const buyNow = () => alert(`Comprar ahora: ${product.title}`);
  const addToCart = () => alert(`Agregado al carrito: ${product.title}`);

  return (
    <Stack spacing={1.5} sx={{ mt: 1 }}>
      <UIButton title="Comprar ahora" color="blue" fullWidth onClick={buyNow} />
      <UIButton title="Agregar al carrito" color="yellow" fullWidth onClick={addToCart} />
    </Stack>
  );
}
