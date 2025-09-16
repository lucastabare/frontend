import { createBrowserRouter, Navigate  } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from '../layout/MainLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));

const DEFAULT_PRODUCT_ID = 'MLA123';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
  { index: true, element: <Navigate to={`/product/${DEFAULT_PRODUCT_ID}`} replace /> },
  { path: 'product/:id', element: <ProductDetailPage /> },
  { path: 'home', element: <HomePage /> },
]
  },
]);
