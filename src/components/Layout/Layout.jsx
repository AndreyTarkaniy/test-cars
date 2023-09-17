import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LayoutWrrap } from './Layout.styled';
import { Header } from 'components/header/header';

const Layout = () => {
  return (
    <LayoutWrrap>
      <Header />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </LayoutWrrap>
  );
};

export default Layout;
