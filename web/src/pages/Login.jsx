import { Formik } from 'formik';
import '../scss/main.scss';

function Login() {


    return (
        <div className="Login bg-25">
            <div className="min-h-screen">
                <main>
                    <div className="mx-auto max-w-7xl py-36 sm:px-20 lg:px-40">
                        
                        {/* Main content */}

                        <h1 className="pb-6 text-4xl font-bold tracking-tight text-primary-100 primary-font">Login</h1>

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
                !/^[A-Z0-9._%+-]{2,}$/i.test(values.password)
                ) {
                errors.password = 'Invalid password';
                }
            return errors;
        }}
        
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(true);
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
            <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-4 gap-6">
                        <div className="col-span-2 sm:row-span-2">
                            <img src="https://opendoodles.s3-us-west-1.amazonaws.com/plant.svg" alt="" />
                        </div>
                        <form onSubmit={handleSubmit} action="#" method="POST">
                            <div className="col-span-2 sm:row-span-2">
                                <div className="mt-1 flex rounded-md shadow-sm"></div>
                                    <label htmlFor="company-website" className="block text-sm font-bold text-gray-700">
                                        E-mail address
                                    </label>
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
                                    <small className="pb-4 block text-accent-100">{errors.email && touched.email && errors.email}</small>
                                    <label htmlFor="company-website" className="block text-sm font-bold text-gray-700">
                                        Password
                                    </label>
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
                                    <small className="pb-4 block text-accent-100">{errors.password && touched.password && errors.password}</small>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Save
                                </button>
                        </form>
                    </div>
                </div>
</div>
        )}
    </Formik>

                        {/* End Main content */}
                        
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Login;