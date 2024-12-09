import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Add from './pages/Add'
import Update from './pages/Update'


function App() {
  return (
    <>
    <Routes>
      <Route path="" element={<Home />}/>
      <Route path="/add" element={<Add/>}/>
     <Route path="/update/:id" element={<Update />}/>
    </Routes>
     
    </>
  )
}

export default App
