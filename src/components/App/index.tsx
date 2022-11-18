import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { GlobalStyle } from '../../globalStyles'

import { Header } from '../Header'
import { Footer } from '../Footer'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path="/"
          // element={}>
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
