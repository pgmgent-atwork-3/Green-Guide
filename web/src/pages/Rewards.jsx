import '../scss/main.scss';

import Form from '../components/Form';
import Navbar from '../components/Navbar';

function Rewards() {
    return (
        <div className="Rewards">
        
            <div className="min-h-full">
                
            <Navbar type="dashboard"/>

                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <h1 className="pb-6 text-4xl font-bold tracking-tight text-primary-100 primary-font">Reward system</h1>
                    <hr />

                    <Form></Form>

                    {/* /End replace */}
                    </div>
                </main>
            </div>
        
        </div>
    );
}

export default Rewards;