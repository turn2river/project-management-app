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
import { BoardPage } from '../BoardPage'

export const App = () => {
  // временный стейт для логина юзера
  const [loggedIn, setLoggedIn] = useState(false)
  const handleLogin = () => setLoggedIn(!loggedIn)

  const handleLogout = () => setLoggedIn(false)

  // типа токен просрочен черех 5 мин, выкидываем на логин
  setTimeout(() => setLoggedIn(false), 300000)
  console.log('logged in', loggedIn)

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Header
          isLoggedIn={loggedIn}
          handleLogout={handleLogout}
        />
        <Routes>
          {loggedIn
            ? (
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
          <Route
            path='/main/board/:id'
            element={<BoardPage />}
          />
        </Routes>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  )
}
