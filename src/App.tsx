/* eslint-disable react/react-in-jsx-scope */

import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { OrderContextProvider } from './contexts'

export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <OrderContextProvider>
        <Router/>
      </OrderContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}