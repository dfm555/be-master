import Head from 'next/head'

import { CharacterProvider } from 'context/characterContext'

import Layout from 'components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CharacterProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CharacterProvider>
    </>
  )
}

export default MyApp
