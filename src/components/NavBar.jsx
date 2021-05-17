import { Link, withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  const [yPosition, setYPosition] = useState(0);

  const handleScrolling = (e) => {
    const window = e.currentTarget;
    if (yPosition > window.scrollY) {
      console.log('going up');
    } else if (yPosition < window.scrollY) {
      console.log('going down');
    }
    setYPosition(window.scrollY);
  };

  useEffect(() => {
    setYPosition(window.scrollY);
    window.addEventListener('scroll', (e) => handleScrolling(e));
  });

  return (
    <div className='bg-gradient-to-l from-blue-300 prose max-w-none w-full fixed opacity-100'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center mb-12'>
        <select
          name='language-select'
          id='language-select'
          onChange={(evt) => dispatch(updateLanguage(evt.target.value))}
        >
          {languageOptions.map(({ id, key, label }) => (
            <option key={id} value={key}>
              {label}
            </option>
          ))}
        </select>
        <nav
          className={`md:ml-auto ${
            yPosition > 50 ? 'items-end' : ''
          } flex flex-wrap items-center text-base justify-center gap-2`}
        >
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
