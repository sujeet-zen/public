import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Table, {
  AvatarCell,
  RowActions,
  SelectColumnFilter,
  StatusPill,
} from "../../../components/Table/Table";
import { API_URL } from "../../../Config";
import Form from "react-bootstrap/Form";

const ParcelBookings = () => {
  const [tripsData, setTripsData] = useState([]);

  const [inputFields, setInputFields] = useState([
    {
      type: "",
      quantity: "",
      weight: "",
      price: 0,
    },
  ]);

  const [types, setTypes] = useState([]);

  const addFields = () => {
    let newfield = { type: "", quantity: 1, weight: "", price: 0 };
    setInputFields([...inputFields, newfield]);
  };

  const handleAddRow = () => {
    const newRow = { id: rows.length + 1, type: "", quantity: "" };
    setRows([...rows, newRow]);
  };

  const handleRowChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const getTripsData = async () => {
    try {
      const res = await fetch(
        "https://64a52b5d00c3559aa9bf319d.mockapi.io/crud"
      )
        .then((res) => res.json())
        .then((data) => setTripsData(data));

      if (res.status === 200) {
        setTripsData(res?.data?.results);
      }
    } catch (err) {
      console.log("err", err);
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
      <div className="mt-6">
        <div className="flex-auto relative">
          <div className="grid grid-cols-4 gap-4 ">
            <div className="">
              <label>Pickup</label>
              <select
                id=""
                class="block  w-full p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
              ></select>
            </div>

            <div className="">
              <label>Drop</label>
              <select
                id=""
                class="block w-full p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
              ></select>
            </div>
          </div>
          {inputFields.map((input, index) => {
            return (
              <>
              <div className="grid grid-cols-4 gap-4 ">
                <div className="" key={index}>
                  <label>Type</label>
                  <select
                    id=""
                    class="block  w-full p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                  >
                    <option value="">Select Type</option>
                    {types?.data?.map((item) => {
                      return (
                        <option key={item.id} value={item.type}>
                          {item.type}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="">
                  <label>Quantity</label>
                  <input
                    type="text"
                    className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
                    required
                    maxLength={3}
                    placeholder="Enter Quantity"
                    name="quantity"
                    value={input.name}
                  />
                </div>

                <div className="">
                  <label>Weight</label>
                  <input
                    type="text"
                    className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
                    required
                    name="quantity"
                    value={input.name}
                    disabled
                  />
                </div>

                <div className="">
                  <label>Price</label>
                  <input
                    type="text"
                    className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
                    required
                    name="price"
                    disabled
                  />
                </div>
                </div>
              </>
            );
          })}
        </div>

        <div>
          <button className="text-blue-500" onClick={addFields}>
            + Add another Parcel Type
          </button>
        </div>

        <div className="mt-4">
          <h1>Sender Info</h1>
          <div className="flex flex-row mt-4">
            <div className="relative w-1/4  lg:max-w-sm mr-5">
              <label>Name</label>
              <input
                id=""
                name="tripId"
                type="text"
                required
                className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
              />
            </div>

            <div className="relative w-1/4  lg:max-w-sm mr-5">
              <label>Mobile Number</label>
              <input
                id=""
                name="tripId"
                type="text"
                required
                className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
              />
            </div>

            <div className="relative w-1/4  lg:max-w-sm mr-5">
              <label>Email ID</label>
              <input
                id=""
                name="tripId"
                type="text"
                required
                className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h1>Receiver Info</h1>
          <div className="flex flex-row mt-4">
            <div className="relative w-1/4  lg:max-w-sm mr-5">
              <label>Name</label>
              <input
                id=""
                name="tripId"
                type="text"
                required
                className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
              />
            </div>

            <div className="relative w-1/4  lg:max-w-sm mr-5">
              <label>Mobile Number</label>
              <input
                id=""
                name="tripId"
                type="text"
                required
                className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
              />
            </div>

            <div className="relative w-1/4  lg:max-w-sm mr-5">
              <label>Email ID</label>
              <input
                id=""
                name="tripId"
                type="text"
                required
                className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParcelBookings;
