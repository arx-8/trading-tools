import "normalize.css"

import { AppProps } from "next/app"
import { Fragment } from "react"

// eslint-disable-next-line import/no-default-export
export default function ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Fragment>
      <Component {...pageProps} />

      <style global jsx>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Fragment>
  )
}
