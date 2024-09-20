import { useAuthState } from 'react-firebase-hooks/auth';
import { Navbar, SwitchUi } from '../';
import { auth } from '../../config';
import cl from './Sidebar.module.scss';

export const Sidebar = () => {
  const [user] = useAuthState(auth);

  if (!user) return;

  return (
    <aside className={cl.container}>
      <Navbar />
      <SwitchUi />
    </aside>
  );
};
