import '../scss/main.scss';

import Navbar from '../components/Navbar';

function Labels() {
    return (
        <div className="Labels">
        <>
        <div className="min-h-full">

        <Navbar type="dashboard"/>

            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

                    {/* Replace with your content */}
                    <h1 className="pb-6 text-4xl font-bold tracking-tight text-primary-100 primary-font">Green Guide labels</h1>
                    <hr />

                    {/* /End replace */}

                </div>
            </main>
        </div>
        </>
        </div>
    );
}

export default Labels;