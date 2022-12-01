import { Formik } from 'formik';
import React from 'react'

function Form() {
  return (
    <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
            const errors = {};
            if (!values.email) {
            errors.email = 'Required';
            } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
            errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)
                ) {
                errors.password = 'Invalid password';
                }
            return errors;
        }}
        
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 400);
        }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
            <form onSubmit={handleSubmit} action="#" method="POST">
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                    test
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm"></div>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="hello@example.com"
                                className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                <input
                                    type="password"
                                    name="password"
                                    id="email"
                                    placeholder="********"
                                    className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
        )}
    </Formik>
  )
}

export default Form