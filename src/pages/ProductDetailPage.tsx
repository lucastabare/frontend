import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from '@mui/material';
import api from '../service/api';
import type { Product, Seller, PaymentMethod } from '../interfaces/types';
import PDPHeader from '../components/pdp/PDPHeader';
import PDPMain from '../components/pdp/PDPMain';
import PDPSliders from '../components/pdp/PDPSliders';

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
  const { id: routeId } = useParams<{ id: string }>();
  const id = routeId || 'MLA123';

  const [state, setState] = useState<PdpState>({
    loading: true,
    similar: [],
    related: [],
  });

  const specsRef = useRef<HTMLDivElement>(null);
  const scrollToSpecs = () =>
    specsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

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

        setState({
          loading: false,
          product,
          description: desc,
          seller,
          payments,
          similar,
          related,
        });
      } catch (e: any) {
        if (!alive) return;
        setState(s => ({
          ...s,
          loading: false,
          error: e?.message || 'Error al cargar el producto',
        }));
      }
    })();

    return () => {
      alive = false;
    };
  }, [id]);

  const { error, product: p } = state;
  const ready = !!p;

  if (error) {
    return (
      <Alert severity="error" sx={{ mx: 2, my: 2 }}>
        No se pudo cargar el producto.
      </Alert>
    );
  }

  if (!ready) return null;

  const rightRailItems = state.similar?.length ? state.similar : state.related;

  return (
    <>
      <PDPHeader product={p} />

      <PDPMain
        product={p}
        payments={state.payments}
        seller={state.seller}
        rightRailItems={rightRailItems}
        onOpenSpecs={scrollToSpecs}
      />

      <PDPSliders similar={state.similar} related={state.related} />
    </>
  );
}
