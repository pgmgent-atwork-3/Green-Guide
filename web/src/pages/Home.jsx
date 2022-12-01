import Navbar from '../components/Navbar';
import '../scss/main.scss';

function Dashboard() {
    return (
        <div className="Dashboard">
        <>
        <div className="min-h-full">
            <Navbar />

            <main>
                <div className="mx-auto max-w-7xl py-36 sm:px-6 lg:px-8">
                
                {/* Main content */}

                <div className="sm:grid-cols-1">
                    <div id="about" className="md:grid-cols-2 mb-40 p-2 grid gap-2 ">
                        <div className="m-auto px-12">
                            <h1 className="pb-8 text-5xl font-bold tracking-tight text-primary-100 primary-font">About Green Guide</h1>
                            <p class="pb-4">Green Guide is your green guide through Ghent. The only, real way to finally discover all those sustainable and environmentally conscious addresses in Ghent. </p> 
                            <p class="pb-4 font-bold text-secondary-100">Together we can further develop our city into a truly green environment!</p> 
                            <p class="pb-4">This project is also a beautiful reflection of the unique cooperation between all higher education institutions in Ghent, a truly unique project that has brought together many hemispheres.</p>
                        </div>
                        <div>
                            <img
                                className="bg-cover h-168 w-184"
                                src="./images/mockup-1.png"
                                alt="Green Guide App"
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:grid-cols-1">
                    <div id="download" className="md:grid-cols-2 mb-48 p-2 grid gap-2 bg-25 rounded-xl">
                        <div className="my-auto">
                            <img
                                className="px-10 pt-10 pb-4 mx-auto bg-cover h-168 w-184"
                                src="./images/qr-code.svg"
                                alt="Green Guide App Qr code"
                            />
                            <h3 className="ml-28 text-4xl font-bold tracking-tight text-accent-100 primary-font">Scan this code!</h3>
                        </div>
                        <div className="m-auto p-20">
                            <h2 className="pb-8 text-5xl font-bold tracking-tight text-secondary-100 primary-font">Download the app</h2>
                            <p className="pb-4">Together, we will explore the hidden, green addresses in Ghent and give them all a hand. And this is where the Green Guide app will give you a hand!</p>
                            <p className="pb-4">Not only will you be able to discover green shops and restaurants, more so after your visit, you will also be able to earn points at each participating company. By doing so, we give you the chance to make your sustainable life, an affordable one.</p>
                            <p className="pb-4 font-bold text-primary-100">Take your first step towards a more sustainable life now and download the app in no time!</p>
                        </div>
                    </div>
                </div>

                <div className="sm:grid-cols-1">
                    <div id="business" className="md:grid-cols-2 mb-40 p-2 grid gap-2">
                        <div className="m-auto px-12">
                            <h2 className="pb-8 text-5xl font-bold tracking-tight text-primary-100 primary-font">For your business</h2>
                            <p class="pb-4">The Green Guide is suitable for any company within Ghent that is committed to a greener living environment.</p> 
                            <p class="pb-4">Together we want to give these companies a helping hand and inform everyone that they are taking a step in the right direction. And this becomes visible thanks to the Green Guide label, to which every participating company is entitled.</p> 
                            <p class="pb-4">If you would like to be part of this, you can simply register below. If you meet all the participating criteria, you will soon also be among the sustainable addresses.</p>
                            <p class="pb-4 font-bold text-secondary-100">We look forward to welcoming you to our green guide.</p>
                        </div>
                        <div>
                            <img
                                className="bg-cover h-168 w-184"
                                src="./images/mockup-1.png"
                                alt="Green Guide App"
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:grid-cols-1">
                    <div id="contact" className="md:grid-cols-2 mb-48 p-2 grid gap-2 bg-secondary-100 rounded-xl">
                        <div className="m-auto p-20">
                            <h2 className="pb-8 text-5xl font-bold tracking-tight text-primary-100 primary-font">Contact us</h2>
                            <p className="pb-4 text-white">Is anything unclear or have you come across any bugs or problems in the app? Let us know!</p>
                        </div>
                        
                        <div className="p-20 py-auto grid grid-cols-3 gap-6">
                            <div className="col-span-4 sm:col-span-3">
                                <label htmlFor="company-website" className="block text-sm font-medium text-white">
                                    Your e-mail
                                </label>
                                <div className="mb-6 mt-1 flex rounded shadow-sm">
                                    <input
                                    type="text"
                                    name="company-website"
                                    id="company-website"
                                    className="p-3 block w-full flex-1 rounded bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Example@website.be"
                                    />
                                </div>

                                <label htmlFor="company-website" className="block text-sm font-medium text-white">
                                    Your subject
                                </label>
                                <div className="mb-6 mt-1 flex rounded shadow-sm">
                                    <input
                                    type="text"
                                    name="company-website"
                                    id="company-website"
                                    className="p-3 block w-full flex-1 rounded bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="I have a question about..."
                                    />
                                </div>

                                <label htmlFor="about" className="block text-sm font-medium text-white">
                                Your message
                                </label>
                                <div className="mt-1">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="p-3 mt-1 block w-full rounded-md bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Hello, I have a question regarding the Green Guide app..."
                                    defaultValue={''}
                                />
                                </div>
                            </div>
                            
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                <div className="sm:grid-cols-1">
                    <div id="contact" className="md:grid-cols-1">
                    <img
                        className="h-500 w-1000 mx-auto"
                        src="./images/credits.svg"
                        alt="Green Guide App Qr code"
                    />
                    </div>
                </div>

                {/* End Main content */}
            </div>
            </main>
        </div>
        </>
        </div>
    );
}

export default Dashboard;