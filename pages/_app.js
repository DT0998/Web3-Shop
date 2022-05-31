import '../styles/globals.css'
import {MetamaskProvider} from '../store';
import Layout from '../Layout/layout';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init()
  }, [])
  
  return(
    <MetamaskProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </MetamaskProvider>
    ) 
}

export default MyApp
