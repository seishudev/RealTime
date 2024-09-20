import SearchIcon from '@mui/icons-material/Search';
import cl from './SearchField.module.scss';

export const SearchField = () => {
  return (
    <div className={cl.search}>
      <SearchIcon className={cl.magnifer} />
      <input type='text' placeholder='Search' />
    </div>
  );
};
