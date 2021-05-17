import { useSelector } from 'react-redux';

const Home = () => {
  const { selectedLang, defaultLang } = useSelector((state) => state);
  console.log({ selectedLang, defaultLang });
  return (
    <div className='prose max-w-none container mx-auto flex flex-col px-5 py-12 justify-center items-center'>
      <h1>Welcome</h1>
      <p>This is a React App</p>
    </div>
  );
};

export default Home;
