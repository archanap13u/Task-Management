import React from 'react'
import Sidebarr from '../components/Sidebarr';
import Navbar from '../components/Navbar';
import { MdAssignment } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';
import { MdPendingActions } from 'react-icons/md';
import { MdError } from 'react-icons/md';
import {  FaTrash } from "react-icons/fa";
import Edittask from '../components/Edittask';
import { Link } from 'react-router-dom';

function PendingTasks() {
      const cards = [
            { id: 1, title: "TOTAL TASK", value: "10", icons: <MdAssignment size={24} color='blue' /> ,path:'/' },
            { id: 2, title: "COMPLETED TASK", value: "7", icons: <MdCheckCircle size={24} color='green' />,path:'/completed' },
            // { id: 2, title: "PENDING TASK", value: "3", icons: <MdPendingActions size={24} color='yellow' />,path:'/pending' },
            { id: 3, title: "OVERDUE TASK", value: "2", icons: <MdError size={24} color='red' /> ,path:'/overdue'},
          ];    
  return (
   <>
     <div className="w-full h-screen flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
          <Sidebarr />
        </div>

        <div className="flex-1 bg-white overflow-y-auto">
          <Navbar />

          <div className="p-4 bg-gray-50 2xl:px-10" style={{ height: '90vh' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cards.map((item) => (
                <Link to={item.path} key={item} className='block'>
                <div  className="p-4 w-full rounded shadow bg-white">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-500">{item.title}</p>
                      <h6 className="py-2 text-black font-bold">{item.value}</h6>
                    </div>
                    <div>{item.icons}</div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
            <div className=" mt-5  bg-gray-50 2xl:px-10 min-h-screen" >
              <div className="flex justify-between px-1 mb-3">
                <h4 className="font-bold text-[20px] text-yellow-300 "> Pending Tasks</h4>
                
              </div>
              <div className='flex sm:justify-center lg:justify-start md:justify-start flex-wrap gap-4'>

              
              <div className="sm:max-w-[22rem] md:max-w-[22rem] bg-white border rounded-lg p-2">
                <div className="p-2">
                  <h2 className="text-lg font-semibold " style={{ marginBottom: '12px' }}>Task Title</h2>
                  <p className="mb-3 text-gray-700" style={{ fontSize: '13px' }}>
                    Some quick example text to build on the card title and make up the bulk
                  </p>
                  <p style={{ fontSize: '14px', fontWeight: 'bolder' }}>Assigned members:</p>
                  <div className="flex mt-5 justify-around items-center">
                    <p className="text-sm font-medium text-gray-500" style={{ fontSize: '12px' }}>21/9/2929</p>
                    <p className="text-sm text-yellow-300">Pending</p>
                    <div className="flex space-x-2">
                      <Edittask />
                      <FaTrash fontSize={19} className='text-red-500' />
                    </div>
                  </div>
                </div>
              </div>
              </div>



            </div>

          </div>
        </div>

      </div>
   </>
  )
}

export default PendingTasks