import React from 'react'

function AddExpense() {
    return (
        <>
            <div className='border p-2'>
                <h4 className='text-lg font-bold text-center mb-3 text--500 mt-2'>Add Expense</h4>
                <div className='grid grid-cols-2 gap-3'>
                <input type='text' placeholder='Amount:' className='w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                <input type='text' placeholder='GST:' className='w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>

                </div>
        
                <input type='text' placeholder='Date:' className='w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>

                <input type='text' placeholder='Category:' className='w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                <input type='text' placeholder='Date:' className='w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                <label className="flex items-center gap-2  text-gray-400 px-4 py-2 rounded-md cursor-pointer shadow-md hover:bg-gray-300 transition duration-300">
                    <span className="font-">Upload Bill:</span>
                    <img src="" alt="" className="w-50 h-50" />
                    <input type="file" className="hidden" />
                </label>


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

export default AddExpense