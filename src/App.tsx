import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { LinearProgress, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { router } from './routes/router';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<LinearProgress />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}
