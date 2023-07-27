import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../components/layout/Layout";
import Table, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
} from "../../components/Table/Table";
import API from "../../Redux/axios";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const getusersData = async () => {
    try {
      const res = await API.get("/admin/user");

      if (res.status === 200) {
        console.log("res", res);
        setUserData(res?.data?.results);
      }
    } catch (err) {
      console.log(err?.response?.data);
      // toast.error(err?.response?.data?.message);
    }
  };
  const columns = useMemo(
    () => [
      // {
      //   Header: "Name",
      //   accessor: "name",
      //   Cell: AvatarCell,
      //   imgAccessor: "imgUrl",
      //   emailAccessor: "email",
      // },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Usename",
        accessor: "username",
      },
      {
        Header: "Email ID",
        accessor: "email",
      },
      {
        Header: "Mobile",
        accessor: "mobile",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      // {
      //   Header: "Role",
      //   accessor: "role",
      //   Filter: SelectColumnFilter, // new
      //   filter: "includes",
      // },
    ],
    []
  );
  useEffect(() => {
    getusersData();
  }, []);

  const data = useMemo(() => userData, [userData]);
  console.log(userData);
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
                <Table columns={columns} data={data} />
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Users;
