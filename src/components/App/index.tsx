import { useEffect, useState } from 'react'

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

import { db } from '../../firebase_config'
import { collection, getDocs, addDoc } from '@firebase/firestore'

export const App = () => {
  // временный стейт для логина юзера
  const [loggedIn, setLoggedIn] = useState(false)
  const handleLogin = () => setLoggedIn(!loggedIn)

  const handleLogout = () => setLoggedIn(false)

  // типа токен просрочен черех 5 мин, выкидываем на логин
  setTimeout(() => setLoggedIn(false), 300000)
  console.log('logged in', loggedIn)

  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState('')

  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, 'users')

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, age: newAge})
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      // @ts-expect-error type it
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getUsers()
  }, [usersCollectionRef])

  console.log(users)
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Header
          isLoggedIn={loggedIn}
          handleLogout={handleLogout}
        />
        <input
          placeholder='name'
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          placeholder='age'
          onChange={(e) => setNewAge(e.target.value)}
        />
        <button onClick={createUser}>create user</button>
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
          <Route path="/main/board/:id" element={<BoardPage />} />
        </Routes>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  )
}

