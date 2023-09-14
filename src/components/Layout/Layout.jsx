import { NavLink, Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
import { LayoutWrrap } from './Layout.styled';

// import css from 'layout/Layout/layout.module.css';
// import { Header } from '../Header/Header';

const Layout = () => {
  return (
    <LayoutWrrap>
      {/* <Header /> */}
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorite</NavLink>
      </header>
      <main>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </LayoutWrrap>
  );
};

export default Layout;
