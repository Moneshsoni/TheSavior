import { Layout } from "../components/layout/Layout.js"
import '../style/global.css';

export default function App({ Component, pageProps }, AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
