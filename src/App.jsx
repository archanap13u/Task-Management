import { useState } from 'react'
import './App.css'
import Auth from './Pages/Auth'
import { Route,Routes } from 'react-router-dom'
import Admindash from './Pages/Admindash.jsx'
import Users from './Pages/Users.jsx'
import CompletedTasks from './Pages/CompletedTasks.jsx'
import PendingTasks from './Pages/PendingTasks.jsx'
import OverdueTasks from './Pages/OverdueTasks.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
    <Route path='/' element={<Admindash/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/completed' element={<CompletedTasks/>}/>
    <Route path='/pending' element={<PendingTasks/>}/>
    <Route path='/overdue' element={<OverdueTasks/>}/>
    </Routes> 
   
    </>
  )
}

export default App
