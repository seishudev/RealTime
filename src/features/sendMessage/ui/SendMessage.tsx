import { useState } from 'react';
import { sendMessage } from '../../../shared/api';
import SendIcon from '@mui/icons-material/Send';
import cl from './SendMessage.module.scss';

export const SendMessage = () => {
  const [message, setMessage] = useState('');

  return (
    <section className={cl.container}>
      <div className={cl.interaction}>
        <input
          type='text'
          placeholder='Type something...'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        {message && (
          <SendIcon
            className={cl.btn}
            onClick={() => sendMessage(message, setMessage)}
          />
        )}
      </div>
    </section>
  );
};
