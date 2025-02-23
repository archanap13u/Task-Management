import React from 'react'
import Navbar from '../components/Navbar'
import Sidebarr from '../components/Sidebarr'

import { Link } from 'react-router-dom';
import Addtask from '../components/Addtask';
import Edittask from '../components/Edittask';
function Tasks() {
  
    return (
        <>
            <div className="w-full h-screen flex flex-col md:flex-row">
                {/* Sidebar */}
                <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
                    <Sidebarr />
                </div>

                <div className="flex-1 bg-white overflow-y-auto">
                    <Navbar />
                    <div className="p-4 bg-gray-50 2xl:px-10">
                        <div className="flex justify-between px-2">
                            <h4 className="font-bold text-[20px]">Task</h4>
                           <Addtask/>
                        </div>
                        <table className="w-full bg-white mt-5 border border-gray-300 rounded-lg shadow-sm">
                            <thead className="bg">
                                <tr className="text-left text-gray-700">
                                    <th className="p-3 border-b">Task Title</th>
                                    <th className="p-3 border-b">Task stage</th>
                                    <th className="p-3 border-b">Created At</th>
                                    <th className="p-3 border-b">Team</th>
                                    <th className="p-3 border-b"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-3">demo</td>
                                    <td className="p-3">completed</td>
                                    <td className="p-3">demo</td>
                                    <td className="p-3">demo</td>
                                    <td className="p-3">
                                        <Edittask/>
                                        <Link to={""} className="text-red-500 font-bold hover:underline">Delete</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    
                    <div className=''>




                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasks