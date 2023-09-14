import GlobalLayout from '@/components/layout/global/GlobalLayout';
import GlobalProviders from '@/context/GlobalProviders';
import LayoutInnerProviders from '@/context/LayoutInnerProviders';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import "@/components/partials/content/Magnifier.scss";
import "@fontsource/ibm-plex-sans";
import "@fontsource/ibm-plex-sans/400-italic.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/700.css";

export default function App({ Component, pageProps }: AppProps) {

  const { asPath: id } = useRouter();

  return <GlobalProviders>
    <GlobalLayout>
      <div style={{position: "relative", width: "100%"}}>
      <LayoutInnerProviders>
        <Component 
          key={id} 
          {...pageProps} 
        />
      </LayoutInnerProviders>
      </div>
    </GlobalLayout>
  </GlobalProviders>
  
}
