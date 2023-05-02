import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SignIn from './pages/SignIn'

const App = () => {
  // const authenticated = false;

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Login/>}/>
        <Route path='/SignIn' element= {<SignIn/>}/>
      </Routes>

      {/* {authenticated ? <Home/> : <Login/>} */}
    </BrowserRouter>


    )
}



export default App