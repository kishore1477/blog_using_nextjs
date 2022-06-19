import '../styles/globals.css'
import Navbar from '../components/Navbar'


function MyApp({ Component, pageProps }) {
  console.log("This is app")
  return <>
  <Navbar/>
<Component {...pageProps} />
  </>
  
}

export default MyApp
