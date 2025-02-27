import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
function Profile() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  return (
    <>
      <li className="px-4 flex py-2 hover:bg-gray-100 cursor-pointer" onClick={handleShow}>
      <CgProfile size={22}   className='mt-1 me-2'/>Profile

      </li>

      
      <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className='margin-top-40  '

        >
            <div className="p-4 ">
              <div className='flex flex-column  items-center'>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png" className='w-20 relative h-30 t'></img>
              <label>
              <FaEdit className='absolute top-16 left-50 text-red-700 mt- ms-5 -info'/>

                <input type='file' className='hidden'></input>
              </label>
              <h6 className='tex-black font-bold py-2 mb-3'>admin@gmail.com</h6>

              </div>
                {/* <h3 className="text-lg font-semibold text-center"> PROFILE</h3> */}
                
                <input type='text' className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"placeholder='usename' defaultValue="admin "></input>
                <input type='password' className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"placeholder='password' defaultValue="1234"></input>

       
              


                <div className="flex justify-end p-1 pt-4">

                    <button    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Update
                    </button>
                    <button onClick={handleClose}  className="px-4 me-2 ms-2 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-800 hover:text-white">
                       Done
                    </button>
                </div>


            </div>

        </Modal>
        




      
    


    </>
  )
}

export default Profile