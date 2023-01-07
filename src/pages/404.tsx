import Link from 'next/link';
import * as React from 'react';

import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <svg viewBox='0 0 24 24'
              className='w-24 h-24 text-gray-500'>
              <path fill='currentColor' d='M12,2C6.5,2 2,6.5 2,12C2,17.5 6.5,22 12,22C17.5,22 22,17.5 22,12C22,6.5 17.5,2 12,2M12,20C7.6,20 4,16.4 4,12C4,7.6 7.6,4 12,4C16.4,4 20,7.6 20,12C20,16.4 16.4,20 12,20M12,6C10.3,6 9,7.3 9,9C9,10.7 10.3,12 12,12C13.7,12 15,10.7 15,9C15,7.3 13.7,6 12,6M12,14C9.8,14 8,15.8 8,18C8,20.2 9.8,22 12,22C14.2,22 16,20.2 16,18C16,15.8 14.2,14 12,14Z' /> 
            </svg>
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
            <Link className='mt-4 md:text-lg' href='/'>
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
