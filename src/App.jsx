import { useState } from 'react'
import './App.css'
import Auth from './Pages/Auth'
import { Route,Routes } from 'react-router-dom'
import Admindash from './Pages/Admindash.jsx'
import Tasks from './Pages/Tasks.jsx'
import Users from './Pages/Users.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
    <Route path='/' element={<Admindash/>}/>
    <Route path='/tasks' element={<Tasks/>}/>
    <Route path='/dash' element={<Admindash/>}/>
    <Route path='/users' element={<Users/>}/>
    
    </Routes> 
   
    </>
  )
}

export default App
