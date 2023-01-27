import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import React from "react";
import VolumeContextProvider from "../components/VolumeContext";

function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement<AppProps> {
  return (
    <>
      <Head>
        {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
        <link rel="shortcut icon" href="/favicon.ico" />
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Toaster />
     <ThemeProvider enableSystem={true} attribute="class">
        <VolumeContextProvider>
          <Component {...pageProps} />
        </VolumeContextProvider>
    </ThemeProvider>
    </>
      );
    }

    export default MyApp;