import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import type { Product } from '../../interfaces/types';

export default function RightRailRecommendations({ title, items }: { title: string; items: Product[] }) {

  if (!items?.length) return null;

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>{title}</Typography>
      
      <List dense sx={{ py: 0 }}>
        {items.slice(0, 6).map(p => (
          <Box key={p.id}>
            <ListItem alignItems="flex-start" sx={{ px: 0 }}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={p.thumbnail || p.pictures?.[0]?.url}
                  alt={p.title}
                  sx={{ width: 56, height: 56 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="body2" noWrap>{p.title}</Typography>}
                secondary={<Typography variant="body2" fontWeight={600}>{p.currency} {p.price}</Typography>}
              />
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
}
