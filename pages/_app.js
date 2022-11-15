import '../styles/globals.css'
import Script from 'next/script'
import DataState from '../Context/dataState'


function MyApp({ Component, pageProps }) {
  return <>
  <DataState>

  <Component {...pageProps} />

  </DataState>

     
  </>
}

export default MyApp
