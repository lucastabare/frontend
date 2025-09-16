import { Grid } from '@mui/material';
import ProductSimilar from '../product/ProductSimilar';
import ProductRelated from '../product/ProductRelated';
import ProductSponsored from '../product/ProductSponsored';
import type { Product } from '../../interfaces/types';



export default function PDPSliders({
  similar,
  related,
}: {
  similar: Product[];
  related: Product[];
}) {
  return (
    <Grid container spacing={2} sx={{ p: 2, pt: 0 }}>
      <Grid size={{ xs: 12 }}>
        <ProductSimilar items={similar ?? []} />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <ProductRelated items={related ?? []} />
      </Grid>
    </Grid>
  );
}
