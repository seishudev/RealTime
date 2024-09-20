import { useState, useEffect } from 'react';
import {
  query,
  collection,
  orderBy,
  limit,
  onSnapshot
} from 'firebase/firestore';
import { firestore } from '../../../shared/config';
import { Message } from '../../../shared/ui';
import cl from './ReceiveMessages.module.scss';

export const ReceiveMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(firestore, 'messages'),
      orderBy('createdAt', 'desc'),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, QuerySnapshot => {
      const fetchedMessages = [];
      QuerySnapshot.forEach(doc => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className={cl.chat}>
      {messages?.map(message => <Message key={message.id} message={message} />)}
    </div>
  );
};
