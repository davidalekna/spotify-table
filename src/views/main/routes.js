import React, { lazy } from 'react';

const Browse = lazy(() => import('./browse'));

export default [
  {
    path: '/',
    exact: true,
    component: () => <Browse />,
  },
  {
    path: '/radio',
    component: () => <div>Radio Component</div>,
  },
];
