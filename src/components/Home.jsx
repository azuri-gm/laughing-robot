import { useSelector } from 'react-redux';

const translationData = {
  ES: {
    welcome: 'Bienvenido',
    intro: 'Esta es una aplicacion de React.',
  },
  EN: {
    welcome: 'Welcome',
    intro: 'This is a React application.',
  },
};

const Home = () => {
  const { selectedLang, defaultLang } = useSelector((state) => state);

  return (
    <div className='prose max-w-none container mx-auto flex flex-col px-5 py-12 justify-center items-center'>
      {defaultLang && selectedLang === '' && (
        <>
          <h1>{translationData[defaultLang].welcome}</h1>
          <p>{translationData[defaultLang].intro}</p>
        </>
      )}
      {selectedLang !== '' && (
        <>
          <h1>{translationData[selectedLang].welcome}</h1>
          <p>{translationData[selectedLang].intro}</p>
        </>
      )}
    </div>
  );
};

export default Home;
