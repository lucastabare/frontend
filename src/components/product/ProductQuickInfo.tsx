import { Box, Typography, Stack, Divider } from '@mui/material';
import type { Product } from '../../interfaces/types';
import RatingInline from '../ui/RatingInline';
import ProductPrice from '../product/ProductPrice';
import ALink from '../ui/ALink';

type Props = { product: Product; onOpenSpecs?: () => void };

export default function ProductQuickInfo({ product, onOpenSpecs }: Props) {
    const sold = product.stock?.sold ?? 0;
    const colorFromSpecs =
        product.specs?.groups?.['Características generales']?.Color ||
        product.specs?.groups?.['Generales']?.Color ||
        '';

    return (
        <Box>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
                    {product.condition}
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Typography variant="body2" color="text.secondary">
                    + {sold} vendidos
                </Typography>
            </Stack>

            <Typography variant="h5" sx={{ mt: 1, mb: 0.5 }}>
                {product.title}
            </Typography>

             <ProductPrice
                        price={product.price}
                        currency={product.currency}
                        freeShipping={product.shipping?.free_shipping ?? false}
                    />

            <RatingInline
                value={product.rating_avg ?? 0}
                count={product.ratings?.length ?? 0}
                size="small"
                color="#3483FA"
                rounded
            />

            {colorFromSpecs && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                    Color: <b>{colorFromSpecs}</b>
                </Typography>
            )}

            <Stack component="ul" sx={{ pl: 2, mb: 1 }} spacing={0.5}>
                {(product.attributes || []).slice(0, 3).map((a, i) => (
                    <li key={i}>
                        <Typography variant="body2">{a}</Typography>
                    </li>
                ))}
            </Stack>

            <ALink to="/" title="Ver características" onClick={onOpenSpecs} />

            <Box sx={{ mt: 1, mb: 0.5, lineHeight: 1 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>
                    Opciones de compra:
                </span>
            </Box>

            <ALink to="/" title="25 productos nuevos desde $ 739.990" onClick={onOpenSpecs} />

        </Box>
    );
}
