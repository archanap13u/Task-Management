import React from 'react'
import Sidebarr from '../components/Sidebarr';
import Navbar from '../components/Navbar';
import { MdAssignment } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';
import { MdPendingActions } from 'react-icons/md';
import { MdError } from 'react-icons/md';
import Addtask from '../components/Addtask';
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";
import Edittask from '../components/Edittask';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function Admindash() {
  const cards = [
    { id: 1, title: "TOTAL TASK", value: "10", icons: <MdAssignment size={24} color='blue' />, path: "/dash" },
    { id: 2, title: "COMPLETED TASK", value: "7", icons: <MdCheckCircle size={24} color='green' />, path: '/completed' },
    { id: 3, title: "PENDING TASK", value: "3", icons: <MdPendingActions size={24} color='yellow' />, path: '/pending' },
    { id: 4, title: "IN PROGRESS TASK", value: "2", icons: <MdError size={24} color='red' />, path: '/inprogress' },
  ];
  const location = useLocation()




  return (
    <>

      <div className="w-full h-screen flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
          <Sidebarr />
        </div>

        <div className="flex-1 bg-white overflow-y-auto">
          <Navbar />

          <div className="p-4 bg-gray-50 2xl:px-10 min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cards.map((item) => {
                const isActive = location.pathname === item.path; // Change this if needed

                return (
                  <Link to={item.path} key={item.path} className="block">
                    <div
                      className={`p-4 w-full rounded shadow transition-all duration-300 
                     ${isActive ? "border- order-blue-500 bg-blue-50" : "border border-gray-300 bg-white"}`}
                    >
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm text-gray-500">{item.title}</p>
                          <h6 className="py-2 text-black font-bold">{item.value}</h6>
                        </div>
                        <div>{item.icons}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className=" mt-5  bg-gray-50 2xl:px-10" >
              <div className="flex justify-between px-1 mb-3">
                <h4 className="font-bold text-[20px] "> All Task</h4>
                <Addtask />
              </div>
              {/* --task card-- */}
              <div className='flex sm:justify-center lg:justify-start md:justify-start  gap-4 flex-wrap '>


                <div className="w-full sm:max-w-[22rem] md:max-w-[22rem] bg-white border  rounded-lg p-2 mt-2">
                  <div className="p-2">
                    <h2 className="text-lg font-semibold mb-3" >Task Title</h2>
                    <p className="mb-3 text-gray-700" style={{ fontSize: '13px' }}>
                      Some quick example text to build on the card title and make up the bulk
                    </p>
                    <p style={{ fontSize: '14px', fontWeight: 'bolder' }}>Assigned members:</p>
                    <div className="flex mt-5 justify-around items-center">
                      <p className="text-sm font-medium text-gray-500" style={{ fontSize: '12px' }}>21/9/2929</p>
                      <p className="text-sm text-green-600">complete</p>
                      <div className="flex space-x-2">
                        <FaStar fontSize={20} className='  text-gray-500' />
                        <Edittask />
                        <FaTrash fontSize={19} className='text-red-700' />
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

export default Admindash