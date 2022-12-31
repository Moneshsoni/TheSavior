import { Layout } from "../components/layout/Layout.js"

export default function App({ Component, pageProps }, AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
