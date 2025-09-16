import { useMemo, useState } from 'react';
import { Box, Stack, Typography, Divider, Button, Select, MenuItem } from '@mui/material';
import WhiteBox from '../ui/WhiteBox';
import ProductPayments from '../product/ProductPayments';
import ProductActions from '../product/ProductActions';
import SellerReputation from '../product/SellerReputation';
import BuyOptions from '../product/BuyOptions';
import RightRailRecommendations from '../product/RightRailRecommendations';
import ALink from '../ui/ALink';
import type { Product, Seller, PaymentMethod } from '../../interfaces/types';

type Props = {
    product: Product;
    payments?: PaymentMethod[] | null;
    seller?: Seller | null;
    rightRailItems: Product[];
};

export default function PDPRightRail({ product, payments, seller, rightRailItems }: Props) {
    const available = product.stock?.available ?? 1;
    const maxQty = useMemo(() => Math.min(10, available), [available]);
    const [qty, setQty] = useState(1);
    const rest = Math.max(available - qty, 0);
    const restLabel = rest > 50 ? '(+50 disponibles)' : rest > 0 ? `(+${rest} disponibles)` : '';

    return (
        <Box sx={{ position: { md: 'sticky' }, top: { md: 16 }, bgcolor: '#fff' }}>
            <Stack
                sx={{
                    maxHeight: { md: 'calc(100vh - 32px)' },
                    overflowY: { md: 'auto' },
                    '&::-webkit-scrollbar': { width: 8 },
                    '&::-webkit-scrollbar-thumb': { background: '#ddd', borderRadius: 8 },
                }}
            >
                <WhiteBox sx={{ border: '1px solid rgba(0, 0, 0, .1)', padding: '25px 16px', borderRadius: '8px', margin: '8px' }}>
                    <Typography variant="body2" sx={{ color: '##00a650', fontWeight: 700 }}>
                        Envío gratis a todo el país
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                        Conocé los tiempos y las formas de envío. 
                    </Typography>
                    <ALink title="Calcular cuándo llega" to="#" fontSize={12} />

                    {available ? <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: 700 }}>
                        Stock disponible</Typography> : null}

                    <Stack direction="row" alignItems="center" spacing={1.25} sx={{ my: 1 }}>
                        <Typography variant="body2">Cantidad:</Typography>
                        <Select
                            size="small"
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                            sx={{ minWidth: 88, height: 32, border: 'none' }}
                        >
                            {Array.from({ length: maxQty }, (_, i) => i + 1).map(n => (
                                <MenuItem key={n} value={n}>{n} {n === 1 ? 'unidad' : 'unidades'}</MenuItem>
                            ))}
                        </Select>
                        <Typography variant="caption" color="text.secondary">{restLabel}</Typography>
                    </Stack>

                    <Stack spacing={1.25} sx={{ mt: 1.25 }}>
                        <ProductActions product={product} />
                    </Stack>

                    <Divider sx={{ my: 1.5 }} />

                    <Typography variant="body2" color="text.secondary">
                        Devolución gratis. Tenés 30 días desde que lo recibís.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Compra Protegida, recibí el producto que esperabas o te devolvemos tu dinero.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">1 año de garantía de fábrica.</Typography>
                </WhiteBox>

                <WhiteBox sx={{ border: '1px solid rgba(0, 0, 0, .1)', padding: '25px 16px', borderRadius: '8px', margin: '8px' }}>
                    {seller ? 
                    <SellerReputation seller={seller} /> : 
                    <Typography variant="body2">Vendedor no disponible</Typography>}
                </WhiteBox>

               <WhiteBox sx={{ border: '1px solid rgba(0, 0, 0, .1)', padding: '25px 16px', borderRadius: '8px', margin: '8px' }}>
                    <BuyOptions product={product} />
                </WhiteBox>

                <WhiteBox sx={{ border: '1px solid rgba(0, 0, 0, .1)', padding: '25px 16px', borderRadius: '8px', margin: '8px' }}>
                    {payments && <ProductPayments methods={payments} />}
                </WhiteBox>

               <WhiteBox sx={{ border: '1px solid rgba(0, 0, 0, .1)', padding: '25px 16px', borderRadius: '8px', margin: '8px' }}>
                    <RightRailRecommendations title="Productos relacionados" items={rightRailItems} />
                </WhiteBox>
            </Stack>
        </Box>
    );
}
