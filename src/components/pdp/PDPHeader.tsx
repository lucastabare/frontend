import { Grid } from '@mui/material';
import ProductBreadcrumb from '../product/ProductBreadcrumb';
import ProductTopActions from '../product/ProductTopActions';
import type { Product } from '../../interfaces/types';

export default function PDPHeader({ product }: { product: Product }) {
  return (
    <Grid container spacing={2} sx={{ p: 2, pt: 1, pb: 1 }}>
      <Grid size={{ xs: 12, md: 9 }}>
        <ProductBreadcrumb category={product.category} brand={product.brand} title={product.title} />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ProductTopActions product={product} fontSize={14} />
      </Grid>
    </Grid>
  );
}
