import Navbar from '../components/Navbar';
import '../scss/main.scss';

function Dashboard() {
    return (
        <div className="Dashboard">
        <>
        <div className="min-h-full">
            <Navbar />

            <main>
                <div className="mx-auto max-w-7xl py-20 sm:px-6 lg:px-8">
                
                {/* Main content */}

                <div className="sm:grid-cols-1">
                    <div className="md:grid-cols-2 mb-20 p-2 grid gap-2 ">
                        <div className="m-auto px-12">
                            <h1 className="pb-8 text-5xl font-bold tracking-tight text-primary-100 primary-font">About Green Guide</h1>
                            <p class="pb-4">Green Guide is your green guide through Ghent. The only, real way to finally discover all those sustainable and environmentally conscious addresses in Ghent. </p> 
                            <p class="pb-4">Together we can further develop our city into a truly green environment!</p> 
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
                    <div className="md:grid-cols-2 mb-40 p-2 grid gap-2 bg-25 rounded-xl">
                        <div className="my-auto">
                            <img
                                className="p-20 mx-auto bg-cover h-168 w-184"
                                src="./images/qr-code.svg"
                                alt="Green Guide App Qr code"
                            />
                        </div>
                        <div className="m-auto p-20">
                            <h1 className="pb-8 text-5xl font-bold tracking-tight text-secondary-100 primary-font">Download the app</h1>
                            <p class="pb-4">Together we will explore the hidden, green addresses in Ghent to discover and we will all lend a hand to help. The Green Guide app will help you with this!</p>
                            <p class="pb-4">You will not only be able to discover the green addresses, even more after your visit you will also be able to earn points for every interrupted company. As a result, we have given you the opportunity to turn your sustainable life into an affordable one.</p>

                            <p class="pb-4"> Take your first step towards a more sustainable life and download the app in no time!</p>
                        </div>
                    </div>
                </div>

                <div className="sm:grid-cols-1">
                    <div className="md:grid-cols-2 mb-40 p-2 grid gap-2">
                        <div className="m-auto px-12">
                            <h1 className="pb-8 text-5xl font-bold tracking-tight text-primary-100 primary-font">For your business</h1>
                            <p class="pb-4">The Green Guide is suitable for any company within Ghent that is committed to a greener living environment.</p> 
                            <p class="pb-4">Together we want to give these companies a helping hand and inform everyone that they are taking a step in the right direction. And this becomes visible thanks to the Green Guide label, to which every participating company is entitled.</p> 
                            <p class="pb-4">If you would like to be part of this, you can simply register below. If you meet all the participating criteria, you will soon also be among the sustainable addresses.</p>
                            <p class="pb-4 font-bold">We look forward to welcoming you to our green guide.</p>
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



                {/* End Main content */}
            </div>
            </main>
        </div>
        </>
        </div>
    );
}

export default Dashboard;