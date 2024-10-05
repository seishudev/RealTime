import { useAuthState } from 'react-firebase-hooks/auth';
import { Navbar, SwitchUi } from '../';
import { auth } from '../../config';
import cl from './Sidebar.module.scss';

export const Sidebar = () => {
  const [user, loading] = useAuthState(auth);

  if (loading || !user) return null;

  return (
    <aside className={cl.container}>
      <Navbar />
      <SwitchUi />
    </aside>
  );
};
