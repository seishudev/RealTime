import { FC, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { Context } from '../../main.tsx';

export const RequireAuth: FC = ({ children }) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return user ? children : <Navigate to='/auth' />;
};
