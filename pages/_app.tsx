import type { AppProps } from 'next/app'

import '../fonts/JetBrains Sans Medium.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default CustomApp
