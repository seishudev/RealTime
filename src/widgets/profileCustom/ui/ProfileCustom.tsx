import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ProfilePicture } from '../../../entities/profilePicture';
import { AccountDetail } from '../../../entities/accountDetail';
import { Button } from '../../../shared/ui';
import { logOut, updateData } from '../../../shared/api';
import { auth } from '../../../shared/config';
import cl from './ProfileCustom.module.scss';

export const ProfileCustom = () => {
  const [user] = useAuthState(auth);
  const [userName, setUserName] = useState<string | undefined>(
    user?.displayName
  );
  const navigate = useNavigate();

  return (
    <section className={cl.container}>
      <div className={cl.wrapper}>
        <h2>Settings</h2>
        <ProfilePicture />
        <section className={cl.listDetails}>
          <AccountDetail
            text='Profile name'
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </section>
      </div>
      <div className={cl.actions}>
        <Button onClick={() => updateData(userName)}>Save</Button>
        <Button onClick={() => logOut(navigate)} color='purple'>
          LogOut
        </Button>
      </div>
    </section>
  );
};
