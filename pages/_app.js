import '../styles/globals.css'
import { CoffeeProvider } from './context/CoffeeProvider'

function MyApp({ Component, pageProps }) {
  return (
    <CoffeeProvider>
      <Component {...pageProps} />
    </CoffeeProvider>
  )
}

export default MyApp
