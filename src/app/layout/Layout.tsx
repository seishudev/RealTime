import { ThemeProvider } from '../providers';
import { Outlet } from 'react-router-dom';
import { Sidebar, Footer } from '../../shared/ui';

export const Layout = () => {
  return (
    <ThemeProvider>
      <div className='wrapper'>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
};
