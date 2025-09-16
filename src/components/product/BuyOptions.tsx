import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import type { Product } from '../../interfaces/types';

type Option = { seller: string; price: number; condition?: string; shipping?: string };

export default function BuyOptions({ product }: { product: Product }) {
    const options: Option[] = [
        {
            seller: 'Tienda X',
            price: product.price * 1.02,
            condition: 'Nuevo',
            shipping: 'Envío gratis'
        },
        {
            seller: 'Seller Y',
            price: product.price * 0.99,
            condition: 'Nuevo',
            shipping: 'Llega mañana'
        },
    ];

    return (
        <Box>
            <Typography variant="h6" gutterBottom>Otras opciones de compra</Typography>
            
            <List dense disablePadding>
                {options.map((o, i) => (
                    <ListItem
                        key={i}
                        secondaryAction={<Button size="small" variant="outlined">Comprar</Button>}
                        sx={{ px: 0 }}
                    >
                        <ListItemText
                            primary={`${o.seller} — ${product.currency} ${o.price.toFixed(2)}`}
                            secondary={[o.condition, o.shipping].filter(Boolean).join(' • ')}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
