import React from 'react'
import Sidebarr from '../components/Sidebarr'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Navbar from '../components/Navbar'
function RegisterByAdmin() {
  return (
    <>
         <div className="w-full h-screen flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
          <Sidebarr />
        </div>

        <div className="flex-1 bg-white overflow-y-auto">
          <Navbar />

          <div className="p-4 bg-gray-50 2xl:px-10 " style={{ height: '90vh' }}>
            <div className=' p-2 w-50'>
                <h3 className='text-center font-bold text-2xl' >Create New User</h3>
                <div className='px-9 mt-4'>
                <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-2" 
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingPassword"  className="mb-2" label="Username">
        <Form.Control type="text" placeholder="username" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      
      <div className='d-grid mt-2'>
                    <button className='btn btn-primary'>Register</button>
                </div>
                </div>
     
   

            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                <div>

                </div>
              
            </div> */}
            </div>
            </div>
            </div>
    </>
  )
}

export default RegisterByAdmin