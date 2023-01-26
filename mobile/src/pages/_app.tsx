import type { AppProps } from 'next/app'
import '../../styles/base/reset.scss';
import Navbar from '../components/Navbar';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <Component {...pageProps} />
            {/* 
                Add this line to show the navbar on every page, without loading it on every page
                <Navbar /> 
            */}
        </div>
    );
}

export default App;