import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../shared/config';
import { message } from 'antd';

export const Settings = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      message.success('Exit is successful');
      navigate('/auth', { replace: true });
    } catch (e) {
      message.error(`Exit error`);
      throw new Error(`Exit error: ${e.code}`);
    }
  };

  return (
    <>
      <button onClick={logOut}>Выйти</button>
    </>
  );
};
