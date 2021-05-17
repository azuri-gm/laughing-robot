import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import updateLanguage from '../actions/index';

const languageOptions = [
  {
    id: 1,
    key: 'ES',
    label: 'Spanish',
    value: 'ES',
  },
  {
    id: 2,
    key: 'EN',
    label: 'English',
    value: 'EN',
  },
];

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className='bg-gradient-to-l from-blue-300 prose max-w-none'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center '>
        <select
          className='prose-sm px-4 py-2 rounded-lg form-select w-28'
          name='language'
          id='language'
          onChange={(e) => dispatch(updateLanguage(e.target.value))}
        >
          {languageOptions.map(({ key, label, value }) => (
            <option key={key} value={value}>
              {label}
            </option>
          ))}
        </select>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center gap-2'>
          <Link to='/' className='p-2 hover:bg-blue-400'>
            Home
          </Link>
          <Link to='/about' className='p-2 hover:bg-blue-400'>
            About
          </Link>
          <Link to='/contact' className='p-2 hover:bg-blue-400'>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
