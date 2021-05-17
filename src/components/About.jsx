const About = () => (
  <div className='prose max-w-none container mx-auto flex flex-row lg:flex-col px-5 py-12 justify-center items-center'>
    <img
      className='lg:w-1/6 md:w-2/6 sm:w-3/6 xs:w-3/6 mb-10 object-cover object-center rounded'
      alt='hero'
      src='https://azuri.dev/lalo.a1992c7e.png'
    />
    <div className='w-full md:w-2/3 flex flex-col mb-16 items-center text-center'>
      <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
        Hi! My name is Eduardo
      </h1>
      <p className='mb-8 leading-relaxed'>
        I am a Fullstack developer with primary focus on front end development.
      </p>
    </div>
  </div>
);

export default About;
