/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({});
  const [submittingForm, setSubmittingForm] = useState(false);

  const validateMail = (emailString) => {
    const mailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return mailRegExp.test(emailString);
  };

  const handleSubmit = (evt) => {
    setSubmittingForm(true);
    evt.preventDefault();
    evt.target.reset();
    setSubmittingForm(false);
  };

  return (
    <div className='prose max-w-none px-5 py-12 mx-auto'>
      <div className=''>
        <div className='flex flex-col text-center w-full mb-8'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Contact Form
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    htmlFor='name'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Enter your name...'
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    htmlFor='email'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter your mail...'
                    onInput={(e) => {
                      if (validateMail(e.target.value)) {
                        setForm({ ...form, email: e.target.value });
                      }
                    }}
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label
                    htmlFor='message'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Write whatever you want here :D'
                    onChange={(e) =>
                      setForm({ ...form, content: e.target.value })
                    }
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <button
                  type='submit'
                  className='flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg'
                >
                  {submittingForm ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
