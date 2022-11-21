import { BaseSyntheticEvent, useState } from 'react'

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
} from './styled'

export const WellcomePage = () => {

  const [inputType, setInputType] = useState(false)
  const [iconType, setIconType] = useState(true)
  const [passwordValue, setPasswordValue] = useState('')

  const handlePassword = (e: BaseSyntheticEvent) => {
    setPasswordValue(e.target.value)
  }

  const toggleShowPassword = () => {
    setInputType(!inputType)
    if (passwordValue !== '') {
      setIconType(!iconType)
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
      <AuthBlock>
        <InputField placeholder='login'/>
        <InputBlock>
          <InputField
            type={inputType ? 'text' : 'password'}
            placeholder='password'
            value={passwordValue}
            onChange={(e) => handlePassword(e)}
          />
          <IconVisibility
            onClick={toggleShowPassword}
            isVisible={passwordValue !== ''}
            iconType={iconType}
          />
        </InputBlock>
        <SignInButton>
          <span>sign in</span>
        </SignInButton>
        <BreadCrumbs>Don&#8217;t have an account?</BreadCrumbs>
        <SignUpNow>Sign up now</SignUpNow>
      </AuthBlock>
    </PageContainer>
  )
}
