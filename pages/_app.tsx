import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import * as React from 'react';
// import { UserProvider } from '@auth0/nextjs-auth0/client';

const tt_expbold = localFont({
  src: '../public/fonts/tt_expbold.ttf',
  variable: '--tt_expbold'
});
const tt_reg = localFont({
  src: '../public/fonts/tt_reg.ttf',
  variable: '--tt_reg'
});


export default function MyApp({ Component, pageProps }: AppProps) {
  // Set the CSS variable on <body> to ensure Plasmic Studio has access to the variable.
  React.useEffect(() => {
    document.body.classList.add(tt_expbold.variable);
    document.body.classList.add(tt_reg.variable);
  }, []);
  return (<Component {...pageProps} />)
}