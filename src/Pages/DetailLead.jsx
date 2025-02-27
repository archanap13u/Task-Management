import React from 'react'
import Sidebarr from '../components/Sidebarr'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa'
function DetailLead() {
  return (
    <>
    <div className="w-full h-screen flex flex-col md:flex-row">
    <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebarr />
    </div>

    <div className="flex-1 bg-white overflow-y-auto">
        <Navbar />


        {/* <div className="p-   p-3 2xl:px-10 flex-column flex flex-wrap w-50 " style={{borderRadius:'20px'}}>
            <div className='bg- w-full'>
            <div className='flex justify-between  '>
                <h1 className='text-2xl uppercase'>Project name</h1>
                <p>Status</p>
            </div>
            <div className=' mt-2 '>
            <p className='text-gray-00 ' style={{fontSize:'17px',fontWeight:'bold'}}>Description :</p><span className='ms-1 '></span>
            </div>
            <div className=' mt-2 '>
            <p className='text-gray-00 ' style={{fontSize:'17px',fontWeight:'bold'}}>Client details :</p><span className='ms-1 '></span>
            </div>
            <div className=' mt-2 '>
            <p className='text-gray-00 ' style={{fontSize:'17px',fontWeight:'bold'}}>Description :</p><span className='ms-1 '></span>
            </div>
            <div className=' mt-2 '>
            <p className='text-gray-00 ' style={{fontSize:'17px',fontWeight:'bold'}}>Description :</p><span className='ms-1 '></span>
            </div>
            <div className=' mt-2 '>
            <p className='text-gray-00 ' style={{fontSize:'17px',fontWeight:'bold'}}>Description :</p><span className='ms-1 '></span>
            </div>

            </div>

           
            </div> */}
            <div className='p-5 ' style={{height:"500px"}}>

         
            <table className='table table- h-full'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Client details</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>demo</td>
                        <td>fhffhfhhfhfhhhh</td>
                        <td className='text-red-500'>rejected</td>
                        <td className='flex flex-column h-full' >
                            
                                <div className='text- ' style={{fontWeight:'bold'}}>
                                name
                                </div>
                                <div >
                                address
                                </div>
                                <div >
                                phn
                                </div>
                                <div >
                                mail
                                </div>
                                
                            
                        </td>
                        <td className=''>
                            <div className='flex'>
                            <Link to={''} className='flex text-yellow-300 me-3'  style={{textDecoration:''}}><FaEdit fontSize={24}/></Link>
                            <Link to={''} className='flex text-red-500' style={{textDecoration:''}} ><FaTrash fontSize={24}/></Link>
                            </div>

                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
        </div>


    </>
  )
}

export default DetailLead