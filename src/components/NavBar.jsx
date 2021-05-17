import { Link, withRouter } from 'react-router-dom';

const NavBar = () => (
  <div className='bg-gradient-to-l from-blue-300 prose max-w-none'>
    <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center '>
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

export default withRouter(NavBar);
