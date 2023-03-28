import '../styles/globals.css'
import '../styles/page.css'

import type { AppProps } from 'next/app'
import React from 'react'
import Seo from '@/components/Seo'
import { ThemeProvider } from 'next-themes'
import { AppStateProvider } from '@/context/AppStateProvider'

function MyApp({
  Component,
  pageProps
}: AppProps): React.ReactElement<AppProps> {
  return (
    <>
      <AppStateProvider>
        <Seo />
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </AppStateProvider>
    </>
  )
}

export default MyApp
