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

import { DateRange } from "react-date-range";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import AddNewTrip from "./AddNewTrip";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRef } from "react";

const Trips = () => {
  const [tripsData, setTripsData] = useState([]);
  const [show, setShow] = useState(false);
  const [openTab, setOpenTab] = useState(1);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

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

//   const getTripsData = async () => {
//     try {
//       const res = await fetch(
//         "https://64a52b5d00c3559aa9bf319d.mockapi.io/crud"
//       )
//         // https://jsonplaceholder.typicode.com/posts
//         .then((res) => res.json())
//         .then((data) => setTripsData(data));

// //       if (res.status === 200) {
// //         // console.log("res", res);
// //         setTripsData(res?.data?.results);
// //       }
// //     } catch (err) {
// //       console.log("err", err);
// //       // toast.error(err?.response?.data?.message);
// //     }
// //   };
//       }

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
  // useEffect(() => {
  //   getTripsData();
  // }, []);

  const data = useMemo(() => tripsData, [tripsData]);
  return (
    <>
      <Layout>
        <div className="sm:-mt-40 w-full">
          <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded-2xl">

          <main className=" mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div>
                <div className="container mx-auto ">
                  <div className=" flex-col items-center justify-center">
                    <ul className="flex justify-between space-x-2 border-b-solid border-b border-b-[#C1C7CE]">
                      <div className="flex flex-row">
                        <li className="">
                          <Link
                            to=""
                            onClick={() => setOpenTab(1)}
                            className={`${
                              openTab === 1
                                ? "text-sm font-bold text-[#0F8CB4] border-b-solid border-b-2 border-b-[#0F8CB4]"
                                : ""
                            } inline-block px-4 py-2 text-sm`}
                          >
                            ALL
                          </Link>
                        </li>
                        <li>
                          <Link
                            to=""
                            onClick={() => setOpenTab(2)}
                            className={` ${
                              openTab === 2
                                ? " text-sm font-bold text-[#0F8CB4] border-b-solid border-b-2 border-b-[#0F8CB4]"
                                : ""
                            } inline-block px-4 py-2 text-sm`}
                          >
                            CURRENT
                          </Link>
                        </li>
                        <li>
                          <Link
                            to=""
                            onClick={() => setOpenTab(3)}
                            className={` ${
                              openTab === 3
                                ? "text-sm font-bold text-[#0F8CB4] border-b-solid border-b-2 border-b-[#0F8CB4]"
                                : ""
                            } inline-block px-4 py-2 text-sm`}
                          >
                            UPCOMING
                          </Link>
                        </li>

                        <li>
                          <Link
                            to=""
                            onClick={() => setOpenTab(4)}
                            className={` ${
                              openTab === 4
                                ? "text-sm font-bold text-[#0F8CB4] border-b-solid border-b-2 border-b-[#0F8CB4]"
                                : ""
                            } inline-block px-4 py-2 text-sm`}
                          >
                            PAST
                          </Link>
                        </li>
                      </div>
                      <div className="flex flex-end">
                        <li>
                          <button
                            onClick={() => setShow(true)}
                            className="bg-[#0F8CB4] hover:bg-[#0F8CB4] p-1 rounded-3xl text-white font-semibold hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded"
                          >
                            Add New Trips
                          </button>
                        </li>
                      </div>
                    </ul>
                    {/* <div className="p-3 mt-6 bg-white border">
                      <div className={openTab === 1 ? "block" : "hidden"}>
                        {" "}
                        React JS with Tailwind CSS Tab 1 Content show
                      </div>
                      <div className={openTab === 2 ? "block" : "hidden"}>
                        React JS with Tailwind CSS Tab 2 Content show
                      </div>
                      <div className={openTab === 3 ? "block" : "hidden"}>
                        React JS with Tailwind CSS Tab 3 Content show
                      </div>
                      <div className={openTab === 4 ? "block" : "hidden"}>
                        React JS with Tailwind CSS Tab 4 Content show
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="mt-6 relative">
              <div className="grid grid-rows-1 grid-flow-col gap-4">
                  <AddNewTrip onClose={() => setShow(false)} show={show} />

                  <div className="col-span-1">
                    <label>Route</label>
                    <select
                      id=""
                      class="block  w-full p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                    >
                      <option value="grapefruit">All</option>
                      <option value="lime">One</option>
                      <option selected value="coconut">
                        Two
                      </option>
                      <option value="mango">Three</option>
                    </select>
                  </div>

                  <div className="col-span-1">
                    <label>Boat Type</label>
                    <select
                      id=""
                      class="block w-full p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                    >
                      <option value="grapefruit">All</option>
                      <option value="lime">One</option>
                      <option selected value="coconut">
                        Two
                      </option>
                      <option value="mango">Three</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label>Boat Owner</label>
                    <select
                      id=""
                      class="block w-full  p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                    >
                      <option value="grapefruit">All</option>
                      <option value="lime">One</option>
                      <option selected value="coconut">
                        Two
                      </option>
                      <option value="mango">Three</option>
                    </select>
                  </div>
                  <div className="col-span-6">
                    <label>Period</label>
                    <div>
                      <input
                        className="border p-2 rounded-lg text-[#EDEDEF]-900 text-sm"
                        value={`${format(
                          range[0].startDate,
                          "dd MMM yyyy"
                        )} to ${format(range[0].endDate, "dd MMM yyyy")}`}
                        onClick={() => setOpen((open) => !open)}
                      />

                      <div ref={refOne}>
                        {open && (
                          <DateRange
                            onChange={(item) => setRange([item.selection])}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            ranges={range}
                            months={1}
                            direction="vertical"
                            className="calendarElement"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <Table columns={columns} data={data} label={"Trips"} />
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Trips;
