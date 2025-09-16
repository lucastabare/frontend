import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, CircularProgress, Alert, Typography } from '@mui/material';
import api from '../service/api';
import type { Product, Seller, PaymentMethod } from '../interfaces/types';
import ProductGallery from '../components/product/ProductGallery';
import ProductTitle from '../components/product/ProductTitle';
import ProductPrice from '../components/product/ProductPrice';
import ProductPayments from '../components/product/ProductPayments';
import ProductSeller from '../components/product/ProductSeller';
import ProductAttributes from '../components/product/ProductAttributes';
import ProductRatings from '../components/product/ProductRatings';
import ProductRelated from '../components/product/ProductRelated';
import ProductSimilar from '../components/product/ProductSimilar';
import ProductBreadcrumb from '../components/product/ProductBreadcrumb';
import ProductDescription from '../components/product/ProductDescription';
import ProductSpecs from '../components/product/ProductSpecs';
import ProductActions from '../components/product/ProductActions';
import ProductReviews from '../components/product/ProductReviews';
import ProductSponsored from '../components/product/ProductSponsored';

import { ProductBreadcrumbSkeleton } from '../components/product/skeleton/ProductBreadcrumbSkeleton';
import { ProductGallerySkeleton } from '../components/product/skeleton/ProductGallerySkeleton';
import { ProductPriceSkeleton } from '../components/product/skeleton/ProductPriceSkeleton';
import { ProductTitleSkeleton } from '../components/product/skeleton/ProductTitleSkeleton';
import { ProductPaymentsSkeleton } from '../components/product/skeleton/ProductPaymentsSkeleton';
import { PorductSellerSkeleton } from '../components/product/skeleton/ProductSellerSkeleton';
import { ProductAttributesSkeleton } from '../components/product/skeleton/ProductAttributesSkeleton';
import { ProductRatingsSkeleton } from '../components/product/skeleton/ProductRatingsSkeleton';
import { ProductListCardsSkeleton } from '../components/product/skeleton/ProductListCardsSkeleton';
import { ProductSpecsSkeleton } from '../components/product/skeleton/ProductSpecsSkeleton';


type PdpState = {
  loading: boolean;
  error?: string;
  product?: Product;
  description?: { id: string; description: string } | null;
  seller?: Seller | null;
  payments?: PaymentMethod[] | null;
  similar: Product[];
  related: Product[];
};

export default function ProductDetailPage() {
  const { id = 'MLA123' } = useParams<{ id: string }>();

  const [state, setState] = useState<PdpState>({
    loading: true,
    similar: [],
    related: [],
  });

  const specsRef = useRef<HTMLDivElement>(null);
  const scrollToSpecs = () => {
    specsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (!id) return;

    let alive = true;

    (async () => {
      try {
        setState(s => ({ ...s, loading: true, error: undefined }));

        const product = await api.workflow.getProduct(id);

        const [desc, sellerRef, payments, similar, related] = await Promise.all([
          api.workflow.getProductDescription(id).catch(() => null),
          api.workflow.getProductSellerRef(id).catch(() => null),
          api.workflow.getPaymentMethods().catch(() => null),
          api.workflow.getSimilar(id, 6).catch(() => []),
          api.workflow.getRelated(id, 6).catch(() => []),
        ]);

        const seller = sellerRef?.seller_id
          ? await api.workflow.getSeller(sellerRef.seller_id).catch(() => null)
          : null;

        if (!alive) return;

        setState({ loading: false, product, description: desc, seller, payments, similar, related });

      } catch (e: any) {

        if (!alive) return;

        setState(s => ({ ...s, loading: false, error: e?.message || 'Error al cargar el producto' }));
      }
    })();
    return () => { alive = false; };
  }, [id]);

  if (state.loading) return <CircularProgress style={{ margin: 16 }} />;
  if (state.error || !state.product) return <Alert severity="error">No se pudo cargar el producto.</Alert>;

  const { loading, error, product: p } = state;
  const ready = !loading && !!p;

  return (
    <>
      {ready ? (
        <ProductBreadcrumb category={p!.category} brand={p!.brand} title={p!.title} />
      ) : (
        <ProductBreadcrumbSkeleton />
      )}

      {error && (
        <Alert severity="error" sx={{ mx: 2, mb: 1 }}>
          No se pudo cargar el producto.
        </Alert>
      )}

      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Card variant="outlined">
            <CardContent>
              {ready ? (
                <ProductGallery pictures={p!.pictures ?? []} />
              ) : (
                <ProductGallerySkeleton />
              )}

              <Typography variant="h6" sx={{ mt: 2 }}>
                {ready ? p!.title : <ProductTitleSkeleton />}
              </Typography>

              {ready ? (
                <ProductAttributes attributes={p!.attributes ?? []} />
              ) : (
                <ProductAttributesSkeleton />
              )}

              {ready ? (
                <ProductRatings ratingAvg={p!.rating_avg ?? 0} ratings={p!.ratings ?? []} />
              ) : (
                <ProductRatingsSkeleton />
              )}

              {ready ? (
                <>
                  <ProductDescription product={p!} onOpenSpecs={scrollToSpecs} />
                  <ProductSpecs ref={specsRef} product={p!} />
                  <ProductReviews product={p!} />
                </>
              ) : (
                <ProductSpecsSkeleton ref={specsRef} />
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Card variant="outlined">
            <CardContent>
              {ready ? (
                <ProductTitle
                  title={p!.title}
                  condition={p!.condition}
                  sold={p!.stock?.sold ?? 0}
                />
              ) : (
                <ProductTitleSkeleton />
              )}

              {ready ? (
                <ProductPrice
                  price={p!.price}
                  currency={p!.currency}
                  freeShipping={p!.shipping?.free_shipping ?? false}
                />
              ) : (
                <ProductPriceSkeleton />
              )}

              {ready ? (
                state.payments && <ProductPayments methods={state.payments} />
              ) : (
                <ProductPaymentsSkeleton />
              )}

              {ready ? (
                state.seller && <ProductSeller seller={state.seller} />
              ) : (
                <PorductSellerSkeleton />
              )}

              {ready ? <ProductActions product={p!} /> : null}
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12 }}>
          {ready ? (
            <ProductRelated items={state.related ?? []} />
          ) : (
            <ProductListCardsSkeleton count={4} />
          )}
        </Grid>

        <Grid size={{ xs: 12 }}>
          {ready ? (
            <>
              <ProductSimilar items={state.similar ?? []} />
              <ProductSponsored items={state.similar} />
            </>
          ) : (
            <ProductListCardsSkeleton count={6} />
          )}
        </Grid>
      </Grid>
    </>
  );
}
