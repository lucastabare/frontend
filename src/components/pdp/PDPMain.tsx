import { Grid, Box, Divider } from '@mui/material';
import WhiteBox from '../ui/WhiteBox';
import ProductGallery from '../product/ProductGallery';
import ProductQuickInfo from '../product/ProductQuickInfo';
import PDPRightRail from './PDPRightRail';
import ProductSpecs from '../product/ProductSpecs';
import ProductImagesBelow from '../product/ProductImagesBelow';
import ProductDescription from '../product/ProductDescription';
import ProductReviews from '../product/ProductReviews';
import type { Product, Seller, PaymentMethod } from '../../interfaces/types';

type Props = {
    product: Product;
    payments?: PaymentMethod[] | null;
    seller?: Seller | null;
    rightRailItems: Product[];
    onOpenSpecs: () => void;
};

export default function PDPMain({
    product,
    payments,
    seller,
    rightRailItems,
    onOpenSpecs,
}: Props) {
    const mainHeight = 560;

    return (
        <Grid container>
            <Grid size={{ xs: 12, md: 8 }}>
                <Box
                    sx={{
                        display: { xs: 'block', md: 'grid' },
                        gridTemplateColumns: { md: '2fr 1fr' }
                    }}
                >
                    <WhiteBox sx={{ height: { md: mainHeight } }}>
                        <ProductGallery pictures={product.pictures ?? []} />
                    </WhiteBox>

                    <WhiteBox sx={{ height: { md: mainHeight }, display: 'flex' }}>
                        <ProductQuickInfo product={product} onOpenSpecs={onOpenSpecs} />
                    </WhiteBox>
                </Box>

                <Box>
                    <WhiteBox>
                        <Divider />
                        <ProductSpecs product={product} />
                        <Divider />
                        <ProductImagesBelow pictures={product.pictures ?? []} />
                        <Divider />
                        <ProductDescription product={product} onOpenSpecs={onOpenSpecs} />
                        <Divider />
                        <ProductReviews product={product} />
                    </WhiteBox>
                </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
                <PDPRightRail
                    product={product}
                    payments={payments}
                    seller={seller}
                    rightRailItems={rightRailItems}
                />
            </Grid>
        </Grid>
    );
}
