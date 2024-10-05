import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../shared/config';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import cl from './ProfilePicture.module.scss';

export const ProfilePicture = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return null;

  return (
    <section className={cl.container}>
      <div className={cl.info}>
        <p>Profile picture</p>
        <Avatar
          className={cl.avatar}
          src={user?.photoURL ?? ''}
          alt='UserAvatar'
          sx={{ bgcolor: deepPurple[500] }}
        >
          {!user?.photoURL && user?.displayName ? user.displayName[0] : ''}
        </Avatar>
      </div>
    </section>
  );
};
