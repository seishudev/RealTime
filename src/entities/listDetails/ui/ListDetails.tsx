import { AccountDetail } from '../../../shared/ui';
import cl from './ListDetails.module.scss';

interface ListDetailsProps {
  name: string | undefined;
  setName: (value: string) => void;
}

export const ListDetails = ({ name, setName }: ListDetailsProps) => {
  return (
    <section className={cl.container}>
      <AccountDetail
        text='Profile name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </section>
  );
};
