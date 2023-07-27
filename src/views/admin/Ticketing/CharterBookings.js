import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Table, {
  AvatarCell,
  RowActions,
  SelectColumnFilter,
  StatusPill,
} from "../../../components/Table/Table";
import { API_URL } from "../../../Config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CharterBookings = () => {
  const [tripsData, setTripsData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [ArrivalStartDate, setArrivalStartDate] = useState(new Date());

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
            <label>Boarding</label>
            <select
              id=""
              class="block  w-full p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
            >
            </select>
          </div>

          <div className="">
            <label>Route</label>
            <select
              id=""
              class="block w-full p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
            >
            </select>
          </div>

          <div className="">
            <label>Departure Date</label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
            />
          </div>

          <div className="">
            <label>Start Time</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setArrivalStartDate(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"

            />
          </div>

          <div className="">
            <label>End Time</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setArrivalStartDate(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"

            />
          </div>

          <div className="">
            <label>Traveller</label>
            <select
              id=""
              class="block w-full  p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
            >
            </select>
          </div>

          <div className="">
            <label>Pets</label>
            <select
              id=""
              class="block w-full  p-2 mb-6 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
            >
            </select>
          </div>

          <div className="mt-5">
          <button class="bg-[#0F8CB4] border border-blue-500 font-semibold hover:bg-[#0F8CB4] hover:border-transparent hover:text-white px-4 px-6 py-2 rounded rounded-3xl text-white">Search</button>
          </div>

        </div>
      </div>
      </div>

    </>
  );
};

export default CharterBookings;
