import { AppBar, Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <AppBar position="sticky" color="primary" elevation={0} style={{ height: '30px' }}>
      </AppBar>
      <Container sx={{ py: 3, flex: 1 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
