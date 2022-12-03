import { useState, useEffect } from 'react'

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

import { auth } from '../../firebase_config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { getDatabase } from "firebase/database"

const database = getDatabase()

export const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      // @ts-expect-error f u
      setUser(currentUser)
    })
  }, [])

  const logoutUser = async () => {
    await signOut(auth)
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Header
          isLoggedIn={user}
          handleLogout={logoutUser}
        />
        <Routes>
          {user
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
            element={<WellcomePage />}
          />
          <Route
            path='main'
            element={<MainPage />}
          />
          <Route
            path='/team'
            element={<TeamPage />}
          />
          <Route path='/main/board/:id' element={<BoardPage />} />
        </Routes>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  )
}
