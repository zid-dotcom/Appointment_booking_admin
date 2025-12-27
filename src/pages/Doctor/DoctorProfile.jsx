import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { DoctorContext } from '../../context/Doctorcontext'
import { toast } from 'react-toastify'
import axios from 'axios'




function DoctorProfile() {


  const { profileData, dtoken, getDoctorProfileData, setProfileData, backendUrl } = useContext(DoctorContext)
  const [isEdit, setIsEdit] = useState(false)



  useEffect(() => {
    if (dtoken) {
      getDoctorProfileData()


    }

  }, [dtoken])


  // Api to update DoctorProfile 


  const updateDoctorprofile = async () => {
    try {
      const updateData = {
        name: profileData.name,
        speciality: profileData.speciality,
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
        about: profileData.about



      }
      const response = await axios.put(`${backendUrl}/updateDoc-profile`,  updateData , { headers: { dtoken } })
      console.log(response);
      toast.success("updated successfully")
      setIsEdit(false)


    }
    catch (err) {
      console.log(err);
      toast.error(err.response.data)

    }
  }

  return (
    <div className='flex flex-col items-center justify-center border p-2 border-indigo-200 shadow-xl m-5 bg-indigo-50'>
      <img src={profileData.image} alt="" />
      {
        isEdit ?
          <input value={profileData.name} onChange={(e) => setProfileData({ ...profileData, name: e.target.value })} className='border p-1 text-center border-indigo-200 mt-2  rounded' type="text" />
          :
          <p > Name : {profileData.name}</p>


      }
      {
        isEdit ?
          <input value={profileData.speciality} onChange={(e) => setProfileData({ ...profileData, speciality: e.target.value })} className='border p-1 text-center border-indigo-200 mt-2  rounded' type="text" />
          :
          <p className='mt-3' > Speciality: {profileData.speciality}</p>



      }
      {
        isEdit ?
          <input value={profileData.fees} onChange={(e) => setProfileData({ ...profileData, fees: e.target.value })} className='border p-1 text-center border-indigo-200 mt-2  rounded' type="text" />
          :
          <p className='mt-3' > Fees : {profileData.fees}</p>



      }

      {
        isEdit
          ?
          <input value={profileData.experience} onChange={(e) => setProfileData({ ...profileData, experience: e.target.value })} className='border p-1 text-center border-indigo-200 mt-2  rounded' type="text" />

          :
          <p className='mt-4'>Experience : {profileData.experience}</p>



      }
      {/* ADDRESS */}
      {isEdit ? (
        <>
          <input
            value={profileData?.address?.line1 || ""}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                address: {
                  ...profileData.address,
                  line1: e.target.value
                }
              })
            }
            className="border p-1 text-center rounded mt-2 border-indigo-200"
          />
          <input
            value={profileData?.address?.line2 || ""}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                address: {
                  ...profileData.address,
                  line2: e.target.value
                }
              })
            }
            className="border border-indigo-200 p-1 text-center rounded mt-2"
          />
        </>
      ) : (
        <p className="mt-2">
          Address: {profileData?.address?.line1},{" "}
          {profileData?.address?.line2}
        </p>
      )}




      <br />
      {/* AVAILABLE */}
      <div className="mt-3 flex items-center gap-2">
        <input
          type="checkbox"
          checked={profileData?.available || false}
          onChange={(e) =>
            setProfileData({
              ...profileData,
              available: e.target.checked
            })
          }
        />
        <label>Available</label>
      </div>

      {isEdit ? (
        <textarea
          value={profileData?.about || ""}
          onChange={(e) =>
            setProfileData({ ...profileData, about: e.target.value })
          }
          className="border border-indigo-200 rounded mt-2 p-2 w-full"
          rows={4}
        />
      ) : (
        <p className="text-justify max-w-xl leading-relaxed text-gray-600 mt-4">
          About : {profileData?.about}
        </p>
      )}




      {
        isEdit ?
          <button onClick={updateDoctorprofile} className='border p-2 w-20 rounded-2xl mt-3 bg-black text-white hover:bg-blue-500'>Save</button>
          :
          <button onClick={() => setIsEdit(true)} className='border p-2 w-20 rounded-2xl bg-black text-white hover:bg-blue-500'>Edit</button>




      }


    </div>
  )
}

export default DoctorProfile
