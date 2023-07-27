import React from "react";
import { useState } from "react";
import closeIcon from "../../../../assets/images/CloseIcon.svg";

export default function AddValueAddedServices(props) {
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
                Add Value Added Services
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
                  <div>
                    {" "}
                    <label htmlFor="" className="text-sm text-[#646464]">
                      Service Name
                    </label>
                  </div>
                  <div>
                    {" "}
                    <input
                      name=""
                      type="text"
                      required
                      className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    {" "}
                    <label htmlFor="" className="text-sm text-[#646464]">
                      Service Price
                    </label>
                  </div>
                  <div>
                    {" "}
                    <input
                      name=""
                      type="text"
                      required
                      className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    {" "}
                    <label htmlFor="" className="text-sm text-[#646464]">
                      GST Rate
                    </label>
                  </div>
                  <div>
                    {" "}
                    <input
                      name=""
                      type="text"
                      required
                      className="border border-gray-300 focus:outline-none focus:z-10 placeholder-gray-500 px-3 py-2 sm:text-sm text-gray-900 w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    {" "}
                    <label htmlFor="" className="text-sm text-[#646464]">
                      Value Added services Type
                    </label>
                  </div>
                  <div>
                    {" "}
                    <select className="bg-white border duration-150 ease-linear focus:outline-none focus:ring placeholder-blueGray-300 px-3 py-3 rounded text-blueGray-600 text-sm transition-all w-full">
                      <option>Please Select</option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
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
