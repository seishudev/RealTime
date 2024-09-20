import { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../config';

export const RequireAuth: FC = ({ children }) => {
  const [user] = useAuthState(auth);
  return user ? children : <Navigate to='/auth' />;
};
