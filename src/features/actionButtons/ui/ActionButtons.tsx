import { useNavigate } from 'react-router-dom';
import { updateData, logOut } from '../../../shared/api';
import { Button } from '../../../shared/ui';
import cl from './ActionButtons.module.scss';

export const ActionButtons = ({ name }: { name: string | undefined }) => {
  const navigate = useNavigate();

  return (
    <div className={cl.container}>
      <Button onClick={() => updateData(name)}>Save</Button>
      <Button onClick={() => logOut(navigate)} color='purple'>
        LogOut
      </Button>
    </div>
  );
};
