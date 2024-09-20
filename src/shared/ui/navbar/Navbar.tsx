import { Link } from 'react-router-dom';
import TelegramIcon from '@mui/icons-material/Telegram';
import SettingsIcon from '@mui/icons-material/Settings';
import cl from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={cl.container}>
      <Link to='/'>
        <h1>
          R<span>T</span>
        </h1>
      </Link>
      <div className={cl.wrapper}>
        <Link className={cl.link} to='/'>
          <TelegramIcon className={cl.icon} />
          <span className={cl.info}>Messages</span>
        </Link>
        <Link className={cl.link} to='/settings'>
          <SettingsIcon className={cl.icon} />
          <span className={cl.info}>Settings</span>
        </Link>
      </div>
    </div>
  );
};
