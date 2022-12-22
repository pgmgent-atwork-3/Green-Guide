import '../scss/main.scss';
import Navbar from '../components/Navbar';

function Settings() {

return (
    <div className="Dashboard">
        <div className="min-h-full">
            <Navbar type="dashboard"/>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <h1 className="text-4xl font-bold tracking-tight text-primary-100 primary-font">Settings</h1>

                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                        <div className="border-t border-gray-200" />
                        </div>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                            <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <form action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                <fieldset>
                                    <legend className="sr-only">By Email</legend>
                                    <div className="text-base font-medium text-gray-900" aria-hidden="true">
                                    By Email
                                    </div>
                                    <div className="mt-4 space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                        <input
                                            id="reviews"
                                            name="reviews"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="reviews" className="font-medium text-gray-700">
                                            Reviews
                                        </label>
                                        <p className="text-gray-500">Get notified when someones posts a review on your business.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                        <input
                                            id="rewards"
                                            name="rewards"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="rewards" className="font-medium text-gray-700">
                                            Rewards
                                        </label>
                                        <p className="text-gray-500">Get notified when a client claims a reward.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                        <input
                                            id="offers"
                                            name="offers"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        </div>
                                        <div className="ml-3 text-sm">
                                        <label htmlFor="offers" className="font-medium text-gray-700">
                                            Offers
                                        </label>
                                        <p className="text-gray-500">Get notified when their are offers available.</p>
                                        </div>
                                    </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
                                    <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                    <div className="mt-4 space-y-4">
                                    <div className="flex items-center">
                                        <input
                                        id="push-everything"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                        Everything
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                        id="push-email"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                        Same as email
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                        id="push-nothing"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                        No push notifications
                                        </label>
                                    </div>
                                    </div>
                                </fieldset>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Save
                                </button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </div>
    </div>
);}

export default Settings;



