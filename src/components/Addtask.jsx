import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Addtask() {
    const [show, setShow] = useState(false);

    const[data,setdata]=useState({
        title:"",description:"",team:[],stage:"",date:""
    })
    const [selectedMembers, setSelectedMembers] = useState([]);

    // useEffect(()=>{
    //     console.log(data)
    // },[data])
    const handleAdd=()=>{
        console.log(data)
        // handleClose()
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isOpen, setIsOpen] = useState(false);
    const teamMembers = ["Alice", "Bob", "Charlie", "David", "Emma"];
    const toggleSelection = (member) => {
        setSelectedMembers((prev) => {
            const updatedMembers = prev.includes(member)
                ? prev.filter((m) => m !== member)  // Remove if already selected
                : [...prev, member];  // Add if not selected
    
            setdata((prevData) => ({
                ...prevData,
                team: updatedMembers,  // ✅ Correctly assign updatedMembers
            }));
    
            return updatedMembers;  // Return the updated state
        });
    };
    return (
        <>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg bg-[#f3f4f6] hover:bg-blue-700" onClick={handleShow}>
                + Create Task
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='margin-top-40  '

            >
                <div className="p-4">
                    <h3 className="text-lg font-semibold">ADD TASK</h3>

                    <label className="mt-3 block text-gray-700">Task Title</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Task title"
                        onChange={(e)=>setdata({...data,title:e.target.value})}
                    />
                    <label className="mt-3 block text-gray-700">Task Description</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="About Task"
                        onChange={(e)=>setdata({...data,description:e.target.value})}
                    />

                    < label className="mt-3 block font-medium text-gray-700">Assign Task To:</label>
                    <div className="relative inline-block w-100">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full p-2 border border-gray-300 rounded-lg bg-white text-left"
                        >
                            {selectedMembers.length > 0
                                ? selectedMembers.join(", ")
                                : <span className=' text-gray-400'>Select Team Members</span>}
                        </button>

                        {isOpen && (
                            <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                <div className="flex justify-between items-center p-2 border-b">
                                    <span className="font-medium  text-gray-700">Select Members</span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        ✖
                                    </button>
                                </div>
                                <ul className="max-h-40 overflow-y-auto p-2 max-w-[400px]">
                                    {teamMembers.map((member) => (
                                        <li
                                            key={member}
                                            onClick={() => toggleSelection(member)}
                                            className={`flex items-center p-2 cursor-pointer rounded-md ${selectedMembers.includes(member) ? "bg-blue-100" : "hover:bg-gray-100"
                                                }`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedMembers.includes(member)}
                                                readOnly
                                                className="mr-2"
                                                 placeholder="Team members"
                                            />
                                            {member}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className='grid grid-cols-2 gap-2 ' >


                        <div className=''>
                            <label className="block text-gray-700 mt-3" style={{ marginTop: '' }}>Select an Option</label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            onChange={(e)=>{setdata({...data,stage:e.target.value})}}>
                                <option value="option1">select stage</option>
                                <option value="option2">PENDING</option>
                                <option value="option3">ON PROGRESS</option>
                                <option value="option4"> COMPLETED</option>
                            </select>
                        </div>
                        <div className=''>
                            <label className="block text-gray-700 mt-3" style={{ marginTop: '' }}>Task Date:</label>
                            <input type='date' className='py-2 px-4 border rounded'   onChange={(e)=>{setdata({...data,date:e.target.value})}}></input>

                        </div>
                    </div>

                    <div className="flex justify-end p-1 pt-4">
                        <button onClick={handleClose} className="px-4 me-2 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-800 hover:text-white">
                            Cancel
                        </button>
                        <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            Add
                        </button>
                    </div>


                </div>

            </Modal>
        </>
    )
}

export default Addtask