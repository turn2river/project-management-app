import {
  PageContainer,
  MainTitle,
  Logo,
  Header,
  SubHeader,
  HeaderColor,
  DescritionHead,
  AuthBlock,
  InputField,
  SignInButton,
  BreadCrumbs,
  SignUpNow
} from './styled'

export const WellcomePage = () => (
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
    <DescritionHead>
      A project management application<br/>
      to improve your workflow.
    </DescritionHead>
    <AuthBlock>
      <InputField placeholder='login'/>
      <InputField placeholder='password'/>
      <SignInButton>
        <span>sign in</span>
      </SignInButton>
      <BreadCrumbs>Don&#8217;t have an account?</BreadCrumbs>
      <SignUpNow>Sign up now</SignUpNow>
    </AuthBlock>
  </PageContainer>
)
