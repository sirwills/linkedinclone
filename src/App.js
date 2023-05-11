import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProfileHome from './pages/ProfileHome'
import SignIn from './pages/SignIn'
// import ProfileHome from './pages/ProfileHome' 

const App = () => {
  // const authenticated = false;

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Login/>}/>
        <Route path='/SignIn' element= {<SignIn/>}/>
        <Route path='/ProfileHome' element= {<ProfileHome/>}/>
        
      </Routes>

      {/* {authenticated ? <ProfileHome> : <Login/>} */}
    </BrowserRouter>


    )
}



export default App