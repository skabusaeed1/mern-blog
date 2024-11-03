import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import DashBoard from './Pages/DashBoard'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
