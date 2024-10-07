import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth } from '../config';
import { message } from 'antd';

// Google authorization
export const authWithGoogle = async navigate => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    message.success('Authorization was successful');
    navigate('/', { replace: true });
  } catch (e) {
    message.error('An authorization error has occurred');
    throw new Error(`An authorization error has occurred: ${e.code}`);
  }
};

// Account registration by email and password
export const accountRegistration = async (data, navigate) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    await updateProfile(userCredential.user, {
      displayName: `${data.firstName} ${data.lastName}`
    });
    message.success('Registration was successful');
    navigate('/', { replace: true });
  } catch (e) {
    message.error('A registration error has occurred');
    throw new Error(`A registration error has occurred: ${e.code}`);
  }
};

// Account authorization by email and password
export const accountAuth = async (data, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    message.success('Authorization was successful');
    navigate('/', { replace: true });
  } catch (e) {
    message.error('An authorization error has occurred');
    throw new Error(`An authorization error has occurred: ${e.code}`);
  }
};

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
