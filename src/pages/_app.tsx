import '../styles/globals.css'
import '../styles/page.css'

import type { AppProps } from 'next/app'
import React from 'react'
import Seo from '@/components/Seo'
import { ThemeProvider } from 'next-themes'

function MyApp({
  Component,
  pageProps
}: AppProps): React.ReactElement<AppProps> {
  return (
    <>
      <Seo />
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
