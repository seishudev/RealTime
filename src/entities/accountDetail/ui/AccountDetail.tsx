import { Field } from '../../../shared/ui';
import cl from './AccountDetail.module.scss';

interface AccountDetailProps {
  text: string;
}

export const AccountDetail = ({ text, ...props }: AccountDetailProps) => {
  return (
    <div className={cl.container}>
      <p>{text}</p>
      <Field {...props} />
    </div>
  );
};
