import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { Session } from "next-auth";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { SessionProvider } from 'next-auth/react';
import { trpc } from '../utils/trpc';
import React from "react";
import VolumeContextProvider from "../context/VolumeContext";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
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
      <ToastContainer />
       <SessionProvider session={pageProps.session}>
        <VolumeContextProvider>
          <Component {...pageProps} />
        </VolumeContextProvider>
      </SessionProvider>
    </ThemeProvider>
    </>

      );
    }

export default trpc.withTRPC(MyApp);
