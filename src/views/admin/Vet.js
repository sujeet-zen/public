import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const Vet = () => {
  const [userStatus, setUserStatus] = useState(false);
  const initialState = {
    status: "",
    name: "",
    username: "",
    email: "",
    mobile: "",
    gender: "",
    address: "",
    addLat: "",
    addLng: "",
    licNo: "",
    licName: "",
    contactNo: "",
    status: "",
    name: "",
    username: "",
    email: "",
    mobile: "",
    gender: "",
    address: "",
    addLat: "",
    addLng: "",
    licNo: "",
    licName: "",
    contactNo: "",
    vetRegNo: "",
  };
  const navigate = useNavigate();
  const [submitData, setSubmitData] = useState(initialState);
  const submitVetData = () => {
    setSubmitData({
      ...submitData,
      status: "INACTIVE",
    });
    fetch("http://localhost:3001/vets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    }).then(() => {
      setSubmitData(initialState);
      navigate("/vets");
    });
    console.log(submitData);
  };
  return (
    <>
      <Layout>
        <div className="sm:-mt-40 w-full">
          <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded">
            <main className=" mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Add New Vet</h1>
                <Link
                  to={"/vets"}
                  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  See all
                </Link>
              </div>
              <div className="mt-6">
                <div class="grid grid-cols-1 sm:grid-cols-4 gap-1 sm:gap-5 justify-center max-w-4xl m-auto">
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Status
                    </label>
                    <div className="inline-flex relative items-center mr-5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={userStatus}
                        readOnly
                      />
                      <div
                        onClick={() => {
                          setUserStatus(!userStatus);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dark-purple"
                      ></div>
                      <span className="ml-2 text-sm font-medium text-gray-900">
                        {userStatus ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
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
                      // value={}
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
                  </div>
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
                      name="address"
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  {/* <div className="col-span-1 sm:col-span-2 relative mb-3">
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
                </div> */}
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Address LATITUDE
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Address LATITUDE"
                      name="addLat"
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
                      Address LONGITUDE
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Address LONGITUDE"
                      name="addLng"
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
                      LIC NO
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="LIC NO"
                      name="licNo"
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
                      LIC NAME
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="LIC NAME"
                      name="licName"
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
                      CONTACT NUM
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="CONTACT NUM"
                      name="contactNo"
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-4 relative mb-3">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        submitVetData();
                      }}
                    >
                      Create Vet
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

export default Vet;
