import React, { useContext, useState } from "react";
import { toast } from 'react-toastify'
import { AdminContext } from "../context/Admincontext";
import axios from 'axios'
import { DoctorContext } from "../context/Doctorcontext";


function Login() {
  const { backend_URL, atoken, setAtoken } = useContext(AdminContext)
  const { dtoken, setdtoken } = useContext(DoctorContext)
  const [inp, setinp] = useState({
    email: "", password: ""
  })


  const [state, setstate] = useState('Admin')

  const handleAdminLogin = async () => {
    try {
      if (state == "Admin") {

        const { email, password } = inp


        if (!email || !password) {
          return toast.warning("please fill all fields ")



        } else {
          const response = await axios.post(`${backend_URL}/adminlogin`, (inp))
          console.log(response);

          localStorage.setItem('aToken', response.data.token)
          setAtoken(response.data.token)




        }


      }
      else {
        const response = await axios.post(`${backend_URL}/doctorlogin`, (inp))
        console.log(response);
        console.log(response.data.token);

        localStorage.setItem('dtoken', response.data.token)
        setdtoken(response.data.token)


      }


    }
    catch (err) {
      console.log(err);
      toast.error(err.response.data.message)



    }


  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-xl text-sm text-gray-500 border border-gray-200 p-8 py-12 w-full max-w-sm">

        <p className="text-2xl font-medium text-center">
          <span className="text-indigo-500">{state}</span> Login
        </p>





        <div className="mt-4">
          <label className="block">Email</label>
          <input onChange={(e) => setinp({ ...inp, email: e.target.value })}
            type="email"
            placeholder="type here"
            required
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
          />
        </div>

        <div className="mt-4">
          <label className="block">Password</label>
          <input onChange={(e) => setinp({ ...inp, password: e.target.value })}
            type="password"
            placeholder="type here"
            required
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
          />
        </div>

        {
          state == "Admin"
            ?
            <p className="mt-4">
              Doctor Login Account?{" "}
              <a onClick={() => setstate('Doctor')} href="#" className="text-indigo-500">
                Click here
              </a>
            </p>
            :
            <p className="mt-4">
              Admin Login Account?{" "}
              <a onClick={() => setstate('Admin')} href="#" className="text-indigo-500">
                Click here
              </a>
            </p>




        }



        <button onClick={handleAdminLogin}
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md mt-4 cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>











  );
}

export default Login;
