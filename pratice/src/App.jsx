import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import LayoutAnimation from './LayoutAnimation'
// import Password from './Components/Password'

const App = () => {
  return (
    <UserContextProvider>
      {/* <Login/>
      <Profile/> */}
      {/* <Password/> */}
      <LayoutAnimation/>
    </UserContextProvider>
  )
}

export default App
