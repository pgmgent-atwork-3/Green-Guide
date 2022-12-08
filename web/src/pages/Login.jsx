import Form from '../components/Form';
import '../scss/main.scss';

function Login() {


    return (
        <div className="Login bg-25">
            <div className="min-h-full">
                <main>
                    <div className="mx-auto max-w-7xl py-36 sm:px-20 lg:px-40">
                        
                        {/* Main content */}

                        <h1 className="pb-6 text-4xl font-bold tracking-tight text-primary-100 primary-font">Login</h1>

                        <Form></Form>

                        {/* End Main content */}
                        
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Login;