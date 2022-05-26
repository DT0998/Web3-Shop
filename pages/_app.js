import '../styles/globals.css'
import {MetamaskProvider} from '../store';
import Layout from '../Layout/layout';

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
