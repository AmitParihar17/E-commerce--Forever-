import React from 'react'
import { assets } from '../assets/assets'
import { useAdminContext } from '../context/AdminContext'


const Navbar = () => {
    const {setIsAdmin} = useAdminContext()
  return (
     <nav className='flex justify-between items-center mx-10 border-b border-blue-100'>
        <img className='w-40' src={assets.logo} alt="logo" />
        <button onClick={() => setIsAdmin(false)}  className=' bg-gray-700 py-3 px-9 rounded-4xl font-medium text-white cursor-pointer'>Logout</button>
     </nav>
  )
}

export default Navbar
