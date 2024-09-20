import { useNavigate } from 'react-router-dom';
import { SearchField } from '../../../shared/ui';
import { Contact } from '../../../entities/contact';
import cl from './ContactsList.module.scss';

export const ContactsList = () => {
  const navigate = useNavigate();

  return (
    <section className={cl.container}>
      <div className={cl.entry}>
        <h2>Messages</h2>
        <SearchField />
      </div>
      <div className={cl.list}>
        <Contact
          onClick={() => navigate('/conference')}
          name='Conference'
          description='Send your message'
        />
      </div>
    </section>
  );
};
