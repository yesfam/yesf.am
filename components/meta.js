import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <meta name="theme-color" content="#000" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <meta
        name="description"
        content={`This domain is dedicated to the open cause of the YesFam.`}
      />
    </Head>
  )
}
