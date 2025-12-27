import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";





export const DoctorContext = createContext()

const Doctorcontextprovider = ({ children }) => {

    const [dtoken, setdtoken] = useState(localStorage.getItem('dtoken') ? localStorage.getItem('dtoken') : '')

    // here we store all doctor appointments
    const [DoctorAppointment, setDoctorAppointment] = useState([])

    // here we store dashdata

    const [dashdata, setdashdata] = useState([])


    // Here  we store profileData of Doctor 

    const [profileData, setProfileData] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    // listing Doctor appointment as doctor specific as who login

    const getAppointments = async () => {
        try {
            const response = await axios.get(`${backendUrl}/listdoctorAppointments`, { headers: { dtoken } })
            console.log(response);
            setDoctorAppointment(response.data)



        }
        catch (err) {
            console.log(err);
            toast.error(err.response.data)

        }
    }


    const completeAppointment = async (appointmentId) => {
        try {
            const response = await axios.put(`${backendUrl}/complete-appointment`, { appointmentId }, { headers: { dtoken } })
            console.log(response);
            toast.success("Appointment completed")
            getAppointments(),
                getdashdata()   // ✅ ADD THIS



        }
        catch (err) {
            console.log(err);
            toast.error(err.response.data)

        }
    }

    // Api for cancel appointment

    const cancelAppointment = async (appointmentId) => {
        try {
            const response = await axios.put(`${backendUrl}/cancel-appointment`, { appointmentId }, { headers: { dtoken } })
            console.log(response);
            toast.success("Appointment cancelled")
            getAppointments(),
                getdashdata()   // ✅ ADD THIS



        }
        catch (err) {
            console.log(err);
            toast.error(err.response.data)

        }
    }

    // Api for get dashdata fro doctor 

    const getdashdata = async () => {
        try {
            const response = await axios.get(`${backendUrl}/get-dashdata`, { headers: { dtoken } })
            console.log(response);
            setdashdata(response.data)


        }
        catch (err) {
            console.log(err);
            toast.error(err.response.data)

        }



    }






    // Api for get doctorprofiledata

    const getDoctorProfileData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/doc-profile`, { headers: { dtoken } })
            console.log(response);
            setProfileData(response.data)


        }
        catch (err) {
            console.log(err);
            toast.error(err.response.data)

        }
    }








    const value = {
        dtoken,
        setdtoken,
        backendUrl,
        getAppointments,
        DoctorAppointment,
        completeAppointment,
        cancelAppointment, dashdata, setdashdata, getdashdata,
        profileData, getDoctorProfileData, setProfileData


    }
    return (
        <DoctorContext.Provider value={value}>
            {children}
        </DoctorContext.Provider>

    )

}

export default Doctorcontextprovider


