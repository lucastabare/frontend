import { forwardRef, useState } from 'react';
import { Box, Typography, Paper, Table, TableBody, TableRow, TableCell, Stack } from '@mui/material';
import ALink from '../ui/ALink';
import type { Product, SpecGroup } from '../../interfaces/types';

function SpecTable({ rows }: { rows: [string, string][] }) {
  if (!rows.length) return null;
  return (
    <Paper variant="outlined" sx={{ mb: 2 }}>
      <Table size="small" aria-label="specs">
        <TableBody>
          {rows.map(([k, v]) => (
            <TableRow key={k}>
              <TableCell sx={{ width: 280, bgcolor: '#f7f7f7' }}>
                <Typography variant="body2" color="text.secondary">{k}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{v}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

const toRows = (g?: SpecGroup) =>
  g ? Object.entries(g).filter(([, v]) => String(v).trim() !== '') : [];

const ProductSpecs = forwardRef<HTMLDivElement, { product: Product }>(({ product }, ref) => {
  const specs = product.specs;
  const [expanded, setExpanded] = useState(false);
  if (!specs) return null;

  const highlightRows = toRows(specs.highlights);
  const hasGroups = !!specs.groups && Object.keys(specs.groups).length > 0;

  return (
    <Box ref={ref} sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>Características del producto</Typography>

      {!!highlightRows.length && (
        <Paper variant="outlined" sx={{ paddingTop: 2, pb:2, mb: 2, border: 'none' }}>
          <Stack spacing={0.5}>
            {highlightRows.map(([k, v]) => (
              <Typography key={k} variant="body2">
                <b>{k}:</b> {v}
              </Typography>
            ))}
          </Stack>
          {hasGroups && (
            <Box sx={{ mt: 1 }}>
              <ALink
                title={expanded ? 'Ocultar características' : 'Ver todas las características'}
                fontSize={14}
                onClick={() => setExpanded((s) => !s)}
              />
            </Box>
          )}
        </Paper>
      )}

      {expanded && hasGroups && (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
          {Object.entries(specs.groups!).map(([groupName, groupData]) => (
            <Box key={groupName}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>{groupName}</Typography>
              <SpecTable rows={toRows(groupData)} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
});

ProductSpecs.displayName = 'ProductSpecs';
export default ProductSpecs;
