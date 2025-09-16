import ALink from '../ui/ALink';
import type { Product } from '../../interfaces/types';
import { Divider } from '@mui/material';

type Props = { product: Product; fontSize?: number | string };

export default function ProductTopActions({ product, fontSize = 14 }: Props) {

    const share = async () => {
        const data = { title: product.title, url: window.location.href };
        try {
            if (navigator.share) {
                await navigator.share(data);
            } else {
                await navigator.clipboard?.writeText?.(data.url);
                alert('Link copiado al portapapeles');
            }
        } catch (e) {
            console.log("Error => ", e.message)
        }
    };

    const sellUrl = `/sell/new?like=${encodeURIComponent(product.id)}`;

    return (
        <div style={{ display: 'flex', gap: 16, justifyContent: 'flex-end' }}>
            <ALink title="Compartir" fontSize={fontSize} onClick={() => share()} />
            <Divider orientation="vertical" flexItem />
            <ALink title="Vender uno igual" fontSize={fontSize} onClick={() => console.log("click")} />

        </div>
    );
}
