import '../scss/main.scss';
import Navbar from '../components/Navbar';

function Notifications() {
    return (
        <div className="Notifications">
        <>
        <div className="min-h-full">

        <Navbar type="dashboard"/>

            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

                    {/* Replace with your content */}
                    <h1 className="pb-6 text-4xl font-bold tracking-tight text-primary-100 primary-font">Notifications</h1>
                    
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Subject title</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Subject title</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Subject title</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Subject title</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Subject title</dd>
                            </div>
                        </dl>
                    </div>

                    {/* /End replace */}

                </div>
            </main>
        </div>
        </>
        </div>
    );
}

export default Notifications;