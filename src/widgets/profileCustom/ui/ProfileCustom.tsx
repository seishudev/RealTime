import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ProfilePicture } from '../../../entities/profilePicture';
import { ListDetails } from '../../../entities/listDetails';
import { ActionButtons } from '../../../features/actionButtons';
import { auth } from '../../../shared/config';
import cl from './ProfileCustom.module.scss';

export const ProfileCustom = () => {
  const [user] = useAuthState(auth);
  const [userName, setUserName] = useState<string | undefined>(
    user?.displayName
  );

  return (
    <section className={cl.container}>
      <div className={cl.wrapper}>
        <h2>Settings</h2>
        <ProfilePicture />
        <ListDetails name={userName} setName={setUserName} />
      </div>
      <ActionButtons name={userName} />
    </section>
  );
};
