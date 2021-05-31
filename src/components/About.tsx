import Translate from './Translate';

const About = (): JSX.Element => (
  <div className='prose max-w-none container mx-auto flex flex-row lg:flex-col px-5 py-12 justify-center items-center'>
    <img
      className='lg:w-1/6 md:w-2/6 sm:w-3/6 xs:w-3/6 mb-10 object-cover object-center rounded'
      alt='hero'
      src='https://azuri.dev/lalo.a1992c7e.png'
    />
    <div className='w-full md:w-2/3 flex flex-col mb-16 items-center text-center'>
      <Translate tag='h1' id='app.greeting' description='About title' />
      <Translate tag='p' id='app.desc' description='About description' />
    </div>
  </div>
);

export default About;
