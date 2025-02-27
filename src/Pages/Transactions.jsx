import React from 'react'
import Sidebarr from '../components/Sidebarr'
import AccountNavLinks from '../components/AccountNavLinks'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FaTrash } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import AddTransactions from '../components/AddTransactions'
import { useState } from 'react'
function Transactions() {
        const [show, setshow] = useState(false)
    
        const changeShow = () => {
            setshow(!show)
        }
    return (
        <>
            <div className="w-full h-screen flex flex-col md:flex-row">
                <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
                    <Sidebarr />
                </div>

                <div className="flex-1 bg-white overflow-y-auto">
                    <Navbar />
                    <div className="p- bg-gray-50 border-b 2xl:px-10 justify-around flex flex-wrap">
                        <div className="p-4   bg-whit">
                            <div className="">
                                <div>
                                    <p className="text-lg text-red-500 mb-2" style={{ fontWeight: 'bold' }}>Total Expenses</p>
                                    <h1 className='text-3xl' style={{ fontWeight: 'bolder' }}>$23,003</h1>
                                </div>
                            </div>
                        </div>

                        <div className="p-4   bg-whit">
                            <div className="">
                                <div>
                                    <p className="text-lg text-blue-500 mb-2" style={{ fontWeight: 'bold' }}>Investments</p>
                                    <h1 className='text-3xl' style={{ fontWeight: 'bolder' }}>$23,003</h1>
                                </div>

                            </div>
                        </div>
                        <div className="p-4   bg-whit">
                            <div className="">
                                <div>
                                    <p className="text-lg text-gray-500 mb-2" style={{ fontWeight: 'bold' }}> Transactions</p>
                                    <h1 className='text-3xl' style={{ fontWeight: 'bolder' }}>6</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <AccountNavLinks />
                    <div className='mt-2 -4 mt-2 flex flex-wrap  '>
                        <div className="w-full lg:w-2/3 p-2">
                            <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-2xl">
                                <thead>
                                    <tr className="border-b bg-gray-100">
                                        {["name", "type", "category", "date","amount",].map((heading) => (
                                            <th key={heading} className="px-6 py-1 text-left text-sm font-semibold text-gray-600 uppercase">
                                                {heading}
                                            </th>
                                        ))}
                                        <th className="px-6 py-3"></th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {show ? (
                                        <tr className="border-b hover:bg-gray-50">
                                     
                                            <td><input type="text" className="border rounded px-2 py-1 w-full ms-2" defaultValue="abc" /></td>
                                            <td><input type="text" className="border rounded px-2 py-1 w-full ms-2" defaultValue="income" /></td>
                                            <td><input type="text" className="border rounded px-2 py-1 w-full ms-2" defaultValue="product" /></td>
                                            <td><input type="text" className="border rounded px-2 py-1 w-full ms-2" defaultValue="0/09/909" /></td>
                                            <td><input type="text" className="border rounded px-2 py-1 w-full ms-2" defaultValue="9090" /></td>


                                            <td className="px-6 py-3 flex gap-2">
                                                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600" onClick={changeShow}>Update</button>
                                                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={changeShow}>Cancel</button>
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr className="border-b hover:bg-gray-50">
                                            <td className="px-6  text-sm text-gray-700">abc</td>
                                            <td className="px-6  text-sm text-gray-700">income</td>
                                            <td className="px-6  text-sm text-gray-700">product</td>
                                            <td className="px-6  text-sm text-gray-700">90/9/000</td>
                                            <td className="px-6  text-sm text-gray-700">9090</td>


                                            <td className="px-6 py-2 flex gap-3">
                                                <FaEdit fontSize={20} className="text-yellow-400 cursor-pointer" onClick={changeShow} />
                                                <FaTrash fontSize={20} className="text-red-600 cursor-pointer" />
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className='w-full lg:w-1/3 py-4 pe-3'>
                            <AddTransactions />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transactions