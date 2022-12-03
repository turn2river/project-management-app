import { useState, useEffect } from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'

import { db } from '../../firebase_config'
import { collection, getDocs } from '@firebase/firestore'

import { TeamMember } from './TeamMember'

import {
  PageContainer,
  TeamLabel,
  TeamLogo,
  TeamBlock,
  MembersList,
} from './styled'

// const [newName, setNewName] = useState('')
// const [newAge, setNewAge] = useState('')

// const createUser = async () => {
//   await addDoc(usersCollectionRef, {name: newName, age: newAge})
// }

export const TeamPage = () => {
  const [team, setTeam] = useState([])
  const teamCollectionRef = collection(db, 'team')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getTeam = async () => {
      const data = await getDocs(teamCollectionRef)
      // @ts-expect-error type it
      setTeam(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    if (team.length === 0) {
      getTeam().then(() =>
        setTimeout(() => {
          setLoading(true)
        }, 1000)
      )
    }
  }, [])

  return (
    <PageContainer>
      <TeamBlock>
        <TeamLogo src='/assets/head_logo.svg' />
        <TeamLabel>
        MONKEY TEAM
        </TeamLabel>
      </TeamBlock>
      <MembersList>
        {loading ? (
          team.map((member, idx) =>
            <TeamMember key={member + idx} data={member} />
          )
        ) : (
          <PacmanLoader
            color={'#7B61FF'}
            size={40}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        )}
      </MembersList>
    </PageContainer>
  )
}

