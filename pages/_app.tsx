import GlobalLayout from '@/components/layout/global/GlobalLayout';
import Header from '@/components/layout/navigation/Header';
import GlobalProviders from '@/context/GlobalProviders';
import LayoutInnerProviders from '@/context/LayoutInnerProviders';
import '@/styles/globals.scss'
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import Link from 'next/link';
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }: AppProps) {

  const { asPath: id } = useRouter();

  return <GlobalProviders>
    <GlobalLayout>
      <LayoutInnerProviders>
        <Component 
          key={id} 
          {...pageProps} 
        />
      </LayoutInnerProviders>
    </GlobalLayout>
  </GlobalProviders>
  
}
