import { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import { AppContainer } from './styled'
import { GlobalStyle } from '../../globalStyles'

import { Header } from '../Header'
import { Footer } from '../Footer'
import { WellcomePage } from '../WellcomePage'
import { MainPage } from '../MainPage'
import { TeamPage } from '../TeamPage'

export const App = () => {
  // временный стейт для логина юзера
  const [loggedIn, setLoggedIn] = useState(false)
  const handleLogin = () => {
    setLoggedIn(!loggedIn)
  }

  console.log('logged in', loggedIn)

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Header isLoggedIn={loggedIn} />
        <Routes>
          {loggedIn ? (
            <Route
              path='/'
              element={<Navigate to='main' />}
            />
          )
            : (
              <Route
                path='main'
                element={<Navigate to='/' />}
              />
            )
          }
          <Route
            path='/'
            element={<WellcomePage handleLogin={handleLogin}/>}
          />
          <Route
            path='main'
            element={<MainPage />}
          />
          <Route
            path='/team'
            element={<TeamPage />}
          />
        </Routes>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  )
}
