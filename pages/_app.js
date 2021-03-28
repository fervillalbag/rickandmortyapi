
import '../sass/main.scss'
import { ApolloProvider } from '@apollo/client'
import client from '../config/client'

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider
      client={client}
    >
      <Component {...pageProps} />
    </ApolloProvider>
  )
}