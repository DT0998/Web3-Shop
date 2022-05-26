import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout/layout';
import {MetamaskProvider} from '../store';

function MyApp({ Component, pageProps }) {
  
  return(
    <MetamaskProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </MetamaskProvider>
    ) 
}

export default MyApp
