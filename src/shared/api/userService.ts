import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp
} from 'firebase/firestore';
import { auth, firestore } from '../config';

// Sending messages
export const sendMessage = async (message, setMessage) => {
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

// Receiving messages
export const receiveMessage = setMessages => {
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
};
