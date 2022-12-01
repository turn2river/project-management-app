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

import { db, auth } from '../../firebase_config'
import { collection, getDocs, addDoc } from '@firebase/firestore'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { getDatabase } from "firebase/database"

const database = getDatabase()
console.log(database)

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
  // @ts-expect-error f u
  console.log('logged user', user?.email)

  // const [newName, setNewName] = useState('')
  // const [newAge, setNewAge] = useState('')

  // const createUser = async () => {
  //   await addDoc(usersCollectionRef, {name: newName, age: newAge})
  // }

  const [team, setTeam] = useState([])
  const teamCollectionRef = collection(db, 'team')

  useEffect(() => {
    const getTeam = async () => {
      const data = await getDocs(teamCollectionRef)
      console.log("дата", data.docs)
      // @ts-expect-error type it
      setTeam(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      console.log("team", team)
    }

    if (team.length === 0) getTeam()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log("team", team)

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
