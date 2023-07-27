import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../../components/layout/Layout";

const Student = () => {
  const param = useParams();
  const navigate = useNavigate();
  console.log("param", param);
  const [studentData, setStudentData] = useState({
    name: "",
    mobile: "",
    gender: "",
    lang: "",
  });

  const submitHandler = async () => {
    console.log("submitHandler called");
    if (
      studentData.name != "" &&
      studentData.mobile != "" &&
      studentData.gender != ""
    ) {
      console.log("CALL API");
      //   const toSubmit = {
      //     ...studentData
      //   }
      try {
        const submitStudent = await axios({
          url: "http://localhost:5000/students",
          method: "POST",
          data: {
            ...studentData,
          },

          //   data:studentData
        });

        if (submitStudent) {
          console.log("submitStudent ", submitStudent);
        }
      } catch (error) {
        console.log("API error", error);
      }
    } else {
      window.alert("Required Fields Missing");
    }
  };

  const updateHandler = async () => {
    console.log("updateHandler called");
    if (
      studentData.name != "" &&
      studentData.mobile != "" &&
      studentData.gender != "" &&
      param?.stuid
    ) {
      const id = param?.stuid;
      console.log("CALL API");
      //   const toSubmit = {
      //     ...studentData
      //   }
      try {
        const submitStudent = await axios({
          url: `http://localhost:5000/students/${id}`,
          method: "PUT",
          data: {
            ...studentData,
          },
        });

        if (submitStudent) {
          console.log("updateHandler submitStudent ", submitStudent);
          navigate("/students");
        }
      } catch (error) {
        console.log("API error", error);
      }
    } else {
      window.alert("Required Fields Missing");
    }
  };
  const getStudent = async () => {
    if (param?.stuid) {
      const id = param?.stuid;
      try {
        const getStudentData = await axios({
          url: `http://localhost:5000/students/${id}`,
          method: "GET",
        });
        if (getStudentData) {
          console.log("getStudentData", getStudentData);
          setStudentData(getStudentData?.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  useEffect(() => {
    getStudent();
  }, [param?.stuid]);
  return (
    <>
      <Layout>
        <div className="sm:-mt-40 w-full">
          <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded">
            <main className=" mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Add New User</h1>
                <Link
                  to={"/students"}
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
                      First Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="First Name"
                      onChange={(e) => {
                        console.log("NAME", e.target.value);
                        setStudentData({
                          ...studentData,
                          // name: "",
                          // mobile: "",
                          // gender: "",
                          // lang: "",
                          name: e.target.value,
                        });
                      }}
                      value={studentData?.name}
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
                      onChange={(e) => {
                        setStudentData({
                          ...studentData,
                          mobile: e.target.value,
                        });
                      }}
                      value={studentData?.mobile}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Gender
                    </label>
                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => {
                        setStudentData({
                          ...studentData,
                          gender: e.target.value,
                        });
                      }}
                      value={studentData?.gender}
                    >
                      <option>Please Select</option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                    </select>
                  </div>{" "}
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Language
                    </label>
                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => {
                        setStudentData({
                          ...studentData,
                          lang: e.target.value,
                        });
                      }}
                      value={studentData?.lang}
                    >
                      <option>Please Select</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Marathi">Marathi</option>
                      <option value="English">English</option>
                    </select>
                  </div>
                </div>
                <span
                  class="flex flex-row bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded justify-center align-self-center align-center cursor-pointer"
                  // onClick={submitHandler}
                  onClick={() => {
                    param?.stuid ? updateHandler() : submitHandler();
                  }}
                >
                  Submit
                </span>
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Student;
