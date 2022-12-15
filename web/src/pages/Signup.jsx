import { Form, Formik } from 'formik';
import '../scss/main.scss';
import * as yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(yup) // extend yup

const signUpValidationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(5),
    text: yup.string().required(),
    date: yup.string().required(),
});

function Signup() {

return (
    <div className="Signup bg-25">
        <div className="min-h-screen">

            <main>
                <div className="mx-auto max-w-7xl py-36 sm:px-20 lg:px-40">
                    
                    {/* Main content */}
                    <h1 className="pb-6 text-4xl font-bold tracking-tight text-primary-100 primary-font">Signup</h1>
                    <div className="mb-8 shadow sm:overflow-hidden sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-4 gap-6">
                            <div className="md:col-span-2">
                                <div className="mt-4 px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Profile information</h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        This is the information you will need to log in to your Green Guide account.
                                    </p>
                                </div>
                            </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validationSchema={signUpValidationSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(true);
                                    }, 400);
                                }}
                                >
                                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                <Form onSubmit={handleSubmit} action="#" method="POST">
                                    <div className="col-span-2 sm:row-span-2">

                                        {/* Email */}
                                        <label htmlFor="company-website" className="block text-sm font-bold text-gray-700">E-mail address</label>
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
                                        
                                        {/* Password */}
                                        <label htmlFor="company-website" className="block text-sm font-bold text-gray-700">Password</label>
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
                                        >Save</button>
                                </Form>
                                )}
                            </Formik>
                        </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 shadow sm:overflow-hidden sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-4 gap-6">
                            <div className="md:col-span-2">
                                <div className="mt-4 px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Business registration</h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                    In order for us to confirm if your business aligns with our rules and morals, we need you to answer these questions about your business.
                                    </p>
                                </div>
                            </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <Formik
                                initialValues={{ text: '', date: '' }}
                                validationSchema={signUpValidationSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(true);
                                    }, 400);
                                }}
                                >
                                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                <Form onSubmit={handleSubmit} action="#" method="POST">
                                    <div className="col-span-2 sm:row-span-2">
                                        
                                        {/* Business Name */}
                                        <label htmlFor="business-name" className="block text-sm font-bold text-gray-700">Business name</label>
                                        <input
                                        type="text"
                                        name="business-name"
                                        id="business-name"
                                        placeholder="Example"
                                        className="p-3 block w-full flex-1 rounded-none rounded-r-md bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.text}
                                        />
                                        <small className="pb-4 block text-accent-100">{errors.text && touched.text && errors.text}</small>
                                        
                                        {/* Date of start-up*/}
                                        <label htmlFor="start-up-date" className="block text-sm font-bold text-gray-700">Date of start-up</label>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            placeholder="********"
                                            className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.date}
                                        />
                                        <small className="pb-4 block text-accent-100">{errors.date && touched.date && errors.date}</small>

                                        {/* Business Type */}
                                        <h2 htmlFor="start-up-date" className="pb-2 block text-sm font-bold text-gray-700">Business type</h2>
                                        <div class="flex items-center mb-4">
                                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" />
                                            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900">Catering industry</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" /> 
                                            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900">Store</label>
                                        </div>

                                        <div className="hidden sm:block" aria-hidden="true">
                                            <div className="py-5">
                                                <div className="border-t border-gray-200" />
                                            </div>
                                        </div>

                                        {/* Product features */}
                                        <h2 htmlFor="start-up-date" className="pb-2 block text-sm font-bold text-gray-700">Product features</h2>
                                        <div class="flex items-center mb-2">
                                            <input id="default-checkbox-1" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" />
                                            <label for="default-checkbox-1" class="ml-2 text-sm font-medium text-gray-900">Local products / short chain</label>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input id="default-checkbox-2" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" /> 
                                            <label for="default-checkbox-2" class="ml-2 text-sm font-medium text-gray-900">Fairtrade products</label>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input id="default-checkbox-3" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" />
                                            <label for="default-checkbox-3" class="ml-2 text-sm font-medium text-gray-900">Biological products</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="default-checkbox-4" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" /> 
                                            <label for="default-checkbox-4" class="ml-2 text-sm font-medium text-gray-900">Secondhand</label>
                                        </div>

                                        <div className="hidden sm:block" aria-hidden="true">
                                            <div className="py-5">
                                                <div className="border-t border-gray-200" />
                                            </div>
                                        </div>

                                        {/* Employment */}
                                        <h2 htmlFor="start-up-date" className="pb-2 block text-sm font-bold text-gray-700">Employment</h2>
                                        <div class="flex items-center mb-2">
                                            <input id="default-checkbox-1" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" />
                                            <label for="default-checkbox-1" class="ml-2 text-sm font-medium text-gray-900">Social employment</label>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input id="default-checkbox-2" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" /> 
                                            <label for="default-checkbox-2" class="ml-2 text-sm font-medium text-gray-900">Citizen's cooperative</label>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input id="default-checkbox-3" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" />
                                            <label for="default-checkbox-3" class="ml-2 text-sm font-medium text-gray-900">Fair wages</label>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input id="default-checkbox-4" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" /> 
                                            <label for="default-checkbox-4" class="ml-2 text-sm font-medium text-gray-900">Diversity & inclusion</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="default-checkbox-5" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" /> 
                                            <label for="default-checkbox-5" class="ml-2 text-sm font-medium text-gray-900">Sustainable mobility among employees</label>
                                        </div>

                                        <div className="hidden sm:block" aria-hidden="true">
                                            <div className="py-5">
                                                <div className="border-t border-gray-200" />
                                            </div>
                                        </div>

                                        {/* Other aspects of operations */}
                                        <h2 htmlFor="start-up-date" className="pb-2 block text-sm font-bold text-gray-700">Other aspects of operations</h2>
                                        <div class="flex items-center mb-2">
                                            <input id="default-checkbox-1" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" />
                                            <label for="default-checkbox-1" class="ml-2 text-sm font-medium text-gray-900">Accessibility</label>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input id="default-checkbox-2" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" /> 
                                            <label for="default-checkbox-2" class="ml-2 text-sm font-medium text-gray-900">Renewable energy</label>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input id="default-checkbox-3" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" />
                                            <label for="default-checkbox-3" class="ml-2 text-sm font-medium text-gray-900">Ethical and sustainable banking</label>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <input id="default-checkbox-4" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" /> 
                                            <label for="default-checkbox-4" class="ml-2 text-sm font-medium text-gray-900">Sustainable transport of goods</label>
                                        </div>

                                        <div className="hidden sm:block" aria-hidden="true">
                                            <div className="py-5">
                                                <div className="border-t border-gray-200" />
                                            </div>
                                        </div>

                                        {/* Materials */}
                                        <h2 htmlFor="start-up-date" className="pb-2 block text-sm font-bold text-gray-700">Materials</h2>
                                        <div class="flex items-center mb-4">
                                            <input id="default-checkbox-1" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" />
                                            <label for="default-checkbox-1" class="ml-2 text-sm font-medium text-gray-900">Circular use of materials</label>
                                        </div>
                                        <div class="pb-4 flex items-center">
                                            <input id="default-checkbox-2" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" /> 
                                            <label for="default-checkbox-2" class="ml-2 text-sm font-medium text-gray-900">Waste streams collected separately</label>
                                        </div>
                                        <div class="flex items-center mb-4">
                                            <input id="default-checkbox-1" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" />
                                            <label for="default-checkbox-1" class="ml-2 text-sm font-medium text-gray-900">Waste-free/low-waste</label>
                                        </div>
                                        <div class="pb-4 flex items-center">
                                            <input id="default-checkbox-2" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" /> 
                                            <label for="default-checkbox-2" class="ml-2 text-sm font-medium text-gray-900">Reuse of water/collection of rainwater</label>
                                        </div>

                                    </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >Save</button>
                                </Form>
                                )}
                            </Formik>
                        </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 shadow sm:overflow-hidden sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-4 gap-6">
                            <div className="md:col-span-2">
                                <div className="mt-4 px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Business information</h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                    This information will be displayed publicly so be careful what you share.
                                    </p>
                                </div>
                            </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <Formik
                                initialValues={{ text: '', date: '' }}
                                validationSchema={signUpValidationSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(true);
                                    }, 400);
                                }}
                                >
                                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                <Form onSubmit={handleSubmit} action="#" method="POST">
                                    <div className="col-span-2 sm:row-span-2">
                                        
                                        {/* Business Description */}
                                        <label htmlFor="business-name" className="block text-sm font-bold text-gray-700">Business description</label>
                                        <textarea
                                        type="text"
                                        name="business-name"
                                        id="business-name"
                                        placeholder="Example"
                                        className="p-3 block w-full flex-1 rounded-none rounded-r-md bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.text}
                                        />
                                        <p className="pb-4 mt-2 text-sm text-gray-400">Brief description for your business. URLs are hyperlinked.</p>
                                        
                                        {/* Opening Hours */}
                                        <label htmlFor="business-name" className="block text-sm font-bold text-gray-700">Opening hours</label>
                                        <textarea
                                        type="text"
                                        name="business-name"
                                        id="business-name"
                                        rows={3}
                                        placeholder="Tue - Thurs: 10 am - 7 pm
                                        Fri - Sat: 10 am - 6 pm
                                        Mon, Sun & public holidays: closed"
                                        className="mb-4 p-3 block w-full flex-1 rounded-none rounded-r-md bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.text}
                                        />

                                        {/* Cover Photo */}
                                        <label className="block text-sm font-bold text-gray-700">Cover photo</label>
                                        <div className="mb-4 mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                            <div className="space-y-1 text-center">
                                                <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                                >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>

                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="mb-4 mt-1 block w-full rounded-md bg-gray-50 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                            <option>Belgium</option>
                                            <option>Luxemburg</option>
                                            <option>The Netherlands</option>
                                        </select>

                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Street address</label>
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="mb-4 p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
                                        
                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">City</label>
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="mb-4 p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>

                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">State / Province</label>
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="mb-4 p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>

                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="mb-4 p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>


                                    </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >Save</button>
                                </Form>
                                )}
                            </Formik>
                        </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main content */}
                    
                </div>
            </main>
        </div>
    </div>
);}

