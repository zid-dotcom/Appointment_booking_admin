import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/Doctorcontext'
import { assets } from '../../assets/assets'

function DoctorAppointments() {
  const { getAppointments, dtoken, DoctorAppointment, cancelAppointment, completeAppointment } = useContext(DoctorContext)
 
  
  useEffect(() => {

    if (dtoken) {
      getAppointments()
    }
  }, [dtoken])
  return (

    <div className='m-10'>
      <div>
        <p>All Appointments</p>

      </div>

      <div className='border p-2 mt-4 border-indigo-100 shadow-xl'>
        <table>
          <thead className='border-b w-full border-indigo-200'>

            <tr className='text-gray-600  '>
              <th className='py-6 px-3 '>#</th>
              <th className='py-6 px-3'>patient</th>
              <th className='py-6 px-3'>payment</th>
              <th className='py-6 px-3'>DOB</th>
              <th className='py-6 px-3'>Date&Time</th>
              <th className='py-6 px-3'>Fees</th>
              <th className='py-6 px-3'>Action</th>
            </tr>
          </thead>

          <tbody className='border-b w-full border-indigo-200'>

            {
              DoctorAppointment.map((item, index) => (
                <tr key={index} className='border-b border-indigo-200 m-2'>
                  <td className='py-6 px-3  '>{index + 1}</td>
                  <td className='py-6 px-3  '>
                    <div className='flex gap-2'>
                      <div className='mt-1' >

                        <img className='w-10 ' src={item.userData.image} alt="" />
                      </div>
                      <div className='mt-2 '>
                        {item.userData.name}
                      </div>

                    </div>
                  </td>
                  <td className='py-6 px-3'>{item.payment ? 'online' : 'cash'}</td>
                  <td className='py-6 px-3'>{item.userData.dob}</td>
                  <td className='px-6 py-3'>{item.slotDate} | {item.slotTime}</td>


                  <td className='py-6 px-3'>{item.docData.fees}</td>
                   <td>
                   <div className='flex'>
                     

                        {
                          item.cancelled?
                          <p className='text-red-500'>cancelled</p>
                          :
                          item.isCompleted?
                          <p className='text-green-500'>Completed</p>
                          :
                            <div className='flex'>


                       
                       
                        <img onClick={() => cancelAppointment(item._id)} src={assets.cancel_icon} alt="" />

                      
                      
                        <img onClick={() => completeAppointment(item._id)} src={assets.tick_icon} alt="" />

                      
                    </div>
                          

                        }
                    
                      </div>

                  </td>

                </tr>

              ))


            }

          </tbody>

        </table>
      </div>




    </div>
  )
}

export default DoctorAppointments
