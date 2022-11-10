import Layout from "../componants/Layout";
import "/style/global.scss";


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

