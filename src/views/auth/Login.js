import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import localStorage from "redux-persist/es/storage";
import LoginBG from "../../assets/images/loginBg.jpg";
import API from "../../Redux/axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setIsLoggedIn, setLoggedInUser } from "../../Redux/Slice/LoginSlice";

const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const [submitData, setSubmitData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const username = useSelector((state) => state.login.username);

  const submitLoginData = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/token/", submitData);
  
      if (res.status === 200 && res?.data?.access) {
        localStorage.setItem("token", res.data.access);
        // localStorage.setItem("role", res?.data?.roles?.[0]); // You can add this if needed  
        toast.success("Login successful!", {
          autoClose: 1000, // 3 seconds
          // hideProgressBar: true,
        });
  
        // Dispatch the actions to update the Redux store        
        dispatch(setIsLoggedIn(true)); // Set isLoggedIn to true
        dispatch(setLoggedInUser(submitData.username)); // Set the username from the form data
  
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err?.response?.data?.message);
      toast.error("Login failed!!! " + err?.response?.data?.message);
    }
  };
  
  return (
    <>
      <div
        className={`w-screen h-screen`}
        style={{ backgroundImage: `url(${LoginBG})` }}
      >
        <div className="container mx-auto">
          <div className="flex w-11/12 m-auto max-w-md h-screen justify-center items-center">
            <div className="h-max w-full bg-white shadow-md rounded-xl p-10">
              <p className="text-2xl mb-5 font-bold text-center">Log In</p>
              <form class=" mb-4">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={submitData?.username}
                    onChange={(e) =>
                      setSubmitData({
                        ...submitData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    value={submitData?.password}
                    type="password"
                    placeholder="******************"
                    name="password"
                    onChange={(e) =>
                      setSubmitData({
                        ...submitData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  {/* <p class="text-red-500 text-xs italic">
                    Please choose a password.
                  </p> */}
                </div>
                <div class="flex items-center justify-between">
                  <div className="flex flex-col">
                    <Link
                      to="/"
                      class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-dark-purple"
                    // href="#"
                    >
                      Forgot Password?
                    </Link>
                    {/* <Link
                      to="/"
                      class="inline-block align-baseline font-bold text-xs text-gray-500 hover:text-dark-purple"
                      // href="#"
                    >
                      Create new account
                    </Link> */}
                  </div>
                  {/* <Link
                    to="dashboard"
                    class="bg-blue-500 hover:bg-dark-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  > */}
                  <button
                    className="bg-blue-500 hover:bg-dark-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={(e) => submitLoginData(e)}
                  // onClick={(e) => submitLoginData(e), res.status == 200 ? navigate('/dashboard') : navigate('/')}
                  >
                    Sign In
                  </button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
