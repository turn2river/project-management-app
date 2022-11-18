import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { GlobalStyle } from '../../globalStyles'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          // element={}>
        />
      </Routes>
    </BrowserRouter>
  )
}
