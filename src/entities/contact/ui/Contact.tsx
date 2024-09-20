import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import cl from './Contact.module.scss';

interface ContactProps {
  name: string;
  description: string;
}

export const Contact = ({ name, description, ...props }: ContactProps) => {
  return (
    <div className={cl.contact} {...props}>
      <AccountCircleIcon className={cl.icon} />
      <div className={cl.info}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
