import React from 'react'
import Sidebarr from '../components/Sidebarr'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function Users() {
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
        <div className='  p-2 '>
    <h3 className='fw-bold text-[23px]  ' >Users</h3>
       
    <table className="w-full bg-white mt-4  border-gray-300 rounded-xlg shadow-sm" style={{borderRadius:'10px'}}>
                            <thead className="bg-blue-200 " >
                                <tr className="text-left text-gray-700">
                                <th className="p-3 ">Id</th>
                                    <th className="p-3 border-b">Name</th>
                                    <th className="p-3 border-b">Email</th>
                                    <th className="p-3 border-b"> Task assigned</th>
                                    <th className="p-3 border-b"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=" hover:bg-gray-50 ">
                                    <td className="p-3 ">demo</td>
                                    <td className="p-3">completed</td>
                                    <td className="p-3">demo</td>
                                    <td className="p-3">demo</td>
                                    <td className="p-3">
                                        
                                        <Link to={""} className="text-red-500 font-bold hover:underline">Delete</Link>
                                    </td>
                                </tr>

                                
                            </tbody>
                        </table>
                        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Users