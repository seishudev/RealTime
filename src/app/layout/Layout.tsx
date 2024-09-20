import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../shared/ui';

export const Layout = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
