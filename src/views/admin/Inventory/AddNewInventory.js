import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import closeIcon from "../../../assets/images/CloseIcon.svg";

export default function AddNewInventory(props) {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [ArrivalStartDate, setArrivalStartDate] = useState(new Date());

  if (!props.show) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="max-w-lg md:flex mx-auto my-6 relative w-auto">
          <div className="bg-white border-0 flex flex-col focus:outline-none outline-none relative rounded-3xl rounded-lg shadow-lg w-full">
            <div className="border-b border-slate-200 border-solid flex items-center items-start justify-between p-2 px-5 rounded-t text-center">
              <h3 className="text-base font-semibold text-black">
                Add New Inventory
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={props.onClose}
              >
                <div>
                  <img src={closeIcon} alt="" />
                </div>
              </button>
            </div>
            <div className="relative p-5 flex-auto modalBody">
              <form className="">
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="">
                    {" "}
                    <label htmlFor="" className="text-sm text-[#646464]">
                      Trip Id
                    </label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      id=""
                      name="tripId"
                      type="text"
                      required
                      className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="">
                    <label htmlFor="" className="text-sm text-[#646464]">
                      Date
                    </label>
                  </div>
                  <div className="w-full">
                    <DatePicker
                      selected={date}
                      onChange={(date) => setDate(date)}
                      className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="">
                    {" "}
                    <label htmlFor="" className="text-sm text-[#646464]">
                      Route
                    </label>
                  </div>
                  <div className="">
                    {" "}
                    <select
                      id=""
                      className="block w-full p-2 mb-3 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                    >
                      <option selected></option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="">
                    {" "}
                    <label htmlFor="" className="text-sm text-[#646464]">
                      Boat Type
                    </label>
                  </div>
                  <div className="">
                    {" "}
                    <select
                      id=""
                      className="block w-full p-2 mb-3 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                    >
                      <option selected></option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="">
                    {" "}
                    <label htmlFor="" className="text-sm text-[#646464]">
                      Boat Name
                    </label>
                  </div>
                  <div className="">
                    {" "}
                    <select
                      id=""
                      className="block w-full p-2 mb-3 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                    >
                      <option selected></option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="">
                    {" "}
                    <label htmlFor="" className="text-sm text-[#646464]">
                      Departure
                    </label>
                  </div>
                  <div className="">
                    {" "}
                    <select
                      id=""
                      className="block w-full p-2 text-sm text-[#EDEDEF]-900 border border-[#EDEDEF]-300 rounded-lg bg-[#EDEDEF]-50 focus:ring-[#EDEDEF]-500 focus:border-[#EDEDEF]-500 dark:bg-[#EDEDEF]-700 dark:border-[#EDEDEF]-600 dark:placeholder-[#EDEDEF]-400 dark:text-white dark:focus:ring-[#EDEDEF]-500 dark:focus:border-[#EDEDEF]-500"
                    >
                      <option selected></option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="">
                    {" "}
                    <label htmlFor="" className="text-sm text-[#646464]">
                      Arrival (URN)
                    </label>
                  </div>
                  <div className="">
                    {" "}
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="">
                    {" "}
                    <label htmlFor="" className="text-sm text-[#646464]">
                      Arrival (MND)
                    </label>
                  </div>
                  <div className="">
                    {" "}
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setArrivalStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-center p-6 ">
              <button
                className="border border-blue-500 font-semibold px-4 py-2 rounded rounded-3xl w-72 text-[#0F8CB4]"
                type="button"
                onClick={props.onClose}
              >
                Cancel
              </button>
              <button
                className="bg-[#0F8CB4] w-72 ml-4 hover:bg-[#0F8CB4] rounded-3xl text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={props.onClose}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
