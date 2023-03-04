import Head from 'next/head'

export default function auth() {
  return (
    <>
      <Head>
        <title>Auth</title>
        <meta name="description" content="For watching movies you should sign to app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello Auth</h1>
    </>
  )
}
