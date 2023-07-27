import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import BookTickets from "./BookTickets";
import PassBookings from "./PassBookings";
import ParcelBookings from "./ParcelBookings";
import CharterBookings from "./CharterBookings";

const Ticketings = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <Layout>
        <div className="sm:-mt-40 w-full">
          <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded">
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
                            Book Tickets
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
                            Monthly Pass
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
                            Charter
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
                            Parcel
                          </Link>
                        </li>

                        <li>
                          <Link
                            to=""
                            onClick={() => setOpenTab(5)}
                            className={` ${
                              openTab === 5
                                ? "text-sm font-bold text-[#0F8CB4] border-b-solid border-b-2 border-b-[#0F8CB4]"
                                : ""
                            } inline-block px-4 py-2 text-sm`}
                          >
                            Booking
                          </Link>
                        </li>
                      </div>
                      {/* <div className="flex flex-end">
                        <li>
                          <button
                            onClick={() => setShow(true)}
                            className="bg-[#0F8CB4] hover:bg-[#0F8CB4] p-1 rounded-3xl text-white font-semibold hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded"
                          >
                            Add New Boat
                          </button>
                        </li>
                      </div> */}
                    </ul>
                    <div className="p-3 mt-6 bg-white">
                      <div className={openTab === 1 ? "block" : "hidden"}>
                        <BookTickets />
                      </div>
                      <div className={openTab === 2 ? "block" : "hidden"}>
                        <PassBookings />{" "}
                      </div>
                      <div className={openTab === 3 ? "block" : "hidden"}>
                        <CharterBookings />{" "}
                      </div>
                      <div className={openTab === 4 ? "block" : "hidden"}>
                        <ParcelBookings />
                      </div>
                      <div className={openTab === 5 ? "block" : "hidden"}>
                        React JS with Tailwind CSS Tab 5 Content show
                      </div>
                    </div>
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

export default Ticketings;