export default Signup;



// import { Formik } from 'formik';
// import '../scss/main.scss';

// function Signup() {
//     return (
//         <div className="Signup bg-25">
//             <div className="min-h-full">
//                 <main>
//                     <div className="mx-auto max-w-7xl py-36 sm:px-20 lg:px-40">
                        
//                         {/* Main content */}

//                         <h1 className="pb-6 text-4xl font-bold tracking-tight text-primary-100 primary-font">Sign up</h1>

//                         <div>
//                             <div className="md:grid md:grid-cols-3 md:gap-6">
//                                 <div className="md:col-span-1">
//                                     <div className="mt-4 px-4 sm:px-0">
//                                         <h3 className="text-lg font-medium leading-6 text-gray-900">Business profile</h3>
//                                         <p className="mt-1 text-sm text-gray-600">
//                                             This information will be displayed publicly so be careful what you share.
//                                         </p>
//                                     </div>
//                                 </div>
//                             <div className="mt-5 md:col-span-2 md:mt-0">
//                                 <form action="#" method="POST">
//                                 <div className="shadow sm:overflow-hidden sm:rounded-md">
//                                     <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
//                                         <div className="grid grid-cols-3 gap-6">
//                                             <div className="col-span-3 sm:col-span-2">
//                                             <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
//                                                 Business name
//                                             </label>
//                                             <div className="mt-1 flex rounded-md shadow-sm">
//                                                 <input
//                                                 type="text"
//                                                 name="company-website"
//                                                 id="company-website"
//                                                 className="p-3 block w-full flex-1 rounded-none rounded-r-md bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                                 placeholder="Example"
//                                                 />
//                                             </div>
//                                             </div>
//                                         </div>

