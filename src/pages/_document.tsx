import Document, { Head, Html, Main, NextScript } from "next/document"

// eslint-disable-next-line import/no-default-export
export default class extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja-JP">
        <Head>
          <meta content="trading-tools" name="application-name" />
          <meta content="my trading tools" name="description" />
          <meta content="telephone=no" name="format-detection" />
          <meta content="yes" name="mobile-web-app-capable" />
          <meta content="#2B5797" name="msapplication-TileColor" />
          <meta content="no" name="msapplication-tap-highlight" />
          <meta content="#000000" name="theme-color" />
          <meta
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
            name="viewport"
          />
          <link href="/manifest.json" rel="manifest" />
          <link href="/icons/favicon.ico" rel="shortcut icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
