import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import AppProviders from './providers/AppProviders';
import { router } from './routes/router';

export default function App() {
  return (
    <AppProviders>
      <Suspense fallback={<LinearProgress />}>
        <RouterProvider router={router} />
      </Suspense>
    </AppProviders>
  );
}
