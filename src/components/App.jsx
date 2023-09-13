import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Favorite from 'pages/Favorite/Favorite';
import Catalog from 'pages/Catalog/Catalog';

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

// "bootstrap": "^5.3.0-alpha3",
