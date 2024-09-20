import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Layout } from '../layout';
import { HomePage } from '../../pages/homePage';
import { Chat } from '../../pages/chat';
import { Auth } from '../../pages/auth';
import { SignUp } from '../../pages/signup';
import { Settings } from '../../pages/settings';
import { RequireAuth } from '../../shared/hoc';
import { auth } from '../../shared/config';

export const AppRouter = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) return;
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
          <Route path='conference' element={<Chat />} />
          <Route path='auth' element={<Auth />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
