

import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

 

export const AdminContext = createContext()

const AdminContextprovider = ({ children }) => {
  const [atoken, setAtoken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
//   const [atoken, setAtoken] = useState('')
// const [authLoading, setAuthLoading] = useState(true)


// useEffect(() => {
//   const token = localStorage.getItem('aToken')
//   if (token) {
//     setAtoken(token)
//   }
//   setAuthLoading(false)
// }, [])


  // getting all ApointmentsData here  in Appointments
  const [Appointments, Setappointments] = useState([])
 
  

  // geting All dashaData here

  const [dashData,setdashData]=useState([])


  // feching doctors data and saving in this doctor state

  const [doctor, setdoctor] = useState([])
  const backend_URL = import.meta.env.VITE_BACKEND_URL

  //  fetching all doctors data here

  const fetchallDoctors = async () => {
    try {
      const { data } = await axios.get(`${backend_URL}/adminlistdoctor`, { headers: { atoken } })
      setdoctor(data)
       
      console.log(data);


    }
    catch (err) {
      console.log(err);
      toast.error("data not found something went wrong!!")


    }

  }


  // Api for changing availability




  const changeAvailability = async (id) => {
    try {
      const response = await axios.post(
        `${backend_URL}/change-availability/${id}`,
        {}, // body (empty)
        { headers: { atoken } } // headers
      );

      if (response.status === 200) {
        toast.success("availability changed");
        fetchallDoctors();
      }

    } catch (err) {
      console.log(err);
      toast.error("something went wrong");
    }
  };



  const getAllAppointments = async () => {
    try {
      const response = await axios.get(`${backend_URL}/getAllappointment`, { headers: { atoken } })
      console.log(response);
      Setappointments(response.data)


    }
    catch (err) {
      console.log(err);
      toast.error(response.err.message)

    }
  }


  
  const handleCancelAppointment=async(appointmentId )=>{
    try{
      const response=await axios.put(`${backend_URL}/AdmincancelAppointment`,{appointmentId },{headers:{atoken}})
      console.log(response);
       getAllAppointments()
      toast.success("Appointment cancelled successfully")
         getDashData()   // 🔥 refresh dashboard

      

    }
    catch(err){
      console.log(err);
      toast.error(err.response.message)
      
    }
  }

  const getDashData=async()=>{
    try{
      const response=await axios.get(`${backend_URL}/getDashData`,{headers:{atoken}})
      console.log(response);
      setdashData(response.data)
      

    }
    catch(err){
      console.log(err.response.message);
      
    }
  }





  const value = {

    atoken, setAtoken,
    backend_URL,
    doctor,
    fetchallDoctors, changeAvailability,
    getAllAppointments,
    Appointments, handleCancelAppointment,Setappointments,getDashData,dashData,


  }
  return (
    <AdminContext.Provider value={value}>
      {children}

    </AdminContext.Provider>
  )


}

export default AdminContextprovider


