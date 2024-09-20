import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import cl from './ContactPreview.module.scss';

interface ContactPreviewProps {
  name: string;
  description: string;
}

export const ContactPreview = ({ name, description }: ContactPreviewProps) => {
  const navigate = useNavigate();

  return (
    <div className={cl.container}>
      <div className={cl.user}>
        <div className={cl.back} onClick={() => navigate('/')}>
          <KeyboardBackspaceIcon />
          <span>Back</span>
        </div>
        <div className={cl.info}>
          <AccountCircleIcon className={cl.avatar} />
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className={cl.connection}>
        <VideocamIcon className={cl.icon} />
        <CallIcon className={cl.icon} />
      </div>
    </div>
  );
};
