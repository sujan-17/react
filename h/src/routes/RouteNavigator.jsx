
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
export default function RouteNavigator() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={"Home Page"}/>
        <Route path='/contact' element={"Contact Page"}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
