import Script from 'next/script'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const GA_TRACKING_ID = '...'

function GoogleAnalytics() {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = url => {
          window.gtag('config', GA_TRACKING_ID, { page_path: url })
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange)
        }
      }, [router.events])
    return ( 
        <React.Fragment>
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `
          }}
        />
      </React.Fragment>
     );
}

export default GoogleAnalytics ;

