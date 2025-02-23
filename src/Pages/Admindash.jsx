import React from 'react'
import Sidebarr from '../components/Sidebarr';
import Navbar from '../components/Navbar';
import { MdAssignment } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';
import { MdPendingActions } from 'react-icons/md';
import { MdError } from 'react-icons/md';
function Admindash() {
  const cards = [
    { id: 1, title: "TOTAL TASK", value: "10", icons:<MdAssignment size={24} color='blue' /> },
    { id: 2, title: "COMPLETED TASK", value: "7",icons:<MdCheckCircle size={24} color='green' />   },
    { id: 3, title: "PENDING TASK", value: "3",icons:<MdPendingActions size={24}  color='yellow'/>  },
    { id: 4, title: "OVERDUE TASK", value: "2",  icons:<MdError size={24} color='red'/> },
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
      <div key={item} className="p-4 w-full rounded shadow bg-white">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">{item.title}</p>
            <h6 className="py-2 text-black font-bold">{item.value}</h6>
          </div>
          <div>{item.icons}</div>
        </div>
      </div>
    ))}
  </div>
</div>
  </div>
</div>
     
    </>
  )
}

export default Admindash