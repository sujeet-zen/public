import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../../../components/layout/Layout";
import { API_URL } from "../../../Config";

const Company = () => {
  const param = useParams();
  const navigate = useNavigate();
  console.log("param navigate", param, navigate);
  const [companyData, setCompanyData] = useState({
    subCompanyName: "",
    ownerName: "",
    companyMobile: "",
    companyEmail: "",
  });

  const submitHandler = async () => {
    console.log("submitHandler called");
    if (
      companyData.subCompanyName != "" && 
    companyData.ownerName != "" &&
    companyData.companyMobile != "" &&
    companyData.companyEmail != "" 
    ) {
      console.log("CALL API");

      try {
        const companyRes = await axios({
          url: API_URL + "/boat_owner/",
          method: "POST",
          data: {
            ...companyData,
          },
        });

        if (companyRes) {
          console.log("companyRes ", companyRes);
          if (companyRes?.data?.success) {
            navigate("/companies");
          }
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
      companyData.subCompanyName != "" && 
      companyData.ownerName != "" &&
      companyData.companyMobile != "" &&
      companyData.companyEmail != "" &&
      param?.id) {
      const id = param?.id;
      console.log("CALL API");
      //   const toSubmit = {
      //     ...studentData
      //   }
      try {
        const submitCompany = await axios({
          url: API_URL + `/boat_owner/${id}`,
          method: "PUT",
          data: {
            ...companyData,
          },
        });

        if (submitCompany) {
          console.log("updateHandler submitCompany ", submitCompany);
          navigate("/companies");
        }
      } catch (error) {
        console.log("API error", error);
        alert('ERROR')
      }
    } else {
      window.alert("Required Fields Missing");
    }
  };
  const getCompanyData = async () => { 
    if (param?.id) {
      const id = param?.id;
      try {
        const apiRes = await axios({
          url: API_URL + `/boat_owner/${id}`,
          method: "GET",
        });
        if (apiRes) {
          console.log("getCompanyData", apiRes);
          setCompanyData(apiRes?.data?.results);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  useEffect(() => {
    getCompanyData();
  }, [param?.id]);
  return (
    <>
      <Layout>
        <div className="sm:-mt-40 w-full">
          <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded">
            <main className=" mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Add New Company</h1>
                <Link
                  to={"/companies"}
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
                      SubCompany Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="SubCompany Name"
                      onChange={(e) => {
                        console.log("SubCompanyName", e.target.value);
                        setCompanyData({
                          ...companyData,
                          // name: "",
                          // mobile: "",
                          // gender: "",
                          // lang: "",
                          subCompanyName: e.target.value,
                        });
                      }}
                      value={companyData?.subCompanyName}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Owner Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Owner Name"
                      onChange={(e) => {
                        setCompanyData({
                          ...companyData,
                          ownerName: e.target.value,
                        });
                      }}
                      value={companyData?.ownerName}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Company Mobile
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Company Mobile"
                      onChange={(e) => {
                        setCompanyData({
                          ...companyData,
                          companyMobile: e.target.value,
                        });
                      }}
                      value={companyData?.companyMobile}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Company Email
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Company Email"
                      onChange={(e) => {
                        setCompanyData({
                          ...companyData,
                          companyEmail: e.target.value,
                        });
                      }}
                      value={companyData?.companyEmail}
                    />
                  </div>                 
                </div>
                <span
                  class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded justify-center align-self-center align-center cursor-pointer"
                  // onClick={submitHandler}
                  onClick={() => {
                    param?.id ? updateHandler() : submitHandler();
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

export default Company;

