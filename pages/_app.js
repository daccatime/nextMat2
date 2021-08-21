import '../styles/globals.css';
import '../styles/Styles.css';
import Layout from './src/Layout'
function MyApp({ Component, pageProps }) {
  return <Layout>
  <Component {...pageProps} /></Layout>
}

export default MyApp
