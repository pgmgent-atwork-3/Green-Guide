import { Form, Formik } from 'formik';
import '../scss/main.scss';
import * as yup from 'yup'
import YupPassword from 'yup-password'
import Navbar from '../components/Navbar';
YupPassword(yup) // extend yup

const signUpValidationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(5),
    text: yup.string().required(),
    date: yup.string().required(),
});

function Labels() {
    
return (
<div className="Labels">
    <div className="min-h-full">
        <Navbar type="dashboard"/>
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

                <h1 className="text-4xl font-bold tracking-tight text-primary-100 primary-font">Green Guide labels</h1>

                {/* line break */}
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>

                <p>This are your current active labels which are confirmed by the Green Guide Office.</p>

                <div class="mt-8 grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                    <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-50 text-white sm:shrink-0">
                            {/* <!-- Heroicon name: outline/globe-alt --> */}
                            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <div class="sm:min-w-0 sm:flex-1">
                            <p class="text-lg font-semibold leading-8 text-gray-900">Fairtrade products</p>
                            <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, explicabo aspernatur nisi cumque libero nihil eaque aliquid itaque ratione fugit rem, quod voluptatum quam dolorem pariatur hic velit, corporis nemo.</p>
                        </div>
                    </div>

                    <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-50 text-white sm:shrink-0">
                            {/* <!-- Heroicon name: outline/scale --> */}
                            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                            </svg>
                        </div>
                        <div class="sm:min-w-0 sm:flex-1">
                            <p class="text-lg font-semibold leading-8 text-gray-900">Social employment</p>
                            <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatibus voluptates fugit fuga possimus? Mollitia necessitatibus perspiciatis, deleniti eius quasi maxime temporibus debitis consectetur odio. Nostrum deserunt rem et dignissimos!</p>
                        </div>
                    </div>

                    <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-50 text-white sm:shrink-0">
                            {/* <!-- Heroicon name: outline/bolt --> */}
                            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                            </svg>
                        </div>
                        <div class="sm:min-w-0 sm:flex-1">
                            <p class="text-lg font-semibold leading-8 text-gray-900">Fair wages</p>
                            <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                        </div>
                    </div>

                    <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-50 text-white sm:shrink-0">
                                {/* <!-- Heroicon name: outline/device-phone-mobile --> */}
                                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                        </div>
                        <div class="sm:min-w-0 sm:flex-1">
                                <p class="text-lg font-semibold leading-8 text-gray-900">Accessibility</p>
                                <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                        </div>
                    </div>

                    <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-50 text-white sm:shrink-0">
                            {/* <!-- Heroicon name: outline/globe-alt --> */}
                            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <div class="sm:min-w-0 sm:flex-1">
                            <p class="text-lg font-semibold leading-8 text-gray-900">Renewable energy</p>
                            <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                        </div>
                    </div>

                    <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-50 text-white sm:shrink-0">
                            {/* <!-- Heroicon name: outline/scale --> */}
                            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                            </svg>
                        </div>
                        <div class="sm:min-w-0 sm:flex-1">
                                <p class="text-lg font-semibold leading-8 text-gray-900">Waste-free/low-waste</p>
                                <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                        </div>
                    </div>
                </div>

                {/* line break */}
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-8">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>

                {/* Green Guide Labels */}
                <section className="gg-labels">
                            <div className="grid grid-cols-4 gap-6">
                                <div className="md:col-span-2">
                                        <h2 className="pb-2 text-3xl font-bold tracking-tight text-secondary-100 primary-font">Register new labels</h2>
                                        <p className="mt-1 text-sm text-gray-600 max-w-md">Add new labels to your business profile and let them confirm by the Green Guide Office.</p>
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
                                                <div class="flex items-center mb-2">
                                                    <input id="default-checkbox-1" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" />
                                                    <label for="default-checkbox-1" class="ml-2 text-sm font-medium text-gray-900">Circular use of materials</label>
                                                </div>
                                                <div class="flex items-center mb-2">
                                                    <input id="default-checkbox-2" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" /> 
                                                    <label for="default-checkbox-2" class="ml-2 text-sm font-medium text-gray-900">Waste streams collected separately</label>
                                                </div>
                                                <div class="flex items-center mb-2">
                                                    <input id="default-checkbox-1" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" />
                                                    <label for="default-checkbox-1" class="ml-2 text-sm font-medium text-gray-900">Waste-free/low-waste</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="default-checkbox-2" type="checkbox" value="" name="default-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-white focus:ring-2" /> 
                                                    <label for="default-checkbox-2" class="ml-2 text-sm font-medium text-gray-900">Reuse of water/collection of rainwater</label>
                                                </div>
                                            </div>
                                        </Form>
                                        )}
                                    </Formik>
                        </div>
                    </div>
                </section>

                {/* Submit */}
                <section className="submit">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <div className="mt-8 p-8 bg-gray-100">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Submit registration request</h3>
                                <p className="mt-1 text-sm text-gray-600 max-w-lg">
                                Please check if all the information is correct and submit your registration request. You will get an email with a link to confirm your registration.
                                </p>
                                <button
                                    type="submit"
                                    // disabled={isSubmitting}
                                    className="mt-5 inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >Send request</button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    </div>
</div>
);
}

export default Labels;