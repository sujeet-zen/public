import React from "react";
import { FaUserPlus, FaRegChartBar } from "react-icons/fa";
import { MdPets, MdHome } from "react-icons/md";
import Layout from "../../components/layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="sm:-mt-40 w-full">
        <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded">
          <main className=" mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">Dashboard</h1>
              {/* <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Add New
              </button> */}
            </div>
            <div className="mt-5 sm:mt-10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="col-span-1 bg-gray-100 rounded-2xl p-5 relative shadow-xl">
                  <div className="absolute p-3 text-white rounded-md shadow-sm -top-4 bg-dark-purple">
                    <FaUserPlus size={25} />
                  </div>
                  <div className="float-right px-4 text-center mb-2">
                    <p className="text-sm">Users</p>
                    <p className="text-4xl text-dark-purple">281</p>
                  </div>
                  <hr className="flex w-full" />
                  <div className="flex mt-2">
                    <p className="">
                      <span className="font-bold text-green-600">+55% </span>
                      than last week
                    </p>
                  </div>
                </div>
                {/* <div className="col-span-1 bg-gray-100 rounded-2xl p-5 relative shadow-xl">
                  <div className="absolute p-3 text-white rounded-md shadow-sm -top-4 bg-dark-purple">
                    <FaRegChartBar size={25} />
                  </div>
                  <div className="float-right px-4 text-center mb-2">
                    <p className="text-sm">Traffic</p>
                    <p className="text-4xl text-dark-purple">35,026</p>
                  </div>
                  <hr className="flex w-full" />
                  <div className="flex mt-2">
                    <p className="">
                      <span className="font-bold text-green-600">+20% </span>
                      than last week
                    </p>
                  </div>
                </div> */}
                <div className="col-span-1 bg-gray-100 rounded-2xl p-5 relative shadow-xl">
                  <div className="absolute p-3 text-white rounded-md shadow-sm -top-4 bg-dark-purple">
                    <MdPets size={25} />
                  </div>
                  <div className="float-right px-4 text-center mb-2">
                    <p className="text-sm">Pets</p>
                    <p className="text-4xl text-dark-purple">66</p>
                  </div>
                  <hr className="flex w-full" />
                  <div className="flex mt-2">
                    <p className="">
                      <span className="font-bold text-green-600">+15% </span>
                      than last week
                    </p>
                  </div>
                </div>
                <div className="col-span-1 bg-gray-100 rounded-2xl p-5 relative shadow-xl">
                  <div className="absolute p-3 text-white rounded-md shadow-sm -top-4 bg-dark-purple">
                    <MdHome size={25} />
                  </div>
                  <div className="float-right px-4 text-center mb-2">
                    <p className="text-sm">Vets</p>
                    <p className="text-4xl text-dark-purple">10</p>
                  </div>
                  <hr className="flex w-full" />
                  <div className="flex mt-2">
                    <p className="">
                      <span className="font-bold text-red-600">-65% </span>
                      than last week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
