import React, { useState } from 'react'
import Sidebarr from '../components/Sidebarr';
import Navbar from '../components/Navbar';
import { FaEdit, FaLongArrowAltRight } from 'react-icons/fa';
import AccountNavLinks from '../components/AccountNavLinks';
import { FaTrash } from 'react-icons/fa';
import AddExpense from '../components/AddExpense';
function Accounts() {
    const [show, setshow] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

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
                    <div className="mt-2 flex flex-wrap">
                        <div className="w-full lg:w-2/3 p-2">
                            <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-2xl">
                                <thead>
                                    <tr className="border-b bg-gray-100">
                                        {["Id", "Amount(+gst)", "Category", "Date", "Bill"].map((heading) => (
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
                                            <td className="px-6 py-3 text-sm text-gray-700">1</td>
                                            <td><input type="text" className="border rounded px-2 py-1 w-full" defaultValue="900" /></td>
                                            <td><input type="text" className="border rounded px-2 py-1 w-full" defaultValue="Food" /></td>
                                            <td><input type="text" className="border rounded px-2 py-1 w-full" defaultValue="2024-03-01" /></td>
                                            <td>
                                                <label className="flex ms-3 flex-col items-center cursor-pointer">
                                                    <img src='' className='w-20 h-20 object-cover rounded-lg border'></img>
                                                    <input type='file' className='hidden'></input>
                                                </label>
                                            </td>
                                            <td className="px-6 py-3 flex gap-2">
                                                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600" onClick={changeShow}>Update</button>
                                                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={changeShow}>Cancel</button>
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr className="border-b hover:bg-gray-50">
                                            <td className="px-6  text-sm text-gray-700">1</td>
                                            <td className="px-6  text-sm text-gray-700">900</td>
                                            <td className="px-6  text-sm text-gray-700">Food</td>
                                            <td className="px-6  text-sm text-gray-700">01/03/2024</td>

                                            <td className="px-6  text-sm text-gray-700">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpC02lt7n8c81r4Y3gn6sNpSR0a-EPGRq7w&s" onClick={() => setIsOpen(true)} alt="bill" className=" object-cover w-10 rounded-lg border"
                                                ></img>
                                            </td>
                                            {isOpen && (
                                                <td
                                                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                                                    onClick={() => setIsOpen(false)} // Close when clicking outside
                                                >
                                                    <div className="bg-white p-4 rounded-lg shadow-lg relative">
                                                        <img
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpC02lt7n8c81r4Y3gn6sNpSR0a-EPGRq7w&s"
                                                            alt="bill"
                                                            className="w-[500px] h-auto rounded-lg object-cover"
                                                        />
                                                        <button
                                                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            ✖
                                                        </button>
                                                    </div>
                                                </td>
                                            )}
                                            <td className="px-6 py-2 flex gap-3">
                                                <FaEdit fontSize={20} className="text-yellow-400 cursor-pointer" onClick={changeShow} />
                                                <FaTrash fontSize={20} className="text-red-600 cursor-pointer" />
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full lg:w-1/3 py-4 px-3">
                            <AddExpense />
                        </div>
                    </div>
                </div>
            </div>









        </>
    )
}

export default Accounts