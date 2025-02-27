import { useState } from 'react'
import './App.css'
import Auth from './Pages/Auth'
import { Route,Routes } from 'react-router-dom'
import Admindash from './Pages/Admindash.jsx'
import Users from './Pages/Users.jsx'
import CompletedTasks from './Pages/CompletedTasks.jsx'
import PendingTasks from './Pages/PendingTasks.jsx'
import InprogressTask from './Pages/InprogressTask.jsx'
import Accounts from './Pages/Accounts.jsx'
import Investments from './Pages/Investments.jsx'
import Transactions from './Pages/Transactions.jsx'
// import OverdueTasks from './Pages/OverdueTasks.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
    <Route path='/' element={<Admindash/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/completed' element={<CompletedTasks/>}/>
    <Route path='/pending' element={<PendingTasks/>}/>
    <Route path='/inprogress' element={<InprogressTask/>}/>
    <Route path='/accounts' element={<Accounts/>}/>
    <Route path='/invest' element={<Investments/>}/>
    <Route path='/transactions' element={<Transactions/>}/>
    </Routes> 
   
    </>
  )
}

export default App
