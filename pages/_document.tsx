import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico"></link>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
          <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
