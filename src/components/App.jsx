import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import { lazy } from 'react';
// import Home from 'pages/Home/Home';
// import Favorite from 'pages/Favorite/Favorite';
// import Catalog from 'pages/Catalog/Catalog';

const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorite = lazy(() => import('../pages/Favorite/Favorite'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorite />} />
      </Route>
    </Routes>
  );
};
