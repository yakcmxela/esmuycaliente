import { Fragment } from "react"
import App from "next/app"
import FirebaseProvider from "utils/Firebase"
import Head from "next/head"

class Caliente extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <Head>
          <title>Caliente</title>
        </Head>
        <FirebaseProvider>
          <Component {...pageProps} />
        </FirebaseProvider>
      </Fragment>
    )
  }
}

export default Caliente
