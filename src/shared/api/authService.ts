import { signOut, updateProfile } from 'firebase/auth';
import { auth } from '../config';
import { message } from 'antd';

// Log out of your account
export const logOut = async navigate => {
  try {
    await signOut(auth);
    message.success('Exit is successful');
    navigate('/auth', { replace: true });
  } catch (e) {
    message.error(`Exit error`);
    throw new Error(`Exit error: ${e.code}`);
  }
};

// Updating user data
export const updateData = async (userName: string | undefined) => {
  try {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: userName
      });
      message.success('The data has been successfully updated');
    } else return;
  } catch (e) {
    message.error('An error occurred while updating the data');
    throw new Error(`An error occurred while updating the data: ${e.code}`);
  }
};
