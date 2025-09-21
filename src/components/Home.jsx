import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  
  return (
    <main className='flex justify-center items-center w-screen mx-auto container flex-col max-w-7xl space-y-6'>
      <div className='mt-10'>
        <h1 className='md:text-2xl text-xl font-bold font-sans'>Management List Of User</h1>
      </div>
      
      <div className='space-x-6'>
        <Link to={'/list-user'} className='font-semibold bg-blue-500 text-white px-3 py-1.5 rounded-md hover:bg-blue-600'>List User</Link>
        <Link to={'/create-user'} className='font-semibold bg-blue-500 text-white px-3 py-1.5 rounded-md hover:bg-blue-600'>Create User</Link>
      </div>
      <Outlet />

    </main>
  )
}

export default Home