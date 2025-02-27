import React from 'react'

function AddInvestment() {
    return (
        <>
            <div className='border p-2'>
                <h4 className='text-lg font-bold text-center text--500 mb-3 mt-2'>Add Investment Details</h4>
                <input type='text' placeholder='Invesrtment name:' className='w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                <input type='text' placeholder='Investment Category:' className='w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                <input type='text' placeholder='Investment Date:' className='w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                <input type='text' placeholder='Investment Amount:' className='w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                {/* <input type='text' placeholder='Amount' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input> */}
                <div className="flex justify-end gap-4 mt-3 mb-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
                        Add
                    </button>
                    <button className="bg-gray-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition duration-300">
                        Cancel
                    </button>
                </div>
            </div>

        </>
    )
}

export default AddInvestment