import { List, ListItem, ListItemText, Typography } from '@mui/material';

export default function ProductAttributes({ attributes }:{ attributes: string[] }) {
  if (!attributes?.length) return null;
  return (
    <>
      <Typography variant="subtitle2" sx={{ mt: 2 }}>Características</Typography>
      <List dense sx={{ pt: 0 }}>
        {attributes.map((a, idx) => (
          <ListItem key={`${a}-${idx}`} sx={{ py: 0 }}>
            <ListItemText primary={a} primaryTypographyProps={{ variant: 'body2' }} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