//                                         <div className="grid grid-cols-3 gap-6">
//                                             <div className="col-span-3 sm:col-span-2">
//                                             <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
//                                                 Date of start-up
//                                             </label>
//                                             <div className="mt-1 flex rounded-md shadow-sm">
//                                                 <input
//                                                 type="date"
//                                                 name="company-website"
//                                                 id="company-website"
//                                                 className="p-3 block w-full flex-1 rounded-none rounded-r-md bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                                 />
//                                             </div>
//                                             </div>
//                                         </div>

//                                         <div>
//                                             <label htmlFor="about" className="block text-sm font-medium text-gray-700">
//                                             About
//                                             </label>
//                                             <div className="mt-1">
//                                             <textarea
//                                                 id="about"
//                                                 name="about"
//                                                 rows={3}
//                                                 className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                                 placeholder="We are a team of highly skilled professionals who ..."
//                                                 defaultValue={''}
//                                             />
//                                             </div>
//                                             <p className="mt-2 text-sm text-gray-500">
//                                             Brief description for your business. URLs are hyperlinked.
//                                             </p>
//                                         </div>

//                                         <div>
//                                             <label htmlFor="about" className="block text-sm font-medium text-gray-700">
//                                             Opening hours
//                                             </label>
//                                             <div className="mt-1">
//                                             <textarea
//                                                 id="about"
//                                                 name="about"
//                                                 rows={3}
//                                                 className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                                 placeholder="Tue - Thurs: 10 am - 7 pm
//                                                 Fri - Sat: 10 am - 6 pm
//                                                 Mon, Sun & public holidays: closed"
//                                                 defaultValue={''}
//                                             />
//                                             </div>
//                                             <p className="mt-2 text-sm text-gray-500">
//                                             Brief description for your business. URLs are hyperlinked.
//                                             </p>
//                                         </div>

//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700">Cover photo</label>
//                                             <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
//                                             <div className="space-y-1 text-center">
//                                                 <svg
//                                                 className="mx-auto h-12 w-12 text-gray-400"
//                                                 stroke="currentColor"
//                                                 fill="none"
//                                                 viewBox="0 0 48 48"
//                                                 aria-hidden="true"
//                                                 >
//                                                 <path
//                                                     d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                                                     strokeWidth={2}
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                 />
//                                                 </svg>
//                                                 <div className="flex text-sm text-gray-600">
//                                                 <label
//                                                     htmlFor="file-upload"
//                                                     className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
//                                                 >
//                                                     <span>Upload a file</span>
//                                                     <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                                                 </label>
//                                                 <p className="pl-1">or drag and drop</p>
//                                                 </div>
//                                                 <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//                                             </div>
//                                             </div>
//                                         </div>

