/* eslint-disable operator-linebreak */
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import updateLanguage from '../actions/index';

const languageOptions = [
  {
    id: 1,
    key: 'ES',
    label: 'Spanish',
  },
  {
    id: 2,
    key: 'EN',
    label: 'English',
  },
];

const NavBar = () => {
  const dispatch = useDispatch();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 110) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    setPrevScrollPos(currentScrollPos);
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div
      className={`bg-blue-300 prose max-w-none w-full transition-all duration-1000 ease-in transform -translate-y-1 ${
        visible ? 'fixed top-0 -translate-y-1 scale-110' : ''
      } `}
    >
      <div className='container mx-auto flex flex-wrap items-center p-5 flex-col md:flex-row  mb-12'>
        <select
          name='language-select'
          id='language-select'
          className='bg-blue-300 text-black'
          onChange={(evt) => dispatch(updateLanguage(evt.target.value))}
        >
          {languageOptions.map(({ id, key, label }) => (
            <option key={id} value={key}>
              {label}
            </option>
          ))}
        </select>
        <nav
          className={`md:ml-auto transform ${
            visible ? 'mx-auto' : ''
          } flex flex-wrap items-center text-base justify-center gap-2 transition-all duration-1000 ease-in-out`}
        >
          <Link
            to='/'
            className='p-2 hover:bg-blue-400 transition duration-300'
          >
            Home
          </Link>
          <Link
            to='/about'
            className='p-2 hover:bg-blue-400 transition duration-300'
          >
            About
          </Link>
          <Link
            to='/contact'
            className='p-2 hover:bg-blue-400 transition duration-300'
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
