import React, { lazy } from 'react';

const Browse = lazy(() => import('./browse'));

export default [
  {
    heading: null,
    list: [
      { title: 'Browse', path: '/', exact: true, component: () => <Browse /> },
      {
        title: 'Radio',
        path: '/radio',
        component: () => <div>Radio Component</div>,
      },
    ],
  },
  {
    heading: 'Your Library',
    list: [
      { title: 'Made For You', path: '/other1' },
      { title: 'Recently Played', path: '/other2' },
      { title: 'Songs', path: '/other3' },
      { title: 'Albums', path: '/other4' },
      { title: 'Artists', path: '/other5' },
      { title: 'Stations', path: '/other6' },
      { title: 'Local Files', path: '/other7' },
      { title: 'Videos', path: '/other8' },
      { title: 'Podcasts', path: '/other9' },
    ],
  },
  {
    heading: 'Playlists',
    list: [
      { title: 'Liked from Radio', path: '/other10' },
      { title: 'D and B', path: '/other11' },
      { title: 'Chillpop', path: '/other12' },
      { title: 'MaBangers', path: '/other13' },
    ],
  },
];
