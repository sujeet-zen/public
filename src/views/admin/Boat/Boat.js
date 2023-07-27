import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../../../components/layout/Layout";
import { API_URL } from "../../../Config";

const Boat = () => {
  const param = useParams();
  const navigate = useNavigate();
  console.log("param navigate", param, navigate);
  const [boatData, setBoatData] = useState({   
    numberData: "",
    nameData: "",
    boatCategoryData: "",
    propulsionTypeData: "",
    boatTypeData: "",
    ownedData: "",
    cruiseData: "",
    fuelData: "",
    boatOwnerData: "",
  });
  // const header = { "Access-Control-Allow-Origin": "*"}; 

  // const [numberData, setNumberData] = useState("");
  // const [nameData, setNameData] = useState("");
  // const [boatCategoryData, setBoatCategoryData] = useState("");
  // const [propulsionTypeData, setPropulsionTypeData] = useState("");
  // const [boatTypeData, setBoatTypeData] = useState("");
  // const [ownedData, setOwnedData] = useState("");
  // const [cruiseData, setCruiseData] = useState("");
  // const [fuelData, setFuelData] = useState("");
  // const [boatOwnerData, setBoatOwnerData] = useState("");  

  const submitHandler = async () => {
    console.log("submitHandler called");
    if (
      boatData.numberData !== "" && 
    boatData.nameData !== "" &&
    boatData.boatCategoryData !== "" &&
    boatData.propulsionTypeData !== "" && 
    boatData.boatTypeData !== "" &&
    boatData.ownedData !== "" &&
    boatData.cruiseData !== "" &&
    boatData.fuelData !== "" &&
    boatData.boatOwnerData !== ""     
    ) {
      console.log("CALL API");

      try {
        const boatRes = await axios({
          url: API_URL + "/boat/",
          method: "POST",
          data: {
            ...boatData,
          },
        });

        if (boatRes) {
          console.log("boatRes ", boatRes);
          if (boatRes?.data?.success) {
            navigate("/boats");
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
      boatData.numberData !== "" && 
    boatData.nameData !== "" &&
    boatData.boatCategoryData !== "" &&
    boatData.propulsionTypeData !== "" && 
    boatData.boatTypeData !== "" &&
    boatData.ownedData !== "" &&
    boatData.cruiseData !== "" &&
    boatData.fuelData !== "" &&
    boatData.boatOwnerData !== "" &&
      param?.id) {
      const id = param?.id;
      console.log("CALL API");
      //   const toSubmit = {
      //     ...studentData
      //   }
      try {
        const submitBoat = await axios({
          url: API_URL + `/boat/${id}`,
          method: "PUT",
          data: {
            ...boatData,
          },
        });

        if (submitBoat) {
          console.log("updateHandler submitBoat ", submitBoat);
          navigate("/boats");
        }
      } catch (error) {
        console.log("API error", error);
        alert('ERROR')
      }
    } else {
      window.alert("Required Fields Missing");
    }
  };
  const getBoatData = async () => {
    if (param?.id) {
      const id = param?.id;
      try {
        const apiRes = await axios({
          url: API_URL + `/boat/${id}`,
          method: "GET",
        });
        if (apiRes) {
          console.log("getBoatData", apiRes);
          setBoatData(apiRes?.data?.results);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  useEffect(() => {
    getBoatData();
  }, [param?.id]);
  return (
    <>
      <Layout>
        <div className="sm:-mt-40 w-full">
          <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded">
            <main className=" mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Add New Boat</h1>
                <Link
                  to={"/boats"}
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
                      Number
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Number"
                      onChange={(e) => {
                        console.log("Number", e.target.value);
                        setBoatData({
                          ...boatData,
                          // name: "",
                          // mobile: "",
                          // gender: "",
                          // lang: "",
                          numberData: e.target.value,
                        });
                      }}
                      // onChange={(e) => setNumberData(e.target.value)}                      
                      value={boatData?.numberData}
                    />
                  </div>                  
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                       Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="BoatName"
                      onChange={(e) => {
                        setBoatData({
                          ...boatData,
                          nameData: e.target.value,
                        });
                      }}
                      value={boatData?.nameData}
                      // onChange={(e) => setNameData(e.target.value)}
                      // value={nameData}
                    />
                  </div>                  
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Boat Category
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Boat Category"
                      onChange={(e) => {
                        setBoatData({
                          ...boatData,
                          boatCategoryData: e.target.value,
                        });
                      }}
                      value={boatData?.boatCategoryData}
                      // onChange={(e) => setBoatCategoryData(e.target.value)}
                      // value={boatCategoryData}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Propulsion Type
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Route"
                      onChange={(e) => {
                        setBoatData({
                          ...boatData,
                          propulsionTypeData: e.target.value,
                        });
                      }}
                      value={boatData?.propulsionTypeData}
                      // onChange={(e) => setPropulsionTypeData(e.target.value)}
                      // value={propulsionTypeData}
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
                      placeholder="Timing"
                      onChange={(e) => {
                        setBoatData({
                          ...boatData,
                          boatTypeData: e.target.value,
                        });
                      }}
                      value={boatData?.boatTypeData}
                      // onChange={(e) => setBoatTypeData(e.target.value)}
                      // value={boatTypeData}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Owned
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Capacity"
                      onChange={(e) => {
                        setBoatData({
                          ...boatData,
                          ownedData: e.target.value,
                        });
                      }}
                      value={boatData?.ownedData}
                      // onChange={(e) => setOwnedData(e.target.value)}
                      // value={ownedData}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Cruising Speed
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="SeatsAvailable"
                      onChange={(e) => {
                        setBoatData({
                          ...boatData,
                          cruiseData: e.target.value,
                        });
                      }}
                      value={boatData?.cruiseData}
                      // onChange={(e) => setCruiseData(e.target.value)}
                      // value={cruiseData}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Fuel Consumption
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Status"
                      onChange={(e) => {
                        setBoatData({
                          ...boatData,
                          fuelData: e.target.value,
                        });
                      }}
                      value={boatData?.fuelData}
                      // onChange={(e) => setFuelData(e.target.value)}
                      // value={fuelData}
                    />
                  </div>
                  <div className="col-span-1 sm:col-span-2 relative mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Boat Owner
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Pets"
                      onChange={(e) => {
                        setBoatData({
                          ...boatData,
                          boatOwnerData: e.target.value,
                        });
                      }}
                      value={boatData?.boatOwnerData}
                      // onChange={(e) => setBoatOwnerData(e.target.value)}
                      // value={boatOwnerData}
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

export default Boat;
