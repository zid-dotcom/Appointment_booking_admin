import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/Admincontext'
import { toast } from 'react-toastify'
import axios from 'axios'




function AddDoctor() {
  const [docimage, setDocimage] = useState(false)
  const [inp, setinp] = useState({
    name: "",
    email: "",
    password: "",
    speciality: "",
    degree: "",
    experience: "",
    about: "",
    fees: "",
    address: {
      line1: "",
      line2: "",
      

    }




  })

  const { backend_URL, atoken } = useContext(AdminContext)

  const handlesubmit = async () => {

    console.log(inp);
    try {
      if (!docimage) {
        return toast.error('image not selected')
      }

      const formData = new FormData()

      // image field
      formData.append('image', docimage)



      // text field 
      formData.append('name', inp.name)
      formData.append('email', inp.email)
      formData.append('password', inp.password)
      formData.append('speciality', inp.speciality)
      formData.append('degree', inp.degree)
      formData.append('experience', inp.experience)
      formData.append('about', inp.about)
      formData.append('fees', inp.fees)


      // object → string
      formData.append('address', JSON.stringify(inp.address))


      const response = await axios.post(`${backend_URL}/admin/add-doctor`, formData, { headers: { atoken } }

      )
      console.log(response);

      if (response.status == 201) {
        toast.success('Doctor uploaded successfully')
        setDocimage(false)
        setinp({
          name: "",
          email: "",
          password: "",
          speciality: "",
          degree: "",
          experience: "",
          about: "",
          fees: "",
          address: {
            line1: "",
            line2: "",
          }
        })

      }
      else {
        toast.error(response.data)
      }






    }
    catch (err) {
      console.log(err);
      toast.error(err.response.data)

    }

  }





  return (

    <div className='border p-5 border-white    shadow-xl m-10 '>
      <p className='text-2xl text-blue-500  font-serif' >Add Doctor</p>

      <div className='flex'>


        <div className='mt-10'>



          <label htmlFor="doc-img" >
            <img className='w-20 rounded-full' src={docimage ? URL.createObjectURL(docimage) : assets.upload_area} id='' alt="" />
          </label>
          <input onChange={(e) => setDocimage(e.target.files[0])} type="file" id='doc-img' hidden />
        </div>

        <div className='mt-16 m-3  text-xl text-blue-500'>
          <p>Upload doctor
            picture
          </p>


        </div>


      </div>

      <div className='flex m-5 p-5 w-full gap-40 justify-center'>
        <div>
          <p className='text-gray-500  font-mono'>Doctor Name</p>
          <input value={inp.name} onChange={(e) => setinp({ ...inp, name: e.target.value })} className='p-1  w-2xs  mt-3  border border-gray-300 ' type="text    
          " placeholder='Name' />


        </div>
        <div>
          <p className='text-gray-500  font-mono'>Specilaity</p>
          <select
            value={inp.speciality}
            onChange={(e) => setinp({ ...inp, speciality: e.target.value })}
            className="p-1 w-2xs mt-3 border border-gray-300 text-gray-500"
          >
            <option value="" disabled>
              Select speciality
            </option>

            <option value="General physician">General physician</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Pediatricians">Pediatricians</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Gastroenterologist">Gastroenterologist</option>
          </select>



        </div>

      </div>


      <div className='flex m-5 p-5 w-full gap-40 justify-center'>
        <div>
          <p className='text-gray-500  font-mono'>Doctor Email</p>
          <input value={inp.email} onChange={(e) => setinp({ ...inp, email: e.target.value })} className='p-1  w-2xs  mt-3  border border-gray-300 ' type="text    
          "  placeholder='Your email' />


        </div>
        <div>
          <p className='text-gray-500  font-mono'>Education</p>
          <input value={inp.degree} onChange={(e) => setinp({ ...inp, degree: e.target.value })} className='p-1  w-2xs  mt-3  border border-gray-300  ' type="text" placeholder='Education' />
        </div>

      </div>


      <div className='flex m-5 p-5 w-full gap-40 justify-center'>
        <div>
          <p className='text-gray-500  font-mono'>Doctor password</p>
          <input value={inp.password} onChange={(e) => setinp({ ...inp, password: e.target.value })} className='p-1  w-2xs  mt-3  border border-gray-300 ' type="text    
          "  placeholder='Your password' />


        </div>
        <div className='flex flex-col'>
          <p className='text-gray-500  font-mono'>Address</p>
          <input value={inp.address.line1} onChange={(e) => setinp({ ...inp, address: { ...inp.address, line1: e.target.value } })} className='p-1  w-2xs  mt-3  border border-gray-300 rounded  ' type="text" placeholder=' Address 1' />
          <input value={inp.address.line2} onChange={(e) => setinp({ ...inp, address: { ...inp.address, line2: e.target.value } })} className='p-1  w-2xs  mt-3  border border-gray-300 rounded  ' type="text" placeholder=' Address 2' />

        </div>
      </div>



      <div className='flex   m-10 p-5 w-full gap-40 '>
        <div>
          <p className='text-gray-500  font-mono'>Experiance</p>
          <select value={inp.experience} onChange={(e) => setinp({ ...inp, experience: e.target.value })} defaultValue="" className='p-1  w-2xs  mt-3  border border-gray-300  text-gray-500 ' name="" id=""   >
            <option value="" disabled>
              Experience
            </option>

            <option value="1 Year" >1 Year</option>
            <option value="2 Year">2 Year</option>
            <option value="3 Year">3 Year</option>
            <option value="4 Year">4 Year</option>
            <option value="5 Year">5 Year</option>
            <option value="6 Year">6 Year</option>
            <option value="7 Year">7 Year</option>
            <option value="8 Year">8 Year</option>
            <option value="9 Year">9 Year</option>
            <option value="10 Year">10 Year</option>









          </select>



        </div>


      </div>



      <div className='flex justify-start   m-10 p-5 w-full gap-40 '>
        <div>
          <p className='text-gray-500  font-mono'>Fees</p>
          <input value={inp.fees} onChange={(e) => setinp({ ...inp, fees: e.target.value })} className='p-1  w-2xs  mt-3  border border-gray-300 ' type="text    
          "  placeholder='Your Fees' />


        </div>


      </div>


      <div className='flex justify-start   m-10 p-5 w-full gap-40 '>
        <div>
          <p className='text-gray-500  font-mono '>About me</p>
          <textarea value={inp.about} onChange={(e) => setinp({ ...inp, about: e.target.value })} placeholder='describe  about yourself' className='border border-gray-300 w-2xl h-40 p-3 mt-3' name=" " id=""></textarea>

        </div>


      </div>

      <div className='flex justify-start m-10'>



        <button onClick={handlesubmit} className='bg-blue-500 p-3 w-30  m-2 rounded-full text-white'>AddDoctor</button>
      </div>













    </div>


  )
}

export default AddDoctor
