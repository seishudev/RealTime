import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../layout';
import { RequireAuth } from '../../shared/hoc';
import { HomePage } from '../../pages/homePage';
import { Auth } from '../../pages/auth';
import { SignUp } from '../../pages/signup';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route path='auth' element={<Auth />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
