import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout/layout';
import {MetamaskProvider} from '../store';
import GoogleAnalytics from './GoogleAnalytics';

function MyApp({ Component, pageProps }) {
  
  return(
    <MetamaskProvider>
    <Layout>
      <Component {...pageProps} />
      {
        process.env.NODE_ENV === 'production' &&
          <GoogleAnalytics />
      }
    </Layout>
    </MetamaskProvider>
    ) 
}

export default MyApp
