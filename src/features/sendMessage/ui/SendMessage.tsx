import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, firestore } from '../../../shared/config';
import SendIcon from '@mui/icons-material/Send';
import cl from './SendMessage.module.scss';

export const SendMessage = () => {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(firestore, 'messages'), {
      uid,
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp()
    });
    setMessage('');
  };

  return (
    <div className={cl.container}>
      <div className={cl.interaction}>
        <input
          type='text'
          placeholder='Type something...'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        {message && <SendIcon className={cl.btn} onClick={sendMessage} />}
      </div>
    </div>
  );
};
