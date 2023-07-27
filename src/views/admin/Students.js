import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const Students = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([
    // {
    //   id: 0,
    //   name: "A",
    //   mobile: 0,
    //   gender: "MALE",
    //   lang: "English",
    // },
  ]);

  const getStudents = async () => {
    try {
      const res = await axios({
        url: "http://localhost:5000/students",
        method: "GET",
      });

      if (res) {
        console.log("res", res);
        setStudents(res?.data);
      }
    } catch (error) {
      console.log("error", error);
    }

    /* 
axios({
        url: "http://localhost:5000/students",
        method: "GET",
      }).then((res)=>{
        console.log("res", res);
        setStudents(res);
      })
        .catch((error)=>{
        console.log("error", error);

      })
*/
  };

  const deleteHandler = async (id) => {
    console.log("DELETE", id);
    if (id) {
      try {
        const onDeleteStudent = await axios({
          //   url: "http://localhost:5000/students/" + id,
          url: `http://localhost:5000/students/${id}`,
          method: "DELETE",
        });
        if (onDeleteStudent) {
          getStudents();
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <>
      <Layout>
        <div className="sm:-mt-40 w-full">
          <div className="min-h-screen bg-white text-gray-900 shadow-lg rounded">
            <main className=" mx-auto px-4 sm:px-6 lg:px-8 pt-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Students</h1>
                <Link
                  to={"/student"}
                  class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Add New
                </Link>
              </div>
              <div className="mt-6">
                <table className="table-auto border border-slate-300 border-collapse w-full">
                  <thead>
                    <tr>
                      <th className="border border-slate-300">ID</th>
                      <th className="border border-slate-300">Name</th>
                      <th className="border border-slate-300">Mobile</th>
                      <th className="border border-slate-300">Gender</th>
                      <th className="border border-slate-300">Language</th>
                      <th className="border border-slate-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((s) => {
                      return (
                        <tr>
                          <td className="border border-slate-300 text-center">
                            {s.id}
                          </td>
                          <td className="border border-slate-300 text-center">
                            {s.name}
                          </td>
                          <td className="border border-slate-300 text-center">
                            {s.mobile}
                          </td>
                          <td className="border border-slate-300 text-center">
                            {/* {s.gender} */}
                            {s.gender == "MALE" ? (
                              <span className="bg-blue-300 p-1">Male</span>
                            ) : (
                              <span className="bg-pink-300 p-1">Female</span>
                            )}
                          </td>
                          <td className="border border-slate-300 text-center">
                            {s.lang}
                          </td>{" "}
                          <td className="border border-slate-300 text-center">
                            <span
                              class="flex flex-row bg-yellow-500 hover:bg-blue-500 font-semibold text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded justify-center align-self-center align-center cursor-pointer"
                              // onClick={submitHandler}
                              onClick={() => {
                                navigate("/student/" + s.id);
                                // deleteHandler(s.id);
                              }}
                            >
                              Edit
                            </span>
                            <span
                              class="flex flex-row bg-red-500 hover:bg-yellow-500 font-semibold text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded justify-center align-self-center align-center cursor-pointer"
                              // onClick={submitHandler}
                              onClick={() => {
                                deleteHandler(s.id);
                              }}
                            >
                              Delete
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Students;
