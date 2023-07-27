import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import Table, {
  AvatarCell,
  RowActions,
  SelectColumnFilter,
  StatusPill,
} from "../../../components/Table/Table";
import { API_URL } from "../../../Config";
import { Tab, Tabs, Form } from "react-bootstrap";
// import { toast } from "react-toastify";
// import API from "../../../Redux/axios";

const Approvals = () => {
  const [tripsData, setTripsData] = useState([]);
  // const getTripsData = async () => {
  //   try {
  //     const res = await axios({
  //       url: API_URL + "/admin/trip",                     
  //     });
  //     if (res.status === 200) {
  //       console.log("res", res);
  //       setTripsData(res?.data?.results);
  //     }
  //   } catch (err) {
  //     console.log(err?.response?.data);
  //     // toast.error(err?.response?.data?.message);
  //   }
  // };

  const getTripsData = async () => {
    try {
      const res = await fetch("https://64a52b5d00c3559aa9bf319d.mockapi.io/crud")
      // https://jsonplaceholder.typicode.com/posts
      .then((res) => res.json())
      .then((data) => setTripsData(data))     

      if (res.status === 200) {
        // console.log("res", res);
        setTripsData(res?.data?.results);
      }
    } catch (err) {
      console.log('err',err);
      // toast.error(err?.response?.data?.message);      
    }
  };
 
  const columns = useMemo(
    () => [
      {
        Header: "Trip ID",
        accessor: "tripid",
        // userId
      },
      {
        Header: "Boat Name",
        accessor: "boatname",
        // title
      },
      {
        Header: "Boat Type",
        accessor: "boattype",
        // body
      },
      {
        Header: "Route",
        accessor: "route",
      },
      {
        Header: "Timing",
        accessor: "time",
      },
      {
        Header: "Capacity",
        accessor: "capacity",
      },
      {
        Header: "Seats Available",
        accessor: "seatsavail",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Pets",
        accessor: "pets",
      },
      {
        Header: "Vehicles",
        accessor: "vehicles",
      },      
      {
        Header: "Actions",
        accessor: "_id",
        Cell: RowActions,
        // api: "admin/trip",
        route: "trip",
      },
    ],
    []
  );
  useEffect(() => {
    getTripsData();
  }, []);

  const data = useMemo(() => tripsData, [tripsData]);
  return (
    <>
      <Layout>
        <div className="sm:-mt-40 w-full">
          <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded-2xl">
            <main className=" mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Approvals</h1>
                {/* <Link
                  to={"/approval"}
                  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Add New
                </Link> */}
              </div>
              <div className="mt-6">  
              <div className="flex flex-row">
              <div className="relative w-full lg:max-w-sm">
                <label>Route</label>
              <select>
  <option value="grapefruit">All</option>
  <option value="lime">One</option>
  <option selected value="coconut">Two</option>
  <option value="mango">Three</option>
</select>
                </div>    
                <div className="relative w-full lg:max-w-sm">
                <label>Route</label>
              <select>
  <option value="grapefruit">All</option>
  <option value="lime">One</option>
  <option selected value="coconut">Two</option>
  <option value="mango">Three</option>
</select>
                </div> 
                <div className="relative w-full lg:max-w-sm">
                <label>Route</label>
              <select>
  <option value="grapefruit">All</option>
  <option value="lime">One</option>
  <option selected value="coconut">Two</option>
  <option value="mango">Three</option>
</select>
                </div>    
                </div>                                         
                <Table columns={columns} data={data} />                
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Approvals;
