import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/Admincontext'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'

function AllAppointment() {

  const { atoken, getAllAppointments, Appointments, Setappointments , backend_URL,handleCancelAppointment} = useContext(AdminContext)
  useEffect(() => {

    if (atoken) {
      getAllAppointments()

    




    }


  }, [atoken])


  return (

    <div className=''>
     

      <h2 className='font-semibold text-xl text-blue-500 m-3'>All Appointmets</h2>

      <div className=' p-2 m-3 mt-10'>
        <table className=''>
          <thead className='text-sm text-gray-600 font-light    uppercase    '>
            <tr className=''>
              <th className='px-6 py-3'>#</th>
              <th className='px-6 py-3'>patient</th>
              <th className='px-6 py-3 '>Date and time</th>
              <th className='px-6 py-3'>Doctor</th>
              <th className='px-6 py-3'>fees</th>
              <th className='px-6 py-3'>Actions</th>

            </tr>

          </thead>



          {/* tbody */}

          <tbody className='text-center'>
            {
              Appointments.map((item, index) => (
                <tr key={item._id}>
                  <td className='px-6 py-3 '>{index + 1}</td>
                  <td className='px-6 py-3'>
                    <div className='flex  gap-2'>
                      <div className=''>
                        <img className='w-10 rounded-full h-10' src={item.userData.image} alt="" />

                      </div >
                      <div className='mt-2'>
                        {item.userData.name}


                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-3'>{item.slotDate} | {item.slotTime}</td>
                  <td className='px-6 py-3'>
                    <div className='flex gap-2'>

                      <div>
                        <img className='w-10 h-10' src={item.docData.image} alt="" />

                      </div>
                      <div className='mt-2'>
                        {item.docData.name}

                      </div>
                    </div>

                  </td>
                  <td className='px-6 py-3'>{item.docData.fees}</td>
                  {
                    item.cancelled ?

                      <td>
                        <button className='text-red-500'>cancelled</button>

                      </td>

                      :
                      <td className='px-6 py-3'>
                        <img onClick={()=>handleCancelAppointment(item._id)} src={assets.cancel_icon} alt="" />

                      </td>
                  }

                </tr>

              ))
            }

          </tbody>
        </table>

      </div>



    </div>




  )
}

export default AllAppointment
