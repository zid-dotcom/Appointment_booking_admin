import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Appcontext } from '../../context/Appcontext'
import { AdminContext } from '../../context/Admincontext'
import { assets } from '../../assets/assets'



function Dashboard() {
  const { getDashData, atoken, dashData, handleCancelAppointment, } = useContext(AdminContext)
  const [hide, sethide] = useState(false)


  const handlehide=()=>{
    sethide(!hide)
  }

  useEffect(() => {
    if (atoken) {
      getDashData()


    }


  }, [atoken])
  return (
    <div>


      <div className=' gap-5 flex justify-center m-10'>
        <div className='flex'>
          <div>
            <img src={assets.doctor_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-semibold'>{dashData.doctors}</p>
            <p className='text-gray-500'>Doctors</p>

          </div>

        </div>

        <div className='flex'>
          <div>
            <img src={assets.appointments_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-semibold'>{dashData.appointments}</p>
            <p className='text-gray-500'>Appointments</p>

          </div>

        </div>

        <div className='flex'>
          <div>
            <img src={assets.patients_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-semibold'>{dashData.patients}</p>
            <p className='text-gray-500'>Patients</p>

          </div>

        </div>






      </div>

      <div className='  '>
        <div className='flex  items-start m-5 gap-3'>
          <img src={assets.list_icon} alt="" />
          <p className='font-semibold '>Latest Bookings</p>
          <div className='m-0'>

           
                <button onClick={handlehide} className='border p-2 border-indigo shadow-2xl rounded-xl text-green-500'>{hide?'show':'Hide'}</button>


          </div>

        </div>


        {
          hide ?
            ''
            :
            <div>



              {

                dashData?.latestAppointments?.map((item, index) => (
                  <div className='flex gap-5 justify-around mt-10' key={index}>
                    <div>

                      <img className='w-10' src={item.docData.image} alt="" />
                    </div>

                    <div>
                      <p>{item.docData.name}</p>
                      <p>Booking on {item.slotDate}</p>
                    </div>
                    <div className='m-2'>
                      {
                        item.cancelled ?
                          <button className='text-red-500 border border-indigo-100 shadow p-2 rounded-full'>cancelled</button>
                          :
                          <img onClick={() => handleCancelAppointment(item._id)} src={assets.cancel_icon} alt="" />




                      }


                    </div>





                  </div>




                ))


              }

            </div>



        }


      </div>
    </div>




  )
}

export default Dashboard
