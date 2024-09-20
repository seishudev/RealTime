import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config';
import { IMessage } from '../../types';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import cn from 'classnames';
import cl from './Message.module.scss';

interface MessageProps {
  message: IMessage;
}

export const Message = ({ message }: MessageProps) => {
  const [user] = useAuthState(auth);

  const isCurrentUser = user.uid === message.uid;
  const userAvatar = message.avatar ? (
    <Avatar className={cl.avatar} src={message.avatar} alt='UserAvatar' />
  ) : (
    <Avatar className={cl.avatar} sx={{ bgcolor: deepPurple[500] }}>
      {message.name[0]}
    </Avatar>
  );

  return (
    <div
      className={cn(cl.container, {
        [cl.currentUserMessage]: isCurrentUser,
        [cl.anotherUserMessage]: !isCurrentUser
      })}
    >
      {!isCurrentUser && userAvatar}
      <div className={cl.wrapper}>
        <h4
          className={cn({
            [cl.currentUserName]: isCurrentUser
          })}
        >
          {isCurrentUser ? 'You' : message.name}
        </h4>
        <p
          className={cn({
            [cl.currentUser]: isCurrentUser,
            [cl.anotherUser]: !isCurrentUser
          })}
        >
          {message.text}
        </p>
      </div>
      {isCurrentUser && userAvatar}
    </div>
  );
};
