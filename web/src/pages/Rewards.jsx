import '../scss/main.scss';
import Navbar from '../components/Navbar';

function Rewards() {
    return (
        <div className="Rewards">
        
            <div className="min-h-full">
                
            <Navbar type="dashboard"/>

                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <h1 className="text-4xl font-bold tracking-tight text-primary-100 primary-font">Reward system</h1>
                    
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>

                    <div>
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="mt-4 px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Point system</h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Here you can manually set your point system.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:col-span-2 md:mt-0">
                                <form action="#" method="POST">
                                <div className="shadow sm:overflow-hidden sm:rounded-md">
                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-3 gap-6">
                                            <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                                Name
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <input
                                                type="text"
                                                name="company-website"
                                                id="company-website"
                                                className="p-3 block w-full flex-1 rounded-none rounded-r-md bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Example"
                                                />
                                            </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            Description
                                            </label>
                                            <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="This is a reward for..."
                                                defaultValue={''}
                                            />
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">
                                            Brief description for your reward.
                                            </p>
                                        </div>


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
                            <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                                <h1 className="text-4xl font-bold tracking-tight text-primary-100 primary-font">Current rewards</h1>
                                <p className="pb-8 mt-1 text-sm text-gray-600">
                                    This are all the rewards you have created and are visible in the app.
                                </p>
                                <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                                    <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-50 text-white sm:shrink-0">
                                            {/* <!-- Heroicon name: outline/globe-alt --> */}
                                            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                            </svg>
                                        </div>
                                        <div class="sm:min-w-0 sm:flex-1">
                                            <p class="text-lg font-semibold leading-8 text-gray-900">Free tote bag</p>
                                            <p class="mt-2 text-base leading-7 text-gray-600">You can choose a free tote bag the next time you visit us!</p>
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
                                            <p class="text-lg font-semibold leading-8 text-gray-900">Free drink</p>
                                            <p class="mt-2 text-base leading-7 text-gray-600">You can choose a free drink from our menu the next time you visit us! Max price limit is €10.</p>
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
                                            <p class="text-lg font-semibold leading-8 text-gray-900">Transfers are instant</p>
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
                                                <p class="text-lg font-semibold leading-8 text-gray-900">Mobile notifications</p>
                                                <p class="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>

                    <div>
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="mt-4 px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Rewards</h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Here you can manually set your rewards.
                                    </p>
                                </div>
                            </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <form action="#" method="POST">
                            <div className="shadow sm:overflow-hidden sm:rounded-md">
                                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                            type="text"
                                            name="company-website"
                                            id="company-website"
                                            className="p-3 block w-full flex-1 rounded-none rounded-r-md bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Example"
                                            />
                                        </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        Description
                                        </label>
                                        <div className="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="This is a reward for..."
                                            defaultValue={''}
                                        />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">
                                        Brief description for your reward.
                                        </p>
                                    </div>


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
    );
}

export default Rewards;