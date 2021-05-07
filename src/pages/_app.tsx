import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'

import theme from '../styles/themes/dark'
import { ThemeProvider } from 'styled-components'

import { Header } from '../components/Header'



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (

    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />

      <Header />
    </ThemeProvider>

  )
}

export default MyApp

