import React from 'react'
import { IconBase } from 'react-icons'
import { FaTasks } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'
function Sidebarr() {

  
    
  return (
    <>
    <div className='w-full h-full flex flex-col gap-6 p-3'>
        <h1 className='flex gap-1 items-center'>
            <p className='bg-blue-600 p-2 rounded-full'>
                <MdDashboard className='text-white text-md font-black'></MdDashboard>
            </p>
            <span className='text-2xl font-bold text-black'>ADMIN</span>
        </h1>
        <div className='flex-1 flex flex-col gap-y-5 py-3 bg-  '>
        <Link to={'/'} className='flex gap-2 px-3 py-2 rounded-full items-center text-grey-800  hover:text-white
           text-base hover:bg-blue-500 '><MdDashboard/>Tasks</Link>
           {/* <Link to={'/tasks'} className='flex gap-2 px-3 py-2 rounded-full items-center text-grey-800
           text-base hover:bg-blue-500  hover:text-white'><FaTasks/></Link> */}
           <Link to={'/users'} className='flex gap-2 px-3 py-2 rounded-full items-center text-grey-800
           text-base hover:bg-blue-500  hover:text-white'><FaUsers/>Users</Link>
           <Link to={''} className='flex gap-2 px-3 py-2 rounded-full items-center text-grey-800
           text-base hover:bg-blue-500  hover:text-white'></Link>
        </div>
    </div>
    </>
  )
}

export default Sidebarr