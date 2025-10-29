import { RouteObject } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import CrudContainer from '@/containers/CrudContainer';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'crud',
        element: <CrudContainer />,
      },
    ],
  },
];

