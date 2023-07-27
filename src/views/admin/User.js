import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../components/layout/Layout";
import API from "../../Redux/axios";

const User = () => {
  const [userStatus, setUserStatus] = useState(false);
  const initialState = {
    name: "",
    username: "",
    password: "",
    email: "",
    mobile: "",
    role: "",
    vetRegNo: "",
    userType: "vet",
  };
  const navigate = useNavigate();
  const [submitData, setSubmitData] = useState(initialState);
  const submitUserData = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/admin/user", submitData);

      if (res.status === 200) {
        if (res?.data?.success) {
          toast.success("Details submitted successfully!!!");
          navigate("/users");
        }
      }
    } catch (err) {
      console.log(err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
    }
  };
  console.log(submitData);
  return (
    <>
      <Layout>
        <div className="sm:-mt-40 w-full">
          <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded">
            <main className=" mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Add New User</h1>
                <Link
                  to={"/users"}
                  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  See all
                </Link>
              </div>
              <div className="mt-6">
                <div class="grid grid-cols-1 sm:grid-cols-4 gap-1 sm:gap-5 justify-center max-w-4xl m-auto">
                  <div className="col-span-1 sm:col-span-4 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                      name="name"
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Username"
                      name="username"
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      name="password"
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email ID
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email ID"
                      name="email"
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Mobile No
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Mobile No"
                      name="mobile"
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      User Type
                    </label>
                    <select
                      name="userType"
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    >
                      <option value="vet" selected>
                        Vet
                      </option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  {submitData?.userType === "vet" && (
                    <div className="col-span-1 sm:col-span-2 relative mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Veterinarians registration number
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Veterinarians registration number"
                        name="vetRegNo"
                        onChange={(e) =>
                          setSubmitData({
                            ...submitData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  )}

                  {/* <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      GENDER
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="GENDER"
                      name="gender"
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div> */}
                  {/* <div className="col-span-1 sm:col-span-2 relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    BREED
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="BREED"
                    // value={}
                    // onChange={(e) => }
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    VETADDRESS
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="VETADDRESS"
                    // value={}
                    // onChange={(e) => }
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    DATE OF BIRTH
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="DATE OF BIRTH"
                    // value={}
                    // onChange={(e) => }
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    VET LATITUDE
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="VET LATITUDE"
                    // value={}
                    // onChange={(e) => }
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    GENDER
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="GENDER"
                    // value={}
                    // onChange={(e) => }
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    VET LONGITUDE
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="VET LONGITUDE"
                    // value={}
                    // onChange={(e) => }
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    OWNER'S NAME
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="OWNER'S NAME"
                    // value={}
                    // onChange={(e) => }
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    LIC NO
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="LIC NO"
                    // value={}
                    // onChange={(e) => }
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    ADDRESS
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="ADDRESS"
                    // value={}
                    // onChange={(e) => }
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    LIC NAME
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="LIC NAME"
                    // value={}
                    // onChange={(e) => }
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    CONTACT NUM
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="CONTACT NUM"
                    // value={}
                    // onChange={(e) => }
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 relative mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    PUBLIC DATA VIEW
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="PUBLIC DATA VIEW"
                    // value={}
                    // onChange={(e) => }
                  />
                </div> */}
                  <div className="col-span-1 sm:col-span-4 relative mb-3">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => {
                        submitUserData(e);
                      }}
                    >
                      Create User
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default User;
