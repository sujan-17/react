import React from 'react'
import Home from './home '
import Create from './create'
import Update from './update'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
