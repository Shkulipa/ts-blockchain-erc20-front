import type { AppProps } from 'next/app';
import { TsxsProvider } from '../store/contexts/tsxs.context';
import { GlobalStyles } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TsxsProvider>
      <GlobalStyles />

      <Component {...pageProps} />
    </TsxsProvider>
  );
}

export default MyApp
