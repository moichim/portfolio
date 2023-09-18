import GlobalLayout from '@/components/layout/global/GlobalLayout';
import GlobalProviders from '@/context/GlobalProviders';
import LayoutInnerProviders from '@/context/LayoutInnerProviders';

import type { AppProps } from 'next/app';

import "@fontsource/ibm-plex-sans";
import "@fontsource/ibm-plex-sans/500-italic.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";

import '@/styles/globals.scss';
import "@/components/content/Magnifier.scss";

import { useAsPathWithoutHash } from '@madeinhaus/nextjs-page-transition';


export default function App({ Component, pageProps, router }: AppProps) {

  const key = useAsPathWithoutHash();  

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
