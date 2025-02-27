import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { FaUsers, FaTasks } from 'react-icons/fa';
import { AiFillAccountBook } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

function Sidebarr() {
  const location = useLocation();

  return (
    <div className='w-full h-full flex flex-col gap-6 p-3'>
      <h1 className='flex gap-1 items-center'>
        <p className='bg-blue-600 p-2 rounded-full'>
          <MdDashboard className='text-white text-md font-black' />
        </p>
        <span className='text-2xl font-bold text-black'>ADMIN</span>
      </h1>

      <div className='flex-1 flex flex-col gap-y-5 py-3'>
        <Link
          to='/'
          className={`flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base transition-all ${
            location.pathname === '/' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
          }`}
        >
          <MdDashboard /> Dashboard
        </Link>

        <Link
          to='/users'
          className={`flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base transition-all ${
            location.pathname === '/users' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
          }`}
        >
          <FaUsers /> Users
        </Link>

        <Link
          to='/accounts'
          className={`flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base transition-all ${
            location.pathname === '/accounts' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
          }`}
        >
          <AiFillAccountBook /> Accounts
        </Link>

        {/* ✅ New Link for Leads (Projects) */}
        <Link
          to='/leads'
          className={`flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 text-base transition-all ${
            location.pathname === '/leads' ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'
          }`}
        >
          <FaTasks /> Projects
        </Link>
      </div>
    </div>
  );
}

export default Sidebarr;
