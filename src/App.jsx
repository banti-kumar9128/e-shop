import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Nav from './Components/nav/Nav'
import Footer from './Components/Footer/Footer'
import Shop from './pages/Shop/Shop'
import Contect from './pages/Contect/Contect'

const App = () => {
  return (
   <>
     <BrowserRouter >
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contect' element={<Contect/>}/>



      </Routes>

     <Footer/>
     </BrowserRouter>
    
   </>
  )
}

export default App