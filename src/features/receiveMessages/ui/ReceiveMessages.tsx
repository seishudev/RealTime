import { useState, useEffect } from 'react';
import { receiveMessage } from '../../../shared/api';
import { Message } from '../../../shared/ui';
import cl from './ReceiveMessages.module.scss';

export const ReceiveMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    receiveMessage(setMessages);
  }, []);

  return (
    <section className={cl.chat}>
      {messages?.map(message => <Message key={message.id} message={message} />)}
    </section>
  );
};