//                                         <div className="col-span-6 sm:col-span-3">
//                                         <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//                                             Country
//                                         </label>
//                                         <select
//                                             id="country"
//                                             name="country"
//                                             autoComplete="country-name"
//                                             className="mt-1 block w-full rounded-md bg-gray-50 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                                         >
//                                             <option>Belgium</option>
//                                             <option>Luxemburg</option>
//                                             <option>The Netherlands</option>
//                                         </select>
//                                         </div>

//                                         <div className="col-span-6">
//                                         <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
//                                             Street address
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="street-address"
//                                             id="street-address"
//                                             autoComplete="street-address"
//                                             className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                         />
//                                         </div>

//                                         <div className="col-span-6 sm:col-span-6 lg:col-span-2">
//                                         <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                                             City
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="city"
//                                             id="city"
//                                             autoComplete="address-level2"
//                                             className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                         />
//                                         </div>

//                                         <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                                         <label htmlFor="region" className="block text-sm font-medium text-gray-700">
//                                             State / Province
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="region"
//                                             id="region"
//                                             autoComplete="address-level1"
//                                             className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                         />
//                                         </div>

//                                         <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                                         <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
//                                             ZIP / Postal code
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="postal-code"
//                                             id="postal-code"
//                                             autoComplete="postal-code"
//                                             className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                         />
//                                         </div>

//                                     </div>
//                                     <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
//                                     <button
//                                         type="submit"
//                                         className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                                     >
//                                         Save
//                                     </button>
//                                     </div>
//                                 </div>
//                                 </form>
//                         </div>
//                             </div>
//                     </div>

//                     <div className="hidden sm:block" aria-hidden="true">
//                         <div className="py-5">
//                         <div className="border-t border-gray-200" />
//                         </div>
//                     </div>

//                     <div className="mt-10 sm:mt-0">
//                         <div className="md:grid md:grid-cols-3 md:gap-6">
//                         <div className="md:col-span-1">
//                             <div className="px-4 sm:px-0">
//                             <h3 className="text-lg font-medium leading-6 text-gray-900">Contact Information</h3>
//                             <p className="mt-1 text-sm text-gray-600">This information is visible for clients.</p>
//                             </div>
//                         </div>
//                         <div className="mt-5 md:col-span-2 md:mt-0">
//                             <form action="#" method="POST">
//                             <div className="overflow-hidden shadow sm:rounded-md">
//                                 <div className="bg-white px-4 py-5 sm:p-6">
//                                 <div className="grid grid-cols-6 gap-6">
//                                     <div className="col-span-6 sm:col-span-3">
//                                     <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
//                                         First name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="first-name"
//                                         id="first-name"
//                                         autoComplete="given-name"
//                                         className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                     />
//                                     </div>

//                                     <div className="col-span-6 sm:col-span-3">
//                                     <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
//                                         Last name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="last-name"
//                                         id="last-name"
//                                         autoComplete="family-name"
//                                         className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                     />
//                                     </div>

//                                     <div className="col-span-6 sm:col-span-4">
//                                     <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
//                                         Email address
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="email-address"
//                                         id="email-address"
//                                         autoComplete="email"
//                                         className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                     />
//                                     </div>

//                                     <div className="col-span-6 sm:col-span-4">
//                                         <div className="col-span-3 sm:col-span-2">
//                                         <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
//                                             Website
//                                         </label>
//                                         <div className="mt-1 flex rounded-md shadow-sm">
//                                             <span className="inline-flex items-center rounded-l-md bg-gray-100 px-3 text-sm text-gray-500">
//                                             http://
//                                             </span>
//                                             <input
//                                             type="text"
//                                             name="company-website"
//                                             id="company-website"
//                                             className="p-3 block w-full flex-1 rounded-none rounded-r-md bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                             placeholder="www.example.com"
//                                             />
//                                         </div>
//                                         </div>
//                                     </div>

                                    


//                                 </div>
//                                 </div>
//                                 <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
//                                 <button
//                                     type="submit"
//                                     className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                                 >
//                                     Save
//                                 </button>
//                                 </div>
//                             </div>
//                             </form>
//                         </div>
//                         </div>
//                     </div>

//                     <div className="hidden sm:block" aria-hidden="true">
//                         <div className="py-5">
//                         <div className="border-t border-gray-200" />
//                         </div>
//                     </div>

//                         {/* End Main content */}
                        
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// }

// export default Signup;