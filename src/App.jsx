import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

import { ToastContainer } from 'react-toastify'
import { AdminContext } from './context/Admincontext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard'
import AllAppointment from './pages/Admin/AllAppointment'
import AddDoctor from './pages/Admin/AddDoctor'
import DoctorsList from './pages/Admin/DoctorsList'
import { DoctorContext } from './context/Doctorcontext'
import DoctorDashboard from './pages/Doctor/DoctorDashboard'
import DoctorAppointments from './pages/Doctor/DoctorAppointments'
import DoctorProfile from './pages/Doctor/DoctorProfile'



// function App() {
//   const { atoken } = useContext(AdminContext)
//   const { dtoken } = useContext(DoctorContext)
//   return atoken || dtoken ? (
//     <div  >


//       {/* <Login/> */}
//       <ToastContainer />
//       <Navbar />
//       <div className='flex items-start'>
//         <Sidebar />
//         <Routes>

//           {/* Admin Route */}
//           <Route path='/' element={<></>} />
//           <Route path='/admin-dashboard' element={<Dashboard />} />
//           <Route path='/all-appointments' element={<AllAppointment />} />
//           <Route path='/add-doctor' element={<AddDoctor />} />
//           <Route path='/doctorlist' element={<DoctorsList />} />

//           {/*  Doctor route */}


//           <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
//           <Route path='/doctor-Appointment' element={<DoctorAppointments />} />
//           <Route path='/doctor-profile' element={<DoctorProfile />} />





//         </Routes>


//       </div>




//     </div>

//   ) : (
//     <>
//       <Login />
//       <ToastContainer />



//     </>
//   )
// }

// export default App



function App() {
  const { atoken } = useContext(AdminContext)
  const { dtoken } = useContext(DoctorContext)

  return (
    <>
      <ToastContainer />

      {(atoken || dtoken) && <Navbar />}

      <div className="flex min-h-screen">
        {(atoken || dtoken) && (
          <div className="w-64 shrink-0">
            <Sidebar />
          </div>
        )}

        <div className="flex-1">
          {atoken || dtoken ? (
            <Routes>
              {/* Admin */}
              <Route path="/admin-dashboard" element={<Dashboard />} />
              <Route path="/all-appointments" element={<AllAppointment />} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/doctorlist" element={<DoctorsList />} />

              {/* Doctor */}
              <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
              <Route path="/doctor-Appointment" element={<DoctorAppointments />} />
              <Route path="/doctor-profile" element={<DoctorProfile />} />
            </Routes>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </>
  )
}


export default App