import { FormikHelpers, useFormik } from 'formik';
import { FormErrors, FormValues } from '../types';
import Translate from './Translate';

const Contact = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      content: '',
    },
    validate: (values: FormValues) => {
      const errors: FormErrors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!values.name) {
        errors.name = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    onSubmit: (
      values: FormValues,
      { setSubmitting, resetForm }: FormikHelpers<FormValues>
    ) => {
      setTimeout(() => {
        const fileData = JSON.stringify(values);
        const blob = new Blob([fileData], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'data.json';
        link.href = url;
        link.click();
        setSubmitting(false);
      }, 400);
      resetForm();
    },
  });
  return (
    <div className='prose max-w-none px-5 py-12 mx-auto w-3/4 text-left'>
      <div className='flex flex-col text-center w-full mb-8'>
        <Translate
          tag='h1'
          id='app.contact.title'
          description='Contact title'
        />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className='lg:w-3/4 md:w-2/3 mx-auto'>
          <div className='flex flex-wrap -m-2'>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <Translate
                  tag='label'
                  id='app.contact.name'
                  description='Contact name'
                />

                <input
                  type='name'
                  name='name'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  value={formik.values.name}
                />
                <p className='m-0 text-sm text-red-500'>
                  {formik.errors.name &&
                    formik.touched.name &&
                    formik.errors.name}
                </p>
              </div>
            </div>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <Translate
                  tag='label'
                  id='app.contact.email'
                  description='Contact email'
                />
                <input
                  type='email'
                  name='email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full ${
                    formik.errors.email ? 'border-red-500' : ''
                  } bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  value={formik.values.email}
                />
                <p className='m-0 text-sm text-red-500'>
                  {formik.errors.email &&
                    formik.touched.email &&
                    formik.errors.email}
                </p>
              </div>
            </div>
          </div>

          <div className='p-2 w-full'>
            <div className='relative'>
              <Translate
                id='app.contact.message'
                description='welcome content'
                tag='label'
              />

              <textarea
                name='content'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.content}
                className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
              />
              <p className='m-0 text-sm text-red-500'>
                {formik.errors.content &&
                  formik.touched.content &&
                  formik.errors.content}
              </p>
            </div>
          </div>

          <button
            className='flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg'
            type='submit'
            disabled={formik.isSubmitting}
          >
            <Translate
              tag='button'
              id='app.contact.submit'
              description='Contact submit'
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
