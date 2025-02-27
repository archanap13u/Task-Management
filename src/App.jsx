import { useState } from 'react'
import './App.css'
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
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import DetailLead from './Pages/DetailLead.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
    <Route path='/dash' element={<Admindash/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/completed' element={<CompletedTasks/>}/>
    <Route path='/pending' element={<PendingTasks/>}/>
    <Route path='/inprogress' element={<InprogressTask/>}/>
    <Route path='/accounts' element={<Accounts/>}/>
    <Route path='/invest' element={<Investments/>}/>
    <Route path='/transactions' element={<Transactions/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path="/register" element={<Register />} />
    <Route path="/projectdetail" element={<DetailLead />} />

   
    </Routes> 
   
    </>
  )
}

export default App
