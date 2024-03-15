import { CoffeeProvider } from '../context/CoffeeProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CoffeeProvider>
      <Component {...pageProps} />
    </CoffeeProvider>
  )
}

export default MyApp
