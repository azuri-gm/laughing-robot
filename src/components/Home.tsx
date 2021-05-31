import Translate from './Translate';

const Home = (): JSX.Element => (
  <div className='prose max-w-none container w-3/4 mx-auto flex flex-col px-5 py-12 justify-center items-center'>
    <Translate tag='h1' id='app.welcome' description='welcome message' />
    <Translate tag='h3' id='app.intro' description='welcome intro' />
    <Translate tag='p' id='app.content' description='welcome content' />
  </div>
);

export default Home;
