import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';

export default function MainLayout() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <AppBar position="sticky" color="primary" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            style={{ textDecoration: 'none', color: '#333', fontWeight: 700 }}
          >
            MercadoTech
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 3, flex: 1 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
