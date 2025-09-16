import { forwardRef } from 'react';
import { Box, Typography, Paper, Table, TableBody, TableRow, TableCell, Stack } from '@mui/material';
import type { Product, SpecGroup } from '../../interfaces/types';

function SpecTable({ rows }: { rows: [string, string][] }) {
    if (!rows.length) return null;
    return (
        <Paper variant="outlined" sx={{ mb: 2 }}>
            <Table size="small">
                <TableBody>
                    {rows.map(([k, v]) => (
                        <TableRow key={k}>
                            <TableCell sx={{ width: 280, bgcolor: '#f7f7f7' }}>
                                <Typography variant="body2" color="text.secondary">{k}</Typography>
                            </TableCell>
                            <TableCell><Typography variant="body2">{v}</Typography></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

const toRows = (g?: SpecGroup) => g ? Object.entries(g).filter(([, v]) => String(v).trim() !== '') : [];

const ProductSpecs = forwardRef<HTMLDivElement, { product: Product }>(({ product }, ref) => {
    const specs = product.specs;
    if (!specs) return null;

    const highlightRows = toRows(specs.highlights);

    return (
        <Box ref={ref} sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>Características del producto</Typography>

            {highlightRows.length > 0 && (
                <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                    <Stack spacing={0.5}>
                        {highlightRows.map(([k, v]) => (
                            <Typography key={k} variant="body2">
                                <b>{k}:</b> {v}
                            </Typography>
                        ))}
                    </Stack>
                </Paper>
            )}

            {specs.groups && Object.entries(specs.groups).map(([groupName, groupData]) => (
                <Box key={groupName} sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        {groupName}
                    </Typography>
                    <SpecTable rows={toRows(groupData)} />
                </Box>
            ))}
        </Box>
    );
});

ProductSpecs.displayName = 'ProductSpecs';
export default ProductSpecs;
