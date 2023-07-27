import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../../../components/layout/Layout";
import { API_URL } from "../../../Config";

const Policy = () => {
  const param = useParams();
  const navigate = useNavigate();
  console.log("param navigate", param, navigate);
  const [tripData, setTripData] = useState({
    name: "",
    photo: "",
  });

  const submitHandler = async () => {
    console.log("submitHandler called");
    if (tripData.name != "" && 
    tripData.photo != "" &&
    tripData.description != "" &&
    tripData.trip_id != "" ) {
      console.log("CALL API");

      try {
        const tripRes = await axios({
          url: API_URL + "/admin/trip",
          method: "POST",
          data: {
            ...tripData,
          },
        });

        if (tripRes) {
          console.log("tripRes ", tripRes);
          if (tripRes?.data?.success) {
            navigate("/trips");
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
    if (tripData.name != "" && 
    tripData.photo != "" &&
    tripData.description != "" &&
    tripData.trip_id != "" &&
      param?.id) {
      const id = param?.id;
      console.log("CALL API");
      //   const toSubmit = {
      //     ...studentData
      //   }
      try {
        const submitTrip = await axios({
          url: API_URL + `/admin/trip/${id}`,
          method: "PUT",
          data: {
            ...tripData,
          },
        });

        if (submitTrip) {
          console.log("updateHandler submitTrip ", submitTrip);
          navigate("/trips");
        }
      } catch (error) {
        console.log("API error", error);
        alert('ERROR')
      }
    } else {
      window.alert("Required Fields Missing");
    }
  };
  const getTripData = async () => {
    if (param?.id) {
      const id = param?.id;
      try {
        const apiRes = await axios({
          url: API_URL + `/admin/trip/${id}`,
          method: "GET",
        });
        if (apiRes) {
          console.log("getTripData", apiRes);
          setTripData(apiRes?.data?.results);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  useEffect(() => {
    getTripData();
  }, [param?.id]);
  return (
    <>
      <Layout>
        <div className="sm:-mt-40 w-full">
          <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded-2xl">
            <main className=" mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Add New Policy</h1>
                <Link
                  to={"/policies"}
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
                      Trip ID
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="TripID"
                      onChange={(e) => {
                        console.log("TripID", e.target.value);
                        setTripData({
                          ...tripData,
                          // name: "",
                          // mobile: "",
                          // gender: "",
                          // lang: "",
                          tripid: e.target.value,
                        });
                      }}
                      value={tripData?.tripid}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Boat Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="BoatName"
                      onChange={(e) => {
                        setTripData({
                          ...tripData,
                          boatname: e.target.value,
                        });
                      }}
                      value={tripData?.boatname}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Boat Type
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="BoatType"
                      onChange={(e) => {
                        setTripData({
                          ...tripData,
                          boattype: e.target.value,
                        });
                      }}
                      value={tripData?.boattype}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Route
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Route"
                      onChange={(e) => {
                        setTripData({
                          ...tripData,
                          route: e.target.value,
                        });
                      }}
                      value={tripData?.route}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Timing
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Timing"
                      onChange={(e) => {
                        setTripData({
                          ...tripData,
                          time: e.target.value,
                        });
                      }}
                      value={tripData?.time}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Capacity
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Capacity"
                      onChange={(e) => {
                        setTripData({
                          ...tripData,
                          capacity: e.target.value,
                        });
                      }}
                      value={tripData?.capacity}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Seats Available
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="SeatsAvailable"
                      onChange={(e) => {
                        setTripData({
                          ...tripData,
                          seatsavail: e.target.value,
                        });
                      }}
                      value={tripData?.seatsavail}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Status
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Status"
                      onChange={(e) => {
                        setTripData({
                          ...tripData,
                          status: e.target.value,
                        });
                      }}
                      value={tripData?.status}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Pets
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Pets"
                      onChange={(e) => {
                        setTripData({
                          ...tripData,
                          pets: e.target.value,
                        });
                      }}
                      value={tripData?.pets}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Vehicles
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Vehicles"
                      onChange={(e) => {
                        setTripData({
                          ...tripData,
                          vehicles: e.target.value,
                        });
                      }}
                      value={tripData?.vehicles}
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

export default Policy;
