import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { AppContainer } from './styled'
import { GlobalStyle } from '../../globalStyles'

import { Header } from '../Header'
import { Footer } from '../Footer'
import { WellcomePage } from '../WellcomePage'
import { MainPage } from '../MainPage'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<WellcomePage />}
          />
          <Route
            path="/main"
            element={<MainPage />}
          />
        </Routes>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  )
}
