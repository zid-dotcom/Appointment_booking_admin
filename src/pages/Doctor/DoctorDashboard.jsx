import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/Doctorcontext'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { useState } from 'react'



function DoctorDashboard() {
  const { getdashdata, dtoken, setdashdata, dashdata , completeAppointment,cancelAppointment} = useContext(DoctorContext)
  const [hide, sethide] = useState(false)


  const handlehide = () => {
    sethide(!hide)
  }


  useEffect(() => {
    if (dtoken) {
      getdashdata()


    }

  }, [dtoken])
  return dashdata && (
    <div>
      <div className=' gap-5 flex justify-center m-10'>
        <div className='flex'>
          <div>
            <img src={assets.earning_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-semibold'>{dashdata.earnings}</p>
            <p className='text-gray-500'>Doctors</p>

          </div>

        </div>

        <div className='flex'>
          <div>
            <img src={assets.appointments_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-semibold'>{dashdata.appointments}</p>
            <p className='text-gray-500'>Appointments</p>

          </div>

        </div>

        <div className='flex'>
          <div>
            <img src={assets.patients_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-semibold'>{dashdata.patients}</p>
            <p className='text-gray-500'>Patients</p>

          </div>

        </div>






      </div>

      <div className='  '>
        <div className='flex  items-start m-5 gap-3'>
          <img src={assets.list_icon} alt="" />
          <p className='font-semibold '>Latest Bookings</p>
          <div className='m-0'>


            <button onClick={handlehide} className='border p-2 border-indigo shadow-2xl rounded-xl text-green-500'>{hide ? 'show' : 'Hide'}</button>


          </div>

        </div>


        {
          hide ?
            ''
            :
            <div>



              {

                dashdata?.latestAppointments?.map((item, index) => (
                  <div className='flex gap-5 justify-around mt-10' key={index}>
                    <div>

                      <img className='w-10' src={item.docData.image} alt="" />
                    </div>

                    <div>
                      <p>{item.docData.name}</p>
                      <p>Booking on {item.slotDate}</p>
                    </div>
                    <div className='m-2'>
                      <div className='flex'>


                        {
                          item.cancelled ?
                            <p className='text-red-500'>cancelled</p>
                            :
                            item.isCompleted ?
                              <p className='text-green-500'>Completed</p>
                              :
                              <div className='flex'>




                                <img onClick={() => cancelAppointment(item._id)} src={assets.cancel_icon} alt="" />



                                <img onClick={() => completeAppointment(item._id)} src={assets.tick_icon} alt="" />


                              </div>


                        }

                      </div>



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

export default DoctorDashboard
