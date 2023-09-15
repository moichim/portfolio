import GlobalLayout from '@/components/layout/global/GlobalLayout';
import GlobalProviders from '@/context/GlobalProviders';
import LayoutInnerProviders from '@/context/LayoutInnerProviders';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Router, useRouter } from 'next/router';

import "@/components/partials/content/Magnifier.scss";
import "@fontsource/ibm-plex-sans";
import "@fontsource/ibm-plex-sans/400-italic.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/700.css";

import PageTransition, { useAsPathWithoutHash } from '@madeinhaus/nextjs-page-transition';


export default function App({ Component, pageProps, router }: AppProps) {

  // const key = router.asPath;
  const key = useAsPathWithoutHash();

  const type = Component.displayName;
  console.log( Component );

  

  return <GlobalProviders>
    <GlobalLayout>
      
      <LayoutInnerProviders>
          <Component 
            key={key} 
            {...pageProps} 
          />
      </LayoutInnerProviders>
    </GlobalLayout>
  </GlobalProviders>
  
  
}
