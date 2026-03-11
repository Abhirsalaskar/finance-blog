import { createBrowserRouter } from 'react-router';
import { Layout } from './pages/layout';
import { Home } from './pages/home';
import { Articles } from './pages/articles';
import { Markets } from './pages/markets';
import { Investing } from './pages/investing';
import { About } from './pages/about';
import { Article } from './pages/article';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'articles', Component: Articles },
      { path: 'markets', Component: Markets },
      { path: 'investing', Component: Investing },
      { path: 'about', Component: About },
      { path: 'article/:id', Component: Article },
    ],
  },
]);