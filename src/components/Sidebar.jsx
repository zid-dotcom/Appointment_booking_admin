// import React, { useContext } from 'react'
// import { AdminContext } from '../context/Admincontext'
// import { NavLink } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import { DoctorContext } from '../context/Doctorcontext'

 

// function Sidebar() {

  

//   const {atoken}=useContext(AdminContext)
//   const {dtoken}=useContext(DoctorContext)

//   return (
//     <div className='min-h-screen bg-white  border-r border-white shadow p-5   '>
//       {
//         atoken &&<ul className='text-blue-500  flex flex-col justify-center  gap-20  '>
//           <NavLink to={'/admin-dashboard'} className=' flex  items-center gap-3 m-2  hover:bg-blue-50 p-3 ' >
//             <img  className='w-5' src={assets.home_icon} alt="" />
//             <p>Dashboard</p>


//           </NavLink>
//            <NavLink  className='flex  items-center gap-3 m-2  hover:bg-blue-50 ' to={'/all-appointments'} >
//             <img className='w-5' src={assets.appointment_icon} alt="" />
//             <p>Appointment</p>


//           </NavLink>
//            <NavLink  className='flex  items-center gap-3 m-2  hover:bg-blue-50' to={'/add-doctor'}>
//             <img className='w-5' src={assets.add_icon} alt="" />
//             <p>AddDoctor</p>


//           </NavLink>

//           <NavLink className='flex  items-center gap-3 m-2  hover:bg-blue-50' to={'/doctorlist'}>
//             <img className='w-5' src={assets.people_icon} alt="" />
//             <p>Doctor List</p>


//           </NavLink>
//         </ul>
//       }


//       {
//         dtoken &&<ul className='text-blue-500  flex flex-col justify-center  gap-20  '>
//           <NavLink to={'/doctor-dashboard'} className=' flex  items-center gap-3 m-2  hover:bg-blue-50 p-3 ' >
//             <img  className='w-5' src={assets.home_icon} alt="" />
//             <p>Dashboard</p>


//           </NavLink>
//            <NavLink  className='flex  items-center gap-3 m-2  hover:bg-blue-50 ' to={'/doctor-Appointment'} >
//             <img className='w-5' src={assets.appointment_icon} alt="" />
//             <p>Appointment</p>


//           </NavLink>
          

//           <NavLink className='flex  items-center gap-3 m-2  hover:bg-blue-50' to={'/doctor-profile'}>
//             <img className='w-5' src={assets.people_icon} alt="" />
//             <p>Doctor Profile</p>


//           </NavLink>
//         </ul>
//       }
        
//     </div>

    
//   )
// }

// export default Sidebar







import React, { useContext } from 'react'
import { AdminContext } from '../context/Admincontext'
import { DoctorContext } from '../context/Doctorcontext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

function Sidebar() {
  const { atoken } = useContext(AdminContext)
  const { dtoken } = useContext(DoctorContext)

  return (
    <div className="min-h-screen w-full bg-white border-r shadow p-5">

      {/* ADMIN SIDEBAR */}
      <ul
        className={`text-blue-500 flex flex-col gap-6 ${
          atoken ? 'block' : 'hidden'
        }`}
      >
        <NavLink to="/admin-dashboard" className="flex items-center gap-3 p-3 hover:bg-blue-50">
          <img className="w-5" src={assets.home_icon} alt="" />
          <p>Dashboard</p>
        </NavLink>

        <NavLink to="/all-appointments" className="flex items-center gap-3 p-3 hover:bg-blue-50">
          <img className="w-5" src={assets.appointment_icon} alt="" />
          <p>Appointment</p>
        </NavLink>

        <NavLink to="/add-doctor" className="flex items-center gap-3 p-3 hover:bg-blue-50">
          <img className="w-5" src={assets.add_icon} alt="" />
          <p>Add Doctor</p>
        </NavLink>

        <NavLink to="/doctorlist" className="flex items-center gap-3 p-3 hover:bg-blue-50">
          <img className="w-5" src={assets.people_icon} alt="" />
          <p>Doctor List</p>
        </NavLink>
      </ul>

      {/* DOCTOR SIDEBAR */}
      <ul
        className={`text-blue-500 flex flex-col gap-6 ${
          !atoken && dtoken ? 'block' : 'hidden'
        }`}
      >
        <NavLink to="/doctor-dashboard" className="flex items-center gap-3 p-3 hover:bg-blue-50">
          <img className="w-5" src={assets.home_icon} alt="" />
          <p>Dashboard</p>
        </NavLink>

        <NavLink to="/doctor-Appointment" className="flex items-center gap-3 p-3 hover:bg-blue-50">
          <img className="w-5" src={assets.appointment_icon} alt="" />
          <p>Appointment</p>
        </NavLink>

        <NavLink to="/doctor-profile" className="flex items-center gap-3 p-3 hover:bg-blue-50">
          <img className="w-5" src={assets.people_icon} alt="" />
          <p>Doctor Profile</p>
        </NavLink>
      </ul>
    </div>
  )
}

export default Sidebar
