import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";


const Users = () => {



  return (
    <>
      <Layout>
        <div className="sm:-mt-40 w-full">
          <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded">
            <main className=" mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Users</h1>
                <Link
                  to={"/user"}
                  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Add New
                </Link>
              </div>
              <div className="mt-6">
                
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Users;
