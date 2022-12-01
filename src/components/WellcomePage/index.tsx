import {
  BaseSyntheticEvent,
  useState
} from 'react'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import { auth } from '../../firebase_config'

import {
  PageContainer,
  MainTitle,
  Logo,
  Header,
  SubHeader,
  HeaderColor,
  DescriptionHead,
  AuthBlock,
  InputField,
  SignInButton,
  BreadCrumbs,
  SignUpNow,
  InputBlock,
  IconVisibility,
  ErrorMessage,
} from './styled'

export const WellcomePage = () => {

  const [inputType, setInputType] = useState(false)
  const [iconType, setIconType] = useState(true)

  const toggleShowPassword = () => {
    setInputType(!inputType)
    if (loginPassword !== '' || registerPassword !== '') {
      setIconType(!iconType)
    }
  }

  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [error, setError] = useState('')
  const [showRegister, setShowRegister] = useState(false)

  const registerUser = async (e: BaseSyntheticEvent) => {
    e.preventDefault()
    setError('')
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
      )
      console.log('user', user.user.displayName)
    } catch (error) {
      // @ts-expect-error f u
      setError(error.code.substr(5))
    }
  }

  const loginUser = async (e: BaseSyntheticEvent) => {
    e.preventDefault()
    setError('')
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      console.log('user', user)
    } catch (error) {
      // @ts-expect-error f u
      setError(error.code.substr(5))
    }
  }

  return (
    <PageContainer>
      <MainTitle>
        <Logo />
        <Header>
        WELCOME TO
        </Header>
        <HeaderColor>
        MONKEY
        </HeaderColor>
        <SubHeader>
        monkeyjob has never been so SIMPLE
        </SubHeader>
      </MainTitle>
      <DescriptionHead>
      A project management application<br/>
      to improve your workflow.
      </DescriptionHead>

      {/* login block */}
      {!showRegister && (
        <AuthBlock onSubmit={loginUser}>
          <ErrorMessage>{error}</ErrorMessage>
          <InputField
            type='email'
            placeholder='email'
            onChange={(e) => setLoginEmail(e.target.value)}
            required={true}
            autoComplete='off'
          />
          <InputBlock>
            <InputField
              type={inputType ? 'text' : 'password'}
              placeholder='password'
              onChange={(e) => setLoginPassword(e.target.value)}
              required
              autoComplete='off'
            />
            <IconVisibility
              onClick={toggleShowPassword}
              isVisible={loginPassword !== ''}
              iconType={iconType}
            />
          </InputBlock>
          <SignInButton
            type='submit'
            disabled={loginEmail === '' || loginPassword === ''}
          >
            <span>sign in</span>
          </SignInButton>
          <BreadCrumbs>Don&#8217;t have an account?</BreadCrumbs>
          <SignUpNow
            onClick={() => setShowRegister(true)}
          >
            Sign up now
          </SignUpNow>
        </AuthBlock>
      )}

      {/* reg block */}
      { showRegister && (
        <AuthBlock onSubmit={registerUser}>
          <ErrorMessage>{error}</ErrorMessage>
          <InputField
            placeholder='email'
            type='email'
            onChange={(e) => setRegisterEmail(e.target.value)}
            autoComplete='off'
            required
          />
          <InputBlock>
            <InputField
              type={inputType ? 'text' : 'password'}
              placeholder='password'
              onChange={(e) => setRegisterPassword(e.target.value)}
              required
              autoComplete='off'
            />
            <IconVisibility
              onClick={toggleShowPassword}
              isVisible={registerPassword !== ''}
              iconType={iconType}
            />
          </InputBlock>
          <SignInButton
            type='submit'
            disabled={registerEmail === '' || registerPassword === ''}
          >
            <span>register</span>
          </SignInButton>
        </AuthBlock>
      )}

    </PageContainer>
  )
}
