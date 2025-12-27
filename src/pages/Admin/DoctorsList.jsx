import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/Admincontext'

function DoctorsList() {
  const { atoken, doctor, fetchallDoctors, changeAvailability} = useContext(AdminContext)
  useEffect(() => {
    if (atoken) {
      fetchallDoctors()


    }

  }, [atoken])
  return (
    <div className='m-5 overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Doctors</h1>
      <div className='flex  w-full gap-4 pt-5'>

      {
        doctor?.map((item,index)=>(
          <div key={index}  className='border   rounded-xl  border-indigo-100 '>

            <img className='bg-indigo-50 hover:bg-blue-500' src={item.image} alt="" />
            <div className='mt-4 text-center'>
              <p className='text-lg font-medium'>{item.name}</p>
              <p className='font-serif'>{item.speciality}</p>
            </div>
            <div className='flex gap-3 mt-5 text-center justify-center p-2'>
              <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
              <p className='text-sm'>Available</p>

            </div>

          </div>

         
        ))
      }

    </div>
      </div>

    
  )
}

export default DoctorsList
