import { ContactPreview } from '../../../entities/contactPreview';
import { ReceiveMessages } from '../../../features/receiveMessages';
import { SendMessage } from '../../../features/sendMessage';
import cl from './Chat.module.scss';

export const Chat = () => {
  return (
    <section className={cl.container}>
      <ContactPreview name='Conference' description='PERSONALLY' />
      <ReceiveMessages />
      <SendMessage />
    </section>
  );
};
