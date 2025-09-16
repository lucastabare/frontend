import { useState } from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import type { Picture } from '../../interfaces/types';

export default function ProductImagesBelow({ pictures = [] as Picture[] }) {
    const [showAll, setShowAll] = useState(false);

    const imgs = pictures?.length ? pictures : [{ id: 'ph', url: 'https://dummyimage.com/800x800/eeeeee/333333&text=A55' }];

    const visible = showAll ? imgs : imgs.slice(0, 2);

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h5" gutterBottom>Imágenes del producto</Typography>
            <Grid container spacing={2}>
                {visible.map((p, idx) => (
                    <Grid key={p.id ?? idx} size={{ xs: 12, md: 12 }}>
                        <Box
                            sx={{
                                bgcolor: '#fafafa',
                                borderRadius: 1,
                                overflow: 'hidden',
                                height: { xs: 280, md: 360 },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                src={p.url}
                                alt={`extra-${idx + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {!showAll && imgs.length > 2 && (
                <Button onClick={() => setShowAll(true)} sx={{ mt: 2, color: '#3483fa', textTransform: 'capitalize' }}>
                    Ver más imágenes
                </Button>
            )}
        </Box>
    );
}
