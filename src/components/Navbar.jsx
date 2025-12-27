import React, { useContext } from 'react'
import { AdminContext } from '../context/Admincontext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/Doctorcontext'





function Navbar() {
  const navigate = useNavigate()
  const { atoken, setAtoken } = useContext(AdminContext)
  const { dtoken, setdtoken } = useContext(DoctorContext)

  const handleLogout = () => {
    navigate('/')
    atoken && setAtoken('')
    atoken && localStorage.removeItem('aToken')
      ||
      dtoken && setdtoken('')
    dtoken && localStorage.removeItem('dToken')


  }
  return (
    <div className='flex justify-between items-center  border-b border-white shadow-2xs p-5 bg-white'>
      <div className='text-xl text-blue-500 font-semibold flex gap-2 '>
        <img className='cursor-pointer' src={assets.admin_logo} alt="" />
        <p className=' '>{atoken ? 'Admin' : 'Doctor'}</p>
      </div>
      <div className='mt-4'>
        <button onClick={handleLogout} className='border p-2 bg-blue-500 rounded-full w-25 text-white '>Logout</button>


      </div>

    </div>
  )
}

export default Navbar
