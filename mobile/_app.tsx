// import '../src/scss/main.scss'
import styles from '../styles/Home.module.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
